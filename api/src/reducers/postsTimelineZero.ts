import Post from 'api/store/Post';
import PostTimelineZero from 'api/store/PostsTimelineZero';

export default (state: Post[] = [], action: { type: string; postsTimelineZero: any }) => {
  switch (action.type) {
    case 'SERVER_TO_API[BROADCAST]:post':
      return action.postsTimelineZero ? [...state, action.postsTimelineZero] : state;
    case 'CLEAR_POSTS_TIMELINE':
      return action.postsTimelineZero ? [...state, action.postsTimelineZero] : state;
    default:
      return action.postsTimelineZero ? new PostTimelineZero(action.postsTimelineZero) : state;
  }
};
