/** @format */

import Image from 'next/image';
import heroImage from '@/assets/svg/hero.svg';

export default function Hero() {
  return (
    <section className="page hero">
      <div className="content">
        <p className="title">Retail-Optimized Content Management System</p>
        <p className="text">
          Deupload streamlines data management with strong security measures,
          enabling seamless real-time storage, organization, and analysis of
          sales reports, customer feedback, and inventory data, effectively
          removing operational challenges.
        </p>

        <div className="btns">
          <button className="cnt-btn">Get Started</button>
          <button className="cnt-btn deflated">Learn More</button>
        </div>
      </div>
      <Image className="hero-image" src={heroImage} alt="hero" />
    </section>
  );
}
