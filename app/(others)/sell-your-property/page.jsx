import dynamic from "next/dynamic";
import SellPropertyPage from "@/components/sell-your-property";

export const metadata = {
  title: 'Landing Page || Wegrow - Real Estate',
  description:
    'Wegrow - Real Estate',
}

const index = () => {
  return (
    <>
      <SellPropertyPage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
