export interface BlogPost {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  reactions: {
    likes: number;
    dislikes: number;
  }
}

export interface BlogPostsResponse {
  posts: BlogPost[];
}