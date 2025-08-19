const { PrismaClient } = require("../generated/prisma");
const { subDays, startOfDay, endOfDay } = require("date-fns");
const {
  sendMessagetoUser,
  sendRejectedLeaveToUser,
  sendLeaveToAdmins,
  sendAminLeaveExpires,
  sendUserLeaveExpires,
  sendMessagetoUser1,
} = require("../mails/sendMail");
const HttpError = require("../models/error");
const fs = require("fs");

const prisma = new PrismaClient();

const path = require("path");
const transporter = require("../config/mails");

const createLeave = async (req, res, next) => {
  try {
    const { type, startDate, endDate, reason, duration } = req.body;
    const userId = req.params.id;

    if (!type || !startDate || !endDate || !reason || !duration) {
      return next(
        new HttpError("Tous les champs obligatoires ne sont pas remplis.", 422)
      );
    }

    let documentUrl = null;

    // If a file is uploaded
    if (req.files && req.files.document) {
      const document = req.files.document;
      const uploadPath = path.join(__dirname, "../uploads/documents");

      // Ensure directory exists
      require("fs").mkdirSync(uploadPath, { recursive: true });

      // Create unique filename
      const fileName = `${Date.now()}-${document.name}`;
      const filePath = path.join(uploadPath, fileName);

      // Move the file to uploads/documents
      await document.mv(filePath);

      // Save relative URL
      documentUrl = `/uploads/documents/${fileName}`;
    }

    const currentYear = new Date().getFullYear();

    // Step 1: Check leave balance
    const balance = await prisma.balanceConge.findFirst({
      where: { userId, type, year: currentYear },
    });

    if (!balance) {
      return next(
        new HttpError(
          `Aucun solde de congé disponible pour ${type} en ${currentYear}.`,
          404
        )
      );
    }

    const remaining = balance.total - balance.used;
    if (duration > remaining) {
      return next(
        new HttpError(
          `Solde insuffisant: ${remaining} jour(s) restant(s) pour ce type de congé.`,
          400
        )
      );
    }

    // Step 2: Create leave
    const leave = await prisma.conge.create({
      data: {
        type,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
        duration: Number(duration),
        documentUrl,
        userId,
        history: {
          create: {
            action: "CREE",
            byUserId: userId,
          },
        },
      },
      include: { user: true },
    });

    // Step 3: Notify admins
    const admins = await prisma.utilisateurs.findMany({
      where: { role: "RH" },
    });

    for (const admin of admins) {
      await sendLeaveToAdmins(admin.email, leave.user, leave);
    }

    res.status(201).json(leave);
  } catch (error) {
    next(error);
  }
};

const getAllLeaves = async (req, res, next) => {
  try {
    const leaves = await prisma.conge.findMany({
      include: {
        user: true,
        reviewer: true,
        history: true,
      },
    });
    res.json({ leaves });
  } catch (error) {
    next(error);
  }
};

const getLeaveById = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const leave = await prisma.conge.findUnique({
      where: { id: leaveId },
      include: { user: true, reviewer: true, history: true },
    });

    if (!leave) return next(new HttpError("Demande introuvable.", 404));

    res.json(leave);
  } catch (error) {
    next(error);
  }
};

const getLeavesByUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const leaves = await prisma.conge.findMany({
      where: { userId },
      include: { history: true },
    });

    res.json({ leaves });
  } catch (error) {
    next(error);
  }
};

const getLeavesByDate = async (req, res, next) => {
  try {
    const { start, end } = req.query;
    if (!start || !end) {
      return next(new HttpError("Veuillez spécifier les dates.", 400));
    }

    const leaves = await prisma.conge.findMany({
      where: {
        startDate: {
          gte: new Date(start),
        },
        endDate: {
          lte: new Date(end),
        },
      },
      include: { user: true },
    });

    res.status(200).json(leaves);
  } catch (error) {
    console.error("Erreur récupération congés par date :", error);
    return next(
      new HttpError("Erreur lors de la récupération des congés.", 500)
    );
  }
};

const updateLeaveStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, reviewerId } = req.body;

    if (!status || !["APPROUVE", "REJETE", "ANNULE"].includes(status)) {
      return next(new HttpError("Statut invalide.", 400));
    }

    const updated = await prisma.conge.update({
      where: { id: parseInt(id) },
      data: {
        status,
        reviewedBy: reviewerId,
      },
    });

    res.status(200).json({ message: "Statut mis à jour.", leave: updated });
  } catch (error) {
    console.error("Erreur mise à jour statut :", error);
    return next(new HttpError("Erreur lors de la mise à jour du congé.", 500));
  }
};

const updateLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const userId = req.user.id;
    const { type, startDate, endDate, reason, duration, documentUrl } =
      req.body;

    const leave = await prisma.conge.findUnique({ where: { id: leaveId } });
    if (!leave) return next(new HttpError("Demande introuvable.", 404));

    if (leave.status !== "EN_ATTENTE") {
      return next(
        new HttpError(
          "Seules les demandes en attente peuvent être modifiées.",
          403
        )
      );
    }

    const updated = await prisma.conge.update({
      where: { id: leaveId },
      data: {
        type,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
        duration,
        documentUrl,
        updatedAt: new Date(),
        history: {
          create: {
            action: "MODIFIE",
            byUserId: userId,
          },
        },
      },
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

const deleteLeave = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.conge.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Congé supprimé." });
  } catch (error) {
    console.error("Erreur suppression congé :", error);
    return next(new HttpError("Erreur lors de la suppression du congé.", 500));
  }
};

const acceptLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const reviewerId = req.user.id;

    // Vérifier le reviewer
    const reviewer = await prisma.utilisateurs.findUnique({
      where: { id: reviewerId },
    });
    if (!reviewer) {
      return next(
        new HttpError("L'utilisateur relecteur est introuvable.", 404)
      );
    }

    // Récupérer la demande de congé
    const leave = await prisma.conge.findUnique({
      where: { id: leaveId },
      include: { user: true },
    });
    if (!leave) return next(new HttpError("Demande introuvable.", 404));
    if (leave.status !== "EN_ATTENTE")
      return next(
        new HttpError(
          "Seules les demandes en attente peuvent être approuvées.",
          400
        )
      );

    const currentYear = new Date().getFullYear();

    // Vérifier le solde
    const balance = await prisma.balanceConge.findFirst({
      where: { userId: leave.userId, type: leave.type, year: currentYear },
    });
    if (!balance) {
      return next(
        new HttpError(
          `Aucun solde disponible pour ${leave.type} en ${currentYear}.`,
          404
        )
      );
    }

    const remaining = balance.total - balance.used;
    if (leave.duration > remaining) {
      return next(
        new HttpError(
          `Impossible d'approuver : solde insuffisant. Il reste ${remaining} jour(s).`,
          400
        )
      );
    }

    // Gestion du fichier de la lettre d’approbation (JSONFileUpload)
    let letterUrl = null;
    let attachmentPath = null;
    let attachmentName = null;

    if (req.files && req.files.letter) {
      const letter = req.files.letter;
      const uploadPath = path.join(__dirname, "../uploads/letters");
      fs.mkdirSync(uploadPath, { recursive: true });

      const fileName = `${Date.now()}-${letter.name}`;
      const filePath = path.join(uploadPath, fileName);

      await letter.mv(filePath);

      letterUrl = `/uploads/letters/${fileName}`;
      attachmentPath = filePath; // chemin réel pour Nodemailer
      attachmentName = letter.name; // nom original pour l'utilisateur
    }

    // Mise à jour du congé
    const updatedLeave = await prisma.conge.update({
      where: { id: leaveId },
      data: {
        status: "APPROUVE",
        reviewedBy: reviewerId,
        letterUrl,
        history: {
          create: {
            action: "APPROUVE",
            byUserId: reviewerId,
          },
        },
      },
    });

    // Mise à jour du solde utilisé
    await prisma.balanceConge.update({
      where: { id: balance.id },
      data: { used: { increment: leave.duration } },
    });

    const { name, email } = leave.user;

    // Envoi email avec la lettre en pièce jointe
    if (attachmentPath && attachmentName) {
      await transporter.sendMail({
        from: `Coopec Sodac <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Approbation de votre demande de congé",
        html: `<p>Bonjour ${name},</p>
               <p>Votre demande de congé du ${leave.startDate.toDateString()} au ${leave.endDate.toDateString()} a été <b>approuvée</b>.</p>
               <p>Veuillez trouver la lettre d’approbation ci-jointe.</p>`,
        attachments: [
          {
            filename: attachmentName,
            path: attachmentPath,
          },
        ],
      });
    } else {
      // Si pas de fichier, juste notifier
      await sendMessagetoUser(name, email, leave.startDate, leave.endDate);
    }

    res.json(updatedLeave);
  } catch (error) {
    next(error);
  }
};

const rejectLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const reviewerId = req.user.id;
    const { comment } = req.body;

    const leave = await prisma.conge.findUnique({
      where: { id: leaveId },
      include: {
        user: true,
      },
    });

    if (!leave) return next(new HttpError("Demande introuvable.", 404));
    if (leave.status !== "EN_ATTENTE") {
      return next(
        new HttpError(
          "Seules les demandes en attente peuvent être rejetées.",
          400
        )
      );
    }

    const updated = await prisma.conge.update({
      where: { id: leaveId },
      data: {
        status: "REJETE",
        reviewedBy: reviewerId,
        comment,
        history: {
          create: {
            action: "REJETE",
            byUserId: reviewerId,
            note: comment,
          },
        },
      },
    });

    // ✉️ Envoi d'email à l'utilisateur
    const { name, email } = leave.user;
    await sendRejectedLeaveToUser(
      name,
      email,
      leave.startDate,
      leave.endDate,
      comment
    );

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

const checkLeavesEndingToday = async () => {
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  const endingLeaves = await prisma.conge.findMany({
    where: {
      endDate: {
        gte: todayStart,
        lte: todayEnd,
      },
    },
    include: {
      user: true,
    },
  });

  if (endingLeaves.length === 0) return;

  const admins = await prisma.utilisateurs.findMany({
    where: { role: "ADMIN" },
  });

  for (const leave of endingLeaves) {
    const { user } = leave;

    // Email to the user
    await sendUserLeaveExpires(user.name, user.email, leave.endDate);

    // Email to each admin
    for (const admin of admins) {
      await sendAminLeaveExpires(
        admin.email,
        admin.name,
        user.name,
        leave.endDate
      );
    }
  }
};

const leavesByStatus = async (req, res, next) => {
  try {
    const leaves = await prisma.conge.findMany({
      where: {
        status: "APPROUVE",
      },
      include: {
        user: {
          select: { name: true },
        },
        reviewer: {
          select: { name: true },
        },
      },
      orderBy: {
        startDate: "desc",
      },
    });

    res.json({ leaves });
  } catch (error) {
    next(error);
  }
};

const postponeLeave = async (req, res, next) => {
  try {
    const leaveId = req.params.id;
    const adminId = req.user.id;
    const { start, end, comment } = req.body; // ajout du champ comment

    if (!start || !end) {
      return next(new HttpError("Veuillez fournir les nouvelles dates.", 400));
    }

    const admin = await prisma.utilisateurs.findUnique({
      where: { id: adminId },
    });

    if (!admin) {
      return next(new HttpError("Utilisateur relecteur introuvable.", 404));
    }

    const leave = await prisma.conge.findUnique({
      where: { id: leaveId },
      include: { user: true },
    });
    if (!leave) return next(new HttpError("Demande introuvable.", 404));

    if (!["EN_ATTENTE", "APPROUVE"].includes(leave.status)) {
      return next(
        new HttpError(
          "Seules les demandes en attente ou approuvées peuvent être repoussées.",
          400
        )
      );
    }

    // Update les dates et le statut
    const updatedLeave = await prisma.conge.update({
      where: { id: leaveId },
      data: {
        startDate: new Date(start),
        endDate: new Date(end),
        status: "REPOUSSE",
        reviewedBy: adminId,
        history: {
          create: {
            action: "REPOUSSE",
            byUserId: adminId,
          },
        },
      },
    });

    // --- Envoi de l'email avec le commentaire ---
    const { name, email } = leave.user;
    await sendMessagetoUser1(
      name,
      email,
      start,
      end,
      comment || "Votre demande a été repoussée par l’administrateur."
    );

    res.json({
      ...updatedLeave,
      info: "Email envoyé avec le commentaire.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLeave,
  getAllLeaves,
  getLeaveById,
  getLeavesByUser,
  getLeavesByDate,
  updateLeaveStatus,
  deleteLeave,
  acceptLeave,
  rejectLeave,
  updateLeave,
  checkLeavesEndingToday,
  leavesByStatus,
  postponeLeave,
};
