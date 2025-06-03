import dynamic from "next/dynamic";
import MyPropertypage from "@/components/dashboard/my-propertypage";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyPropertypage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
