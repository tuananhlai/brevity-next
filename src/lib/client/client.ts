import {
  GetArticleDetailsRequest,
  GetArticleDetailsResponse,
  GetArticlePreviewsResponse,
} from "@/lib/client/types";

export class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getArticleDetails(
    req: GetArticleDetailsRequest,
  ): Promise<GetArticleDetailsResponse> {
    return this.fetchWithResponse<GetArticleDetailsResponse>(
      `/v1/articles/${req.slug}`,
    );
  }

  async getArticlePreviews(): Promise<GetArticlePreviewsResponse> {
    return this.fetchWithResponse<GetArticlePreviewsResponse>(
      `/v1/article-previews`,
    );
  }

  private async fetchWithResponse<T>(url: string): Promise<T> {
    const res = await fetch(new URL(url, this.baseURL));

    return res.json();
  }
}
