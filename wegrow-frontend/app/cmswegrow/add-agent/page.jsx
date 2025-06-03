import dynamic from "next/dynamic";
import AddAgent from "@/components/dashboard/add-agent";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddAgent />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
