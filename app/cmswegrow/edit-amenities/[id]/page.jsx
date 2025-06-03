import dynamic from "next/dynamic";
import EditAmenity from "@/components/dashboard/edit-amenities";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditAmenity />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
