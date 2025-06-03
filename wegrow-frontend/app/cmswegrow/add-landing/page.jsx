import dynamic from "next/dynamic";
import AddLanding from "@/components/dashboard/add-landing";

export const metadata = {
  title: 'Create Listing || Wegrow - Real Estate React',
  description:
    'Wegrow - Real Estate React',
}

const index = () => {
  return (
    <>
      <AddLanding />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
