import dynamic from "next/dynamic";
import MyPropertyEnquiry from "@/components/dashboard/my-propertyenquiry";

export const metadata = {
  title: 'My Review || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyPropertyEnquiry/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
