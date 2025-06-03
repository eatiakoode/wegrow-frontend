import dynamic from "next/dynamic";
import EditLanding from "@/components/dashboard/edit-landing";

export const metadata = {
  title: 'Create Listing || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <EditLanding />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
