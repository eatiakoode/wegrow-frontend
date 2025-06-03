import dynamic from "next/dynamic";
import NewsandInsights from "@/components/news-and-insights";

export const metadata = {
  title: 'About Us || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <NewsandInsights />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
