import dynamic from "next/dynamic";
import MyProperties from "@/components/dashboard/my-properties";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyProperties />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
