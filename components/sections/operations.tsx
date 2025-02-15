/** @format */

import Image from 'next/image';
import dataIcon from '@/assets/svg/data.svg';
import recoverIcon from '@/assets/svg/recover.svg';
import twoFactorIcon from '@/assets/svg/two-factor.svg';
import { Database, LucideUndo2, ShieldCheck } from 'lucide-react';

function Item({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="item">
      <div className="adv-icon">{icon}</div>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}

export default function Operations() {
  return (
    <section className="page operations">
      <header>
        <p className="title">Efficient Operations with Enhanced Security</p>
        <p className="text">
          Managing retail data means dealing with large volumes of information
          from a steady flow of customers and a wide range of products. To
          protect your customer records, inventory details, and essential
          business assets, Datastral offers advanced security and robust data
          governance.
        </p>
      </header>
      <div className="items">
        <Item
          icon={<Database size={26} color="white" />}
          title="Enable internal data control"
          text="Ensure secure data management by defining specific access levels for employees and stakeholders."
        />
        <Item
          icon={<LucideUndo2 size={26} color="white" />}
          title="Recover your last data"
          text="Your data is encrypted and backed up weekly, allowing for quick recovery in case of accidental loss."
        />
        <Item
          icon={<ShieldCheck size={26} color="white" />}
          title="Two-factor authentication"
          text="Enhance security by requiring an extra verification step each time employees log into their accounts."
        />
      </div>
    </section>
  );
}
