/** @format */

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';

export default function MainPage() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkSession() {
      const userSession = await getSession();
      setSession(userSession);

      if (!userSession) {
        router.replace('/login');
      }
    }

    checkSession();
  }, [router]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <p>You are logged in as {session.user?.email}</p>
    </div>
  );
}
