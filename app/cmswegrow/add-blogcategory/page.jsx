import dynamic from "next/dynamic";
import AddBlogcategory from "@/components/dashboard/add-blogcategory";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <AddBlogcategory />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
