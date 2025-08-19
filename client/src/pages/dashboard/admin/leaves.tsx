"use client";

import AdminLayout from "@/components/admin/layout";
import { ThemeBtn } from "@/components/global/theme-btn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserContext } from "@/context/user";
import type { Leave } from "@/types/user";
import axios from "axios";
import { Loader } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { IconPdf } from "@tabler/icons-react";

const AllLeaves = () => {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = user?.token;
  const [selectedLeaveId, setSelectedLeaveId] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openPostponeDialog, setOpenPostponeDialog] = useState(false);
  const [postponeStart, setPostponeStart] = useState("");
  const [postponeEnd, setPostponeEnd] = useState("");
  const [postponeComment, setPostponeComment] = useState("");
  const [loading3, setLoading3] = useState(false);
  const [approvalLetter, setApprovalLetter] = useState<File | null>(null);
  const [openApproveDialog, setOpenApproveDialog] = useState(false);

  const fetchLeaves = async () => {
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      if (!serverUrl) {
        toast.error("L'URL du serveur n'est pas configurée.");
        return;
      }

      const res = await axios.get(`${serverUrl}/api/leaves/all-leaves`);
      setLeaves(res.data.leaves);
    } catch (error) {
      console.error("Erreur lors du chargement des conges :", error);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const handleAcceptWithLetter = async (leaveId: string) => {
    if (!token) return toast.error("Utilisateur non authentifié.");
    if (!leaveId) return toast.error("Aucune demande sélectionnée.");
    setLoading(true);

    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      const formData = new FormData();
      if (approvalLetter) {
        formData.append("letter", approvalLetter);
      }

      const res = await axios.patch(
        `${serverUrl}/api/leaves/accept/${leaveId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Demande approuvée avec succès !");
      setApprovalLetter(null);
      setOpenApproveDialog(false);
      fetchLeaves(); // rafraîchir la liste
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Erreur lors de l'approbation."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    if (!token || !selectedLeaveId)
      return toast.error("Utilisateur non authentifié.");
    setLoading2(true);
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      const res = await axios.patch(
        `${serverUrl}/api/leaves/reject/${selectedLeaveId}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Demande rejetée avec succès !");
      setOpenDialog(false);
      setComment("");
      setSelectedLeaveId(null);
      fetchLeaves();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Erreur lors du rejet.");
    } finally {
      setLoading2(false);
    }
  };

  const handlePostpone = async () => {
    if (!token || !selectedLeaveId)
      return toast.error("Utilisateur non authentifié.");
    if (!postponeStart || !postponeEnd)
      return toast.error("Veuillez fournir les nouvelles dates.");

    setLoading3(true);
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      await axios.patch(
        `${serverUrl}/api/leaves/${selectedLeaveId}/postpone`,
        {
          start: postponeStart,
          end: postponeEnd,
          comment: postponeComment,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Demande repoussée avec succès !");
      setOpenPostponeDialog(false);
      setSelectedLeaveId(null);
      setPostponeStart("");
      setPostponeEnd("");
      setPostponeComment("");
      fetchLeaves();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Erreur lors du report.");
    } finally {
      setLoading3(false);
    }
  };

  const filteredLeaves = leaves.filter((u) =>
    `${u.type} ${u.reason}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink>Bonjour, {user?.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Demande Regeter</h1>
        </div>
        <div className="p-3">
          <ThemeBtn />
        </div>
      </header>
      <div className="p-4 space-y-4">
        <Input
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        {filteredLeaves.length === 0 ? (
          <div className="flex justify-center items-center text-center text-muted-foreground py-10">
            <Loader className="animate-spin mr-3" />
            <p>Chargement des conge...</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Debut</TableHead>
                <TableHead>Fin</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeaves.map((leave) => (
                <TableRow key={leave.id} className="cursor-pointer">
                  <TableCell>{leave.user?.name || "Inconnu"}</TableCell>
                  <TableCell>{leave.type}</TableCell>
                  <TableCell>
                    {new Date(leave.startDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(leave.endDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{leave.status}</TableCell>
                  <TableCell className="flex gap-2">
                    {leave.documentUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          const serverUrl = import.meta.env.VITE_SERVER_URL;
                          window.open(
                            `${serverUrl}${leave.documentUrl}`,
                            "_blank"
                          );
                        }}
                      >
                        <IconPdf />
                      </Button>
                    )}

                    {leave.status === "EN_ATTENTE" && (
                      <>
                        <Button
                          variant="default"
                          size="sm"
                          disabled={loading}
                          onClick={() => {
                            setSelectedLeaveId(leave.id);
                            setOpenApproveDialog(true);
                          }}
                        >
                          <p>Approuver</p>
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          disabled={loading2}
                          onClick={() => {
                            setSelectedLeaveId(leave.id);
                            setOpenDialog(true);
                          }}
                        >
                          {loading2 ? (
                            <div className="flex items-center justify-center text-xs">
                              <Loader className="animate-spin mr-2" />
                              <p>En cours...</p>
                            </div>
                          ) : (
                            <p>Rejeter</p>
                          )}
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            setSelectedLeaveId(leave.id);
                            setOpenPostponeDialog(true);
                          }}
                        >
                          Repousser
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rejeter la demande</DialogTitle>
            <DialogDescription>
              Entrez la raison du rejet pour cette demande de congé.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Entrez un commentaire..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Annuler
            </Button>
            <Button
              variant="destructive"
              onClick={handleReject}
              disabled={loading2 || comment.trim() === ""}
            >
              {loading2 ? (
                <div className="flex items-center justify-center text-xs">
                  <Loader className="animate-spin mr-2" />
                  <p>Rejet en cours...</p>
                </div>
              ) : (
                <p>Confirmer</p>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openPostponeDialog} onOpenChange={setOpenPostponeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Repousser la demande</DialogTitle>
            <DialogDescription>
              Choisissez les nouvelles dates et ajoutez un commentaire.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <Input
              type="date"
              value={postponeStart}
              onChange={(e) => setPostponeStart(e.target.value)}
            />
            <Input
              type="date"
              value={postponeEnd}
              onChange={(e) => setPostponeEnd(e.target.value)}
            />
            <Textarea
              placeholder="Entrez un commentaire (optionnel)..."
              value={postponeComment}
              onChange={(e) => setPostponeComment(e.target.value)}
            />
          </div>

          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setOpenPostponeDialog(false)}
            >
              Annuler
            </Button>
            <Button
              onClick={handlePostpone}
              disabled={loading3 || !postponeStart || !postponeEnd}
            >
              {loading3 ? (
                <div className="flex items-center justify-center text-xs">
                  <Loader className="animate-spin mr-2" />
                  <p>En cours...</p>
                </div>
              ) : (
                <p>Confirmer</p>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openApproveDialog} onOpenChange={setOpenApproveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approuver la demande</DialogTitle>
            <DialogDescription>
              Vous pouvez ajouter une lettre d'approbation (PDF) avant
              d'approuver.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setApprovalLetter(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>

          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setOpenApproveDialog(false)}
            >
              Annuler
            </Button>
            <Button
              onClick={() => handleAcceptWithLetter(selectedLeaveId!)}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center text-xs">
                  <Loader className="animate-spin mr-2" />
                  <p>En cours...</p>
                </div>
              ) : (
                <p>Approuver</p>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AllLeaves;
