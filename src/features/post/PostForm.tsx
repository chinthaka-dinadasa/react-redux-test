// src/features/post/PostForm.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setTitle, setBody, setUserId, submitPost } from './postSlice';
import './PostForm.css';

const PostForm: React.FC = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitPost());
  };

  return (
    <div className="form-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={post.title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={post.body}
            onChange={(e) => dispatch(setBody(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="userId">User ID</label>
          <input
            type="number"
            id="userId"
            value={post.userId}
            onChange={(e) => dispatch(setUserId(Number(e.target.value)))}
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default PostForm;
