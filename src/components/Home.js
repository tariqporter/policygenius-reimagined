import React from 'react';
import Section1 from 'components/Section1';
import Section2 from 'components/Section2';
import Section3 from './Section3';

const Home = () => {
  return (
    <div>
      <Section1 style={{ marginBottom: 100 }} />
      <Section2 style={{ marginBottom: 100 }} />
      <Section3 style={{ marginBottom: 100 }} />
    </div>
  );
};

export default Home;
