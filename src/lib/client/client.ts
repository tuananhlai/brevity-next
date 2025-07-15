import ky, { KyInstance } from "ky";
import {
  CreateAPIKeyRequest,
  CreateAPIKeyResponse,
  GetAPIKeysResponse,
  GetArticleDetailsRequest,
  GetArticleDetailsResponse,
  GetArticlePreviewsResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from "@/lib/client/types";

export class APIClient {
  private kyInstance: KyInstance;

  constructor(baseURL: string) {
    this.kyInstance = ky.create({
      prefixUrl: baseURL,
    });
  }

  async getArticleDetails(
    req: GetArticleDetailsRequest,
    opts?: Options,
  ): Promise<GetArticleDetailsResponse> {
    return this.kyInstance
      .get<GetArticleDetailsResponse>(`v1/articles/${req.slug}`, opts)
      .then((v) => v.json());
  }

  async getArticlePreviews(
    opts?: Options,
  ): Promise<GetArticlePreviewsResponse> {
    return this.kyInstance
      .get<GetArticlePreviewsResponse>(`v1/article-previews`, opts)
      .then((v) => v.json());
  }

  async signIn(req: SignInRequest, opts?: Options): Promise<SignInResponse> {
    return this.kyInstance
      .post<SignInResponse>(`v1/auth/sign-in`, {
        json: req,
        ...opts,
      })
      .then((v) => v.json());
  }

  async signUp(req: SignUpRequest, opts?: Options): Promise<void> {
    await this.kyInstance.post<void>(`v1/auth/sign-up`, {
      json: req,
      ...opts,
    });
  }

  async createAPIKey(
    req: CreateAPIKeyRequest,
    opts?: Options,
  ): Promise<CreateAPIKeyResponse> {
    return this.kyInstance
      .post<CreateAPIKeyResponse>(`v1/llm-api-keys`, {
        json: req,
        ...opts,
      })
      .then((v) => v.json());
  }

  async getAPIKeys(opts?: Options): Promise<GetAPIKeysResponse> {
    return this.kyInstance
      .get<GetAPIKeysResponse>(`v1/llm-api-keys`, opts)
      .then((v) => v.json());
  }
}

export interface Options {
  signal?: AbortSignal;
}
