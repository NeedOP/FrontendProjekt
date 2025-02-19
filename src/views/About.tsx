import React from 'react';

const About: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>About</h1>
      <p>This is the About page.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default About;