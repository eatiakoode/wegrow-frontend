import dynamic from "next/dynamic";
import MyLocation from "@/components/dashboard/my-location";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyLocation />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
