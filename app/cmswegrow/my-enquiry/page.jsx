import dynamic from "next/dynamic";
import MyEnquiry from "@/components/dashboard/my-enquiry";

export const metadata = {
  title: 'My Review || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyEnquiry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
