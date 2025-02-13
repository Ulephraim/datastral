/** @format */

import React from 'react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-content">
          <h1>Marketing Site</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="marketing-main">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Marketing Site. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
