import dynamic from "next/dynamic";
import EditProperty from "@/components/dashboard/edit-property";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditProperty />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
