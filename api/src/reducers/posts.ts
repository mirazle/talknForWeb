import Post from 'api/store/Post';
import Posts from 'api/store/Posts';

export default (state: Post[] = [], action: { type: string; posts: any }) => {
  return action.posts ? new Posts(action.posts) : state;
};
