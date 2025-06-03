import dynamic from "next/dynamic";
import AddCity from "@/components/dashboard/add-city";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddCity />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
