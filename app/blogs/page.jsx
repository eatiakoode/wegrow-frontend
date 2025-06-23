import dynamic from "next/dynamic";
// export const dynamic = "force-dynamic";

import BlogV2 from "@/components/blog-list-2";
import { getBlogTableData } from "@/api/frontend/blog";

export const metadata = {
  title: 'Blog List || WeGrow',
  description:
    'WeGrow',
}

// ✅ This is now a server component
export default async function BlogPage() {
  const result = await getBlogTableData();
  const blogs = result || [];

  return <BlogV2 blogs={blogs} />;
}
