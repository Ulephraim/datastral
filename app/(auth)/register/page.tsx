/** @format */
'use client';

import React, { useState } from 'react';
import styles from '../../../styles/Login.module.scss';
import datastralLogo from '../../../assets/svg/datastral.jpg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      router.push('/login'); // Redirect to login after successful signup
    } else {
      setError(data.message || 'Something went wrong');
    }
  };

  const loginWithGoogle = () => {
    signIn('google', { callbackUrl: '/maindrive' });
  };

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={datastralLogo} alt="Datastral Logo" />
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Create a new account</h1>
        {error && <p className={styles.error}>{error}</p>}

        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Create Account'}
          </button>
        </form>

        <div className={styles.socialLogin}>
          <p>Or</p>
          <button
            onClick={loginWithGoogle}
            className={styles.googleSubmitButton}
          >
            Sign up with Google
          </button>
        </div>

        <div className={styles.signUp}>
          <p>
            Already have an account?{' '}
            <a href="/login" className={styles.link}>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
