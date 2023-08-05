//
//
//
//
//
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, postAdded } from './postsSlice';
import AddPostForm from './AddPostForm';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  const handleSubmit = (e) =>
    dispatch(
      postAdded({
        id: '3',
        title: 'Smoking Weed',
        content: "I've heard good things.",
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      })
    );

  return (
    <>
      <AddPostForm handleSubmit={handleSubmit} />
      {renderedPosts}
    </>
  );
};

export default PostsList;
