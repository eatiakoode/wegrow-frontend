import dynamic from "next/dynamic";
import EditPropertypage from "@/components/dashboard/edit-propertypage";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditPropertypage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
