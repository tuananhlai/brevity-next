import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TextField } from "@/components/ui/text-field";

export interface SignInFormProps {
  // Add component props.
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  return (
    <form>
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <Checkbox>Remember me</Checkbox>
      <Button type="submit">Sign in</Button>
    </form>
  );
};
