import dynamic from "next/dynamic";
import EditBlogcategory from "@/components/dashboard/edit-blogcategory";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditBlogcategory />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
