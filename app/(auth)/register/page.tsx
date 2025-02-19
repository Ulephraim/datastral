/** @format */
'use client';

import React from 'react';
import styles from '../../../styles/Login.module.scss';
import datastralLogo from '../../../assets/svg/datastral.jpg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignUpPage: React.FC = () => {
  const loginWithGoogle = () => {
    signIn('google', { callbackUrl: '/maindrive' });
  };

  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={datastralLogo} alt="Datastral Logo" />
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Create a new account</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
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
              name="password"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm password"
              name="confirm password"
              className={styles.input}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>
        <div className={styles.socialLogin}>
          <p>Or</p>
          {/* social login buttons here */}
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
