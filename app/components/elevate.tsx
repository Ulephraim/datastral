/** @format */

import Image from 'next/image';
import elevateImg from '@/assets/svg/elevate.svg';

export default function Elevate() {
  return (
    <section className="page elevate">
      <div className="container">
        <div className="content">
          <p className="title">Optimize Retail File Handling</p>
          <p className="text">
            Enhance your retail file management with our digital solution,
            simplifying workflows to boost efficiency and maximize profits. Give
            it a try today!
          </p>
          <div className="btns">
            <button className="btn">Get Started</button>
            <button className="btn deflated">Claim $10 Credit</button>
          </div>
        </div>
        <Image src={elevateImg} alt="elevate" />
      </div>
    </section>
  );
}
