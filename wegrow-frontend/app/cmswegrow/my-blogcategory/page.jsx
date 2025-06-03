import dynamic from "next/dynamic";
import MyBlogcategory from "@/components/dashboard/my-blogcategory";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyBlogcategory />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
