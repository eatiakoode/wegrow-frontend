import dynamic from "next/dynamic";
import AddBlog from "@/components/dashboard/add-blog";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddBlog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
