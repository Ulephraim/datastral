/** @format */

'use client';

import user1 from '@/assets/user1.png';
import user2 from '@/assets/user2.png';
import { Star } from 'lucide-react';
import Image from 'next/image';

function Comment({
  user,
  comment,
}: {
  user: {
    image: any;
    name: string;
    job: string;
    stars: number;
  };
  comment: string;
}) {
  return (
    <div className="comment">
      <p className="text">{comment}</p>
      <div className="user">
        <div className="user-info">
          <Image src={user.image} alt={user.name} width={40} height={40} />{' '}
          <div className="name-job">
            <p className="name">{user.name}</p>
            <p className="job">{user.job}</p>
          </div>
        </div>
        <div className="rating">
          {[...Array(user.stars)].map((_, i) => (
            <Star size={24} color="#16a34a" fill="#16a34a" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Comments() {
  const comments = [
    {
      user: {
        name: 'Ethan Carter',
        job: 'Software Engineer',
        stars: 5,
        image: user1,
      },
      comment:
        'Our company uses Datastral, and I also use Box personally to store my documents, photos, videos, sensitive data etc. Datastral is amazing so much more than just cloud storage. You can watch videos, share photos, scan documents, electronically sign and send documents, secure sensitive data and so much more.',
    },
    {
      user: {
        name: 'Sophia Bennett',
        job: 'Project Manager',
        stars: 5,
        image: user2,
      },
      comment:
        'I love using Datastral for work and personally because it is very intuitive to use and easy to share files with anyone. Our company moved from Dropbox over to Box, due to security purposes which would be my concern but other than that it syncs very quickly and allows collaboration and file sharing a lot easier for your team/company.',
    },
  ];
  return (
    <section className="page comments">
      {comments.map((c, index) => (
        <Comment key={index} user={c.user} comment={c.comment} />
      ))}
    </section>
  );
}
