import dynamic from "next/dynamic";
import EditCountry from "@/components/dashboard/edit-country";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditCountry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
