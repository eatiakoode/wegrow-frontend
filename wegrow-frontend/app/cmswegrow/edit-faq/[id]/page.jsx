import dynamic from "next/dynamic";
import EditFaq from "@/components/dashboard/edit-faq";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditFaq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
