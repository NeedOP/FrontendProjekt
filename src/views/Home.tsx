import React, { useState } from 'react';
import { User } from '../interfaces/User';

const Home: React.FC = () => {
  const [user, setUser] = useState<User>({ id: 1, name: 'John Doe', age: 30 });

  const updateName = (newName: string): void => {
    setUser({ ...user, name: newName });
  };

  const getUserDescription = (user: User): string => {
    return `User: ${user.name}, Age: ${user.age}`;
  };

  return (
    <div style={styles.container}>
      <h1>Home</h1>
      <p>{getUserDescription(user)}</p>
      <button onClick={() => updateName('Jane Doe')}>Change Name</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default Home;