// import dynamic from "next/dynamic";
// import Faq from "@/components/faq";
// import { getFaqTableData } from "@/api/frontend/faq";

// export const metadata = {
//   title: 'Faq || Wegrow - Real Estate React Template',
//   description:
//     'Wegrow - Real Estate React Template',
// }
// export async function getServerSideProps() {
//   const result = await getFaqTableData();
//   // setLoaderFaq(false);
//   return {
//     props: {
//       faqs: result.data || [],
//     },
//   };
// }
// // const BlogDetailsDynamic = ({params}) => {
// const FAQDetailsDynamic = ({faqs}) => {
//   return (
//     <>
//       <Faq faqs={faqs}/>
//     </>
//   );
// };
// export default dynamic(() => Promise.resolve(FAQDetailsDynamic), {
//   ssr: false,
// });
// // export default dynamic(() => Promise.resolve(faqpage), { ssr: false });
import Faq from "@/components/faq";
import { getFaqTableData } from "@/api/frontend/faq";

export const metadata = {
  title: "Faq || Wegrow - Real Estate React Template",
  description: "Wegrow - Real Estate React Template",
};

// ✅ This is now a server component
export default async function FaqPage() {
  const result = await getFaqTableData();
  const faqs = result?.data || [];

  return <Faq faqs={faqs} />;
}
