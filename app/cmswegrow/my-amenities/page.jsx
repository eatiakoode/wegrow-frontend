import dynamic from "next/dynamic";
import MyAmenity from "@/components/dashboard/my-amenities";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyAmenity />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
