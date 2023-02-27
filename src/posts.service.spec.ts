import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  let newPost: Post;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    newPost = postsService.create(post);
  });

  it('should add a new post', () => {
    expect(newPost.text).toEqual(post.text);
  });

  it('should find a post', () => {
    expect(postsService.find(newPost.id)).toMatchObject(post);
  });
});
