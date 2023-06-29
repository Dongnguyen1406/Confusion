import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

function Posts({ posts, isLoading, error, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.isLoading,
    error: state.error
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);