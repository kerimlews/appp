import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useLogger from '../../helpers/hooks/use-logger';
import PostDetails from '../PostDetails';
import Posts from '../Posts';

const App = () => {
  const MESSAGE = 'Hello from';
  useLogger({ message: MESSAGE, name: 'App' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<Posts message={MESSAGE} name="Home" />} />
        <Route path="/post/:id" element={<PostDetails message={MESSAGE} name="PostDetails" />} />
      </Routes>
    </Router>
  );
};

export default App;
