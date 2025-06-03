import dynamic from "next/dynamic";
import EditPropertytype from "@/components/dashboard/edit-propertytype";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
