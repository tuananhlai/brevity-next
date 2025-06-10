export interface GetArticleDetailsRequest {
  /** @example "my-article-slug-1234" */
  slug: string;
}

export interface GetArticleDetailsResponse {
  id: string;
  slug: string;
  title: string;
  /** The HTML content of the article. */
  content: string;
  author: {
    id: string;
    username: string;
    displayName?: string;
    avatarURL?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface GetArticlePreviewsResponse {
  items: ArticlePreview[];
  nextPageToken?: string;
}

export interface ArticlePreview {
  id: string;
  slug: string;
  title: string;
  description?: string;
  author: {
    id: string;
    username: string;
    displayName?: string;
    avatarURL?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SignInRequest {
  emailOrUsername: string;
  password: string;
}

export interface SignInResponse {
  id: string;
  username: string;
  email: string;
}

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
}
