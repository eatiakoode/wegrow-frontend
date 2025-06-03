import dynamic from "next/dynamic";
import AdminLogin from "@/components/adminlogin";

export const metadata = {
  title: 'Login || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <AdminLogin />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
