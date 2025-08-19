import AdminLayout from "@/components/admin/layout";
import VerifyEmailForm from "@/components/auth/verifyEmail-Form";

const VeryfyEmail = () => {
  return (
    <AdminLayout>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <VerifyEmailForm />
        </div>
      </div>
    </AdminLayout>
  );
};

export default VeryfyEmail;
