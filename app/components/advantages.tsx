/** @format */

import advImage from '@/assets/svg/hero2.jpg';
import globalizeImg from '@/assets/svg/globalize.svg';
import delightImg from '@/assets/svg/delight.svg';
import enhanceImg from '@/assets/svg/enhance.svg';

import Image from 'next/image';

function Advantage({
  icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) {
  return (
    <div className="advantage">
      <Image src={icon} alt={title} />
      <article className="advantage-content">
        <h4 className="advantage-title">{title}</h4>
        <p className="advantage-text">{content}</p>
      </article>
    </div>
  );
}

export default function Advantages() {
  return (
    <section className="page adv">
      <div className="main">
        <div className="adv-list">
          <Advantage
            icon={globalizeImg}
            title="Expand Your Market Reach"
            content="Harness Datastral to take your product marketing global, enabling seamless collaboration and content distribution across multiple retail platforms."
          />
          <Advantage
            icon={delightImg}
            title="Enhance Customer Satisfaction"
            content="Use Datastral to refine your marketing approach, ensuring smooth collaboration and engaging content management that enhances customer satisfaction."
          />
          <Advantage
            icon={enhanceImg}
            title="Improve Cost Efficiency"
            content="Leverage Datastral to streamline operations, optimize spending, and enhance efficiency across your marketing processes."
          />
        </div>
        <Image className="heroImage2" src={advImage} alt="advantages" />
      </div>
    </section>
  );
}
