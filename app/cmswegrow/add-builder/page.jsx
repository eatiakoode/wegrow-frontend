import dynamic from "next/dynamic";
import AddBuilder from "@/components/dashboard/add-builder";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddBuilder />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
