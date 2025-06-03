import dynamic from "next/dynamic";
import EditTestimonial from "@/components/dashboard/edit-testimonial";

export const metadata = {
  title: 'My Properties || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <EditTestimonial />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
