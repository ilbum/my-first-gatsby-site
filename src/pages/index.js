import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Bonded-Woman.jpg"
      />
      <p>I'm making this by following the Gatsby tutorial. Maybe?</p>
    </Layout>
  );
};

export default IndexPage;
