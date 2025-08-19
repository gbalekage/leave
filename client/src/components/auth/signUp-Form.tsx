import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

function generateMatricule(role: string): string {
  if (!role) return "";

  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const dateTime = `${year}${month}${day}-${hours}${minutes}${seconds}`;

  let prefix = "";
  switch (role.toUpperCase()) {
    case "RH":
      prefix = "RH";
      break;
    case "EMPLOYEE":
      prefix = "EMP";
      break;
    default:
      prefix = "UNK";
  }

  return `${prefix}-${dateTime}`;
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [role, setRole] = useState("");
  const [matricule, setMatricule] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    const newMatricule = generateMatricule(selectedRole);
    setMatricule(newMatricule);
  };

  const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSex = e.target.value;
    setSex(selectedSex);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serverUrl = import.meta.env.VITE_SERVER_URL;
    if (!serverUrl) {
      toast.error("L'URL du serveur n'est pas configurée.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${serverUrl}/api/users/create-user`, {
        name,
        email,
        dateNaissance: new Date(date),
        address,
        phone,
        sexe: sex,
        role,
        matricule,
        password,
        password2,
      });
      setName("");
      setEmail("");
      setRole("");
      setMatricule("");
      setPassword("");
      setAddress("");
      setSex("");
      setDate("");
      setPhone("");
      setPassword2("");

      if (response.status === 201) {
        toast.success(response?.data?.message);
        navigate("/verify-email");
      }
    } catch (err: any) {
      toast.error(
        err.response?.data?.message ||
          "Une erreur est survenue lors de la création du compte."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Créer un compte</CardTitle>
          <CardDescription>
            Remplissez les informations ci-dessous pour créer un compte
            utilisateur.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-xs">
                  Nom complet
                </Label>
                <Input
                  value={name}
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-xs">
                  Adresse e-mail
                </Label>
                <Input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="exemple@mail.com"
                />
              </div>

              {/* Address */}
              <div className="grid gap-2">
                <Label htmlFor="address" className="text-xs">
                  Adresse
                </Label>
                <Input
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Adresse"
                />
              </div>

              {/* Phone */}
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-xs">
                  Phone
                </Label>
                <Input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone"
                />
              </div>

              {/* Date of Birth */}
              <div className="grid gap-2">
                <Label htmlFor="date" className="text-xs">
                  Date de Naissance
                </Label>
                <Input
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                />
              </div>

              {/* Sex */}
              <div className="grid gap-2">
                <Label htmlFor="sex" className="text-xs">
                  Sexe
                </Label>
                <select
                  id="sex"
                  name="sex"
                  value={sex}
                  onChange={handleSexChange}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez un sexe</option>
                  <option value="MASCULIN">Homme</option>
                  <option value="FEMININ">Femme</option>
                </select>
              </div>

              {/* Role */}
              <div className="grid gap-2">
                <Label htmlFor="role" className="text-xs">
                  Rôle
                </Label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez un rôle</option>
                  <option value="RH">Resources Humaines</option>
                  <option value="EMPLOYEE">Employé</option>
                </select>
              </div>

              {/* Matricule */}
              <div className="grid gap-2">
                <Label htmlFor="matricule" className="text-xs">
                  Matricule
                </Label>
                <Input
                  name="matricule"
                  type="text"
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value)}
                  readOnly
                  disabled
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-xs">
                  Mot de passe
                </Label>
                <Input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>

              {/* Confirm Password */}
              <div className="grid gap-2">
                <Label htmlFor="confirm-password" className="text-xs">
                  Confirmer le mot de passe
                </Label>
                <Input
                  id="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-6" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                  <p className="text-xs">En cours...</p>
                </div>
              ) : (
                "Créer le compte"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
