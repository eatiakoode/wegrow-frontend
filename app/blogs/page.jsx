// import dynamic from "next/dynamic";
// import BlogV2 from "@/components/blog-list-2";

// export const metadata = {
//   title: 'Blog List 1 || Wegrow - Real Estate React Template',
//   description:
//     'Wegrow - Real Estate React Template',
// }

// const index = () => {
//   return (
//     <>
//       <BlogV2 />
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(index), { ssr: false });

import BlogV2 from "@/components/blog-list-2";
import { getBlogTableData } from "@/api/frontend/blog";

export const metadata = {
  title: 'Blog List 1 || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

// ✅ This is now a server component
export default async function BlogPage() {
  const result = await getBlogTableData();
  const blogs = result || [];

  return <BlogV2 blogs={blogs} />;
}
