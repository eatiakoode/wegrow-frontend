import dynamic from "next/dynamic";
import AddPropertypage from "@/components/dashboard/add-propertypage";

export const metadata = {
  title: 'Create Listing || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <AddPropertypage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
