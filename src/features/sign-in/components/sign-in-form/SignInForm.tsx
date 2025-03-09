import { Form } from "react-aria-components";
import { TextField } from "@/components/ui/text-field";
import styles from "./SignInForm.module.scss";

export interface SignInFormProps {
  id?: string;
  onSubmit?: (values: SignInFormValues) => void;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  const { id, onSubmit } = props;

  return (
    <Form
      id={id}
      className={styles.root}
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        onSubmit?.({
          email: data["email"] as string,
          password: data["password"] as string,
        });
      }}
    >
      <TextField
        name="email"
        className={styles.email}
        label="Email"
        type="email"
        isRequired
      />
      <TextField
        name="password"
        className={styles.password}
        label="Password"
        type="password"
        isRequired
      />
    </Form>
  );
};
