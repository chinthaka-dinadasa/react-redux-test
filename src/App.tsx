// src/App.tsx
import React from 'react';
import './App.css';
import PostForm from './features/post/PostForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
      </header>
    </div>
  );
};

export default App;
