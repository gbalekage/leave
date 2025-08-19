const { PrismaClient } = require("../generated/prisma");
const HttpError = require("../models/error");
const prisma = new PrismaClient();

const getLeaveStats = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res
        .status(400)
        .json({ error: "Paramètres 'from' et 'to' requis." });
    }

    const leaves = await prisma.conge.findMany({
      where: {
        createdAt: {
          gte: new Date(from),
          lte: new Date(to),
        },
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
      },
    });

    const grouped = leaves.reduce((acc, leave) => {
      const date = leave.createdAt.toISOString().split("T")[0];

      if (!acc[date]) {
        acc[date] = { accepted: 0, pending: 0, rejected: 0 };
      }

      const statusKey =
        leave.status === "APPROUVE"
          ? "accepted"
          : leave.status === "EN_ATTENTE"
          ? "pending"
          : leave.status === "REJETE"
          ? "rejected"
          : null;

      if (statusKey) acc[date][statusKey]++;
      return acc;
    }, {});

    const result = Object.entries(grouped)
      .map(([date, counts]) => ({
        date,
        ...counts,
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const stats = {
      total: leaves.length,
      accepted: leaves.filter((l) => l.status === "APPROUVE").length,
      pending: leaves.filter((l) => l.status === "EN_ATTENTE").length,
      rejected: leaves.filter((l) => l.status === "REJETE").length,
      chart: result,
    };

    console.log("Stars form server:", stats);

    return res.json(stats);
  } catch (error) {
    console.error("Erreur dans getLeaveStats:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = { getLeaveStats };
