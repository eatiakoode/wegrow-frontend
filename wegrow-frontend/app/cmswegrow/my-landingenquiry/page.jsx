import dynamic from "next/dynamic";
import MyLandingEnquiry from "@/components/dashboard/my-landingenquiry";

export const metadata = {
  title: 'My Review || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyLandingEnquiry/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
