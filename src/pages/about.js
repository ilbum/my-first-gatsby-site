// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home Page</Link>
      <p>Hi there, I am using the Gatsby Tutorial to make this site.</p>
    </main>
  );
};

// Step 3: Export your component
export default AboutPage;
