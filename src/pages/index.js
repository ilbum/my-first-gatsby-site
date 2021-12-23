import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby Site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby tutorial. Maybe?</p>
    </main>
  );
};

export default IndexPage;
