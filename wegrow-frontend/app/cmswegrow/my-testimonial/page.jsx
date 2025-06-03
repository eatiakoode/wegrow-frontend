import dynamic from "next/dynamic";
import MyTestimonial from "@/components/dashboard/my-testimonial";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <MyTestimonial />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
