import dynamic from "next/dynamic";
import AddPropertytype from "@/components/dashboard/add-propertytype";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
