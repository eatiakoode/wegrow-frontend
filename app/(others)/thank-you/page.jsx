


import dynamic from "next/dynamic";
import ThankYou from "@/components/thankyou-page";

export const metadata = {
  title: 'Thank You || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ThankYou />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
