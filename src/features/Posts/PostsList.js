import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';
import AddPostForm from './AddPostForm';
import PostsExcerpt from './PostsExcerpt';
import { useEffect } from 'react';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === 'idle') dispatch(fetchPosts());
  }, []);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post, i) => (
    <PostsExcerpt post={post} />
  ));

  return (
    <>
      <AddPostForm />
      {renderedPosts}
    </>
  );
};

export default PostsList;
