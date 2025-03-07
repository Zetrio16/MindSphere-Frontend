import React from 'react';
import './privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <time>Effective Date: 08th March, 2025</time>

      <section>
        <h2>1. Information We Collect</h2>
        <p>When you sign in with Google, we collect:</p>
        <ul>
          <li>Your Email Address</li>
          <li>Your Public Profile Information (name, profile picture)</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use your Google account information to:</p>
        <ul>
          <li>Identify you and create your account</li>
          <li>Verify your Google Forms submissions</li>
        </ul>
        <p>We do <strong>not</strong> share or sell your data.</p>
      </section>

      <section>
        <h2>3. Data Storage and Security</h2>
        <p>Your data is stored securely with best practices.</p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>
          We use Google for authentication. Read their{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>5. User Rights</h2>
        <p>You can request:</p>
        <ul>
          <li>Account deletion</li>
          <li>A copy of your stored data</li>
        </ul>
        <p>Contact us at <a href="mailto:[mindsphere360@gmail.com]">mindsphere360@gmail.com</a>.</p>
      </section>

      <section>
        <h2>6. Changes to This Policy</h2>
        <p>We may update this policy and will post changes here.</p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>Email us at <a href="mailto:[mindsphere360@gmail.com]">mindsphere360@gmail.com</a>.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
