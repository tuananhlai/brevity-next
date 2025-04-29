export const getArticleDetails = async (
  req: GetArticleDetailsRequest,
): Promise<GetArticleDetailsResponse> => {
  const res: GetArticleDetailsResponse = await fetch(
    `http://localhost:8080/v1/articles/${req.slug}`,
  ).then((res) => res.json());

  return res;
};

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
