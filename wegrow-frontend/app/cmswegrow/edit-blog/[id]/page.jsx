import dynamic from "next/dynamic";
import EditBlog from "@/components/dashboard/edit-blog";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditBlog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
