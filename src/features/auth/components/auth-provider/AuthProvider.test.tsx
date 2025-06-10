import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "@/features/auth/components/auth-provider/AuthProvider";
import { apiClient } from "@/lib/apiClient";
import { useAuth } from "./AuthContext";

const email = "test@test.com";
const password = "test";
const username = "test-user";

it("should set the authenticated user after the user has signed in successfully", async () => {
  jest.spyOn(apiClient, "signIn").mockResolvedValue({
    id: "test-id",
    username,
    email,
  });

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>,
  );

  const resultElement = screen.getByTestId("result");
  expect(resultElement).toHaveTextContent(/not logged in/i);

  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));
  expect(resultElement).toHaveTextContent(username);
});

const TestComponent = () => {
  const { signIn, user } = useAuth();

  return (
    <div>
      <p data-testid="result">{user?.username ?? "Not logged in"}</p>
      <button onClick={() => signIn({ emailOrUsername: email, password })}>
        Sign in
      </button>
    </div>
  );
};
