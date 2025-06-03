import dynamic from "next/dynamic";
import EditLocation from "@/components/dashboard/edit-location";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditLocation />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
