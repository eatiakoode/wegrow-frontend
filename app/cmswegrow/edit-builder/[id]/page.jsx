import dynamic from "next/dynamic";
import EditBuilder from "@/components/dashboard/edit-builder";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditBuilder />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
