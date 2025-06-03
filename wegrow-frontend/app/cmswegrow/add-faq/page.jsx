import dynamic from "next/dynamic";
import AddFaq from "@/components/dashboard/add-faq";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddFaq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
