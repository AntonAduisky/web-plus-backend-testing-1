import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  let newPost: Post;
  let findedPost: Post | undefined;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    newPost = postsService.create(post);
    findedPost = postsService.find(newPost.id);
  });

  it('should add a new post', () => {
    expect(newPost.text).toEqual(post.text);
  });

  it('should find a post', () => {
    expect(findedPost).toMatchObject(newPost);
  });
});
