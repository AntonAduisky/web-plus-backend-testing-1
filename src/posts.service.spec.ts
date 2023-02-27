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
    const secondPost = postsService.create({
      text: 'Second post',
    });
    expect(postsService.find('1')).toMatchObject(newPost);
    expect(postsService.find('2')).toMatchObject(secondPost);

    expect(findedPost).toMatchObject(newPost);
  });
});
