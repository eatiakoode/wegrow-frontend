import dynamic from "next/dynamic";
import ScanMe from "@/components/scanme";

export const metadata = {
  title: 'Scan Me || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <ScanMe />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
