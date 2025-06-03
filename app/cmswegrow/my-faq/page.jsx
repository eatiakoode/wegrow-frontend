import dynamic from "next/dynamic";
import MyFaq from "@/components/dashboard/my-faq";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyFaq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
