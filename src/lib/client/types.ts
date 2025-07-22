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

interface LLMAPIKey {
  id: string;
  name: string;
  valueFirstTen: string;
  valueLastSix: string;
  /** @example "2025-01-01T00:00:00Z" */
  createdAt: string;
}

export interface CreateAPIKeyRequest {
  name: string;
  value: string;
}

export type CreateAPIKeyResponse = LLMAPIKey;

export interface GetAPIKeysResponse {
  items: LLMAPIKey[];
}

export interface GetCurrentUserResponse {
  id: string;
  username: string;
  email: string;
}
