import dynamic from "next/dynamic";
import EditAgent from "@/components/dashboard/edit-agent";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditAgent />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
