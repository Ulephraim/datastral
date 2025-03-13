/** @format */

import Footer from '@/components/layout/footer';
import Nav from '@/components/layout/nav';
import Advantages from '@/components/sections/advantages';
import Comments from '@/components/sections/comments';
import Elevate from '@/components/sections/elevate';
import Hero from '@/components/sections/hero';
import Locate from '@/components/sections/locate';
import Operations from '@/components/sections/operations';
import '@/styles/home.scss';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Advantages />
      <Locate />
      <Operations />
      <Comments />
      <Elevate />
      <Footer />
    </main>
  );
}
