/** @format */

import Image from 'next/image';
import locateImg from '@/assets/svg/locate.svg';
import leverageImg from '@/assets/svg/leverage.svg';

function Item({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: any;
}) {
  return (
    <div className="item">
      <div className="content">
        <p className="title">{title}</p>
        <p className="text">{content}</p>
      </div>
      <Image src={image} alt={title} className="img" />
    </div>
  );
}

export default function Locate() {
  return (
    <section className="page locate">
      <Item
        title="Locate files with lightning speed."
        content="You can quickly find files and folders by searching for text within documents or file topics, enables you to locate your files in no time."
        image={locateImg}
      />
      <Item
        title="Leverage OCR and Object Detection to your advantage."
        content="Quickly search and retrieve retail documents, invoices, and images with Datastral's intelligent file recognition technology."
        image={leverageImg}
      />
    </section>
  );
}
