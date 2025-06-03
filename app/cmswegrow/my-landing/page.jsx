import dynamic from "next/dynamic";
import MyLanding from "@/components/dashboard/my-landing";

export const metadata = {
  title: 'My landing page || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyLanding />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
