import {
  GetArticleDetailsRequest,
  GetArticleDetailsResponse,
  GetArticlePreviewsResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from "@/lib/client/types";

export class APIClient {
  private baseURL: string;
  private authToken: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  async getArticleDetails(
    req: GetArticleDetailsRequest,
    options?: Options,
  ): Promise<GetArticleDetailsResponse> {
    return this.getJSON<GetArticleDetailsResponse>(
      `/v1/articles/${req.slug}`,
      options,
    );
  }

  async getArticlePreviews(
    options?: Options,
  ): Promise<GetArticlePreviewsResponse> {
    return this.getJSON<GetArticlePreviewsResponse>(
      `/v1/article-previews`,
      options,
    );
  }

  async signIn(req: SignInRequest): Promise<SignInResponse> {
    return this.postJSON<SignInResponse>(`/v1/auth/sign-in`, req);
  }

  async signUp(req: SignUpRequest): Promise<void> {
    return this.postJSON<void>(`/v1/auth/sign-up`, req);
  }

  private async getJSON<Response>(
    url: string,
    options?: Omit<FetchOptions, "method">,
  ): Promise<Response> {
    return this.doFetchJSON<Response>(url, { method: "GET", ...options });
  }

  /**
   * @param data - The data to send in the request body. It must be JSON serializable.
   */
  private async postJSON<Response>(
    url: string,
    data: unknown,
    options?: Omit<FetchOptions, "method" | "body">,
  ): Promise<Response> {
    return this.doFetchJSON<Response>(url, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    });
  }

  private async doFetchJSON<T>(url: string, opts: FetchOptions): Promise<T> {
    const { headers, ...rest } = opts;

    let fetchHeaders: HeadersInit = {};
    if (this.authToken) {
      fetchHeaders = {
        Authorization: `Bearer ${this.authToken}`,
        ...headers,
      };
    }

    const res = await fetch(this.getURL(url), {
      ...rest,
      headers: fetchHeaders,
    });

    if (!res.ok) {
      throw new ClientError(res.statusText);
    }

    // TODO: handle empty response
    return res.json();
  }

  private getURL(path: string): URL {
    return new URL(path, this.baseURL);
  }
}

interface FetchOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

class ClientError extends Error {}

export interface Options {
  signal?: AbortSignal;
}
