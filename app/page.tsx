import GoldenThread from '@/components/GoldenThread';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Memories from '@/components/Memories';
import Qualities from '@/components/Qualities';
//import Timeline from '@/components/Timeline';
import SpecialMessage from '@/components/SpecialMessage';
import ThankYouMoments from '@/components/ThankYouMoments';
import FinalTribute from '@/components/FinalTribute';

export default function Home() {
  return (
    <main className="relative">
      <GoldenThread />
      <NavBar />
      <Hero />
      <Memories />
      <Qualities />
      {/*<Timeline />*/}
      <SpecialMessage />
      <ThankYouMoments />
      <FinalTribute />
    </main>
  );
}
