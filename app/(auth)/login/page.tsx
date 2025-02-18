/** @format */

import React from 'react';
import styles from '../../../styles/Login.module.scss';
import datastralLogo from '../../../assets/svg/datastral.jpg';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={datastralLogo} alt="Datastral Logo" />
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Sign in to your account</h1>
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
          <div className={styles.options}>
            <a href="#" className={styles.link}>
              Forgot your password?
            </a>
          </div>
          <button type="submit" className={styles.submitButton}>
            Continue
          </button>
        </form>
        <div className={styles.socialLogin}>
          <p>Or sign in with</p>
          {/* social login buttons here */}
        </div>
        <div className={styles.signUp}>
          <p>
            Don’t have an account?{' '}
            <a href="#" className={styles.link}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
