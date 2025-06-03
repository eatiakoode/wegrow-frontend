import dynamic from "next/dynamic";
import MyAgent from "@/components/dashboard/my-agent";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyAgent />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
