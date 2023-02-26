import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    postsService.create(post);
    expect(postsService).toHaveProperty('posts', [
      { date: expect.any(String), id: expect.any(String), text: 'Some pre-existing post' },
      { date: expect.any(String), id: expect.any(String), text: 'Mocked post' },
    ]);
  });

  it('should find a post', () => {
    postsService.find('Some pre-existing post');
  });
});
