import dynamic from "next/dynamic";
import AddCountry from "@/components/dashboard/add-country";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddCountry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
