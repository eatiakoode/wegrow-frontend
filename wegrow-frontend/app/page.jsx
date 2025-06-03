import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-1/page'

export const metadata = {
  title: 'Home || Wegrow - Real Estate React Template',
  description:
    'Wegrow - Real Estate React Template',
}

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
    </Wrapper>
    
  )
}
