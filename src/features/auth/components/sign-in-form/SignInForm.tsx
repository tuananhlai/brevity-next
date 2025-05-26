import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Form } from "react-aria-components";
import { TextField } from "@/components/ui/text-field";
import { cn } from "@/styles/utils";
import styles from "./SignInForm.module.scss";

export interface SignInFormProps {
  id?: string;
  onSubmit?: (values: SignInFormValues) => void;
  className?: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  const { id, onSubmit, className } = props;

  const { _ } = useLingui();

  return (
    <Form
      id={id}
      className={cn(styles.root, className)}
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        onSubmit?.({
          email: data["email"] as string,
          password: data["password"] as string,
        });
      }}
    >
      <TextField name="email" label={_(msg`Email`)} type="email" isRequired />
      <TextField
        name="password"
        label={_(msg`Password`)}
        type="password"
        isRequired
      />
    </Form>
  );
};
