import dynamic from "next/dynamic";
import EditCity from "@/components/dashboard/edit-city";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditCity />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
