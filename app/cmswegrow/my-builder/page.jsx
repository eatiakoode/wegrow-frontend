import dynamic from "next/dynamic";
import MyBuilder from "@/components/dashboard/my-builder";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyBuilder />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
