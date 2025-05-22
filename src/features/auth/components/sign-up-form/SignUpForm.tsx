import { Form } from "react-aria-components";
import { TextField } from "@/components/ui/text-field";
import { cn } from "@/styles/utils";
import styles from "./SignUpForm.module.scss";

export interface SignUpFormProps {
  id?: string;
  onSubmit?: (values: SignUpFormValues) => void;
  className?: string;
}

export interface SignUpFormValues {
  username: string;
  displayName?: string;
  email: string;
  password: string;
}

export const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const { id, onSubmit, className } = props;

  return (
    <Form
      id={id}
      className={cn(styles.root, className)}
      onSubmit={(e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));
        let displayName: SignUpFormValues["displayName"] = data[
          "displayName"
        ] as string;
        displayName = displayName.trim().length > 0 ? displayName : undefined;

        onSubmit?.({
          username: data["username"] as string,
          displayName,
          email: data["email"] as string,
          password: data["password"] as string,
        });
      }}
    >
      <TextField name="username" label="Username" isRequired />
      <TextField name="displayName" label="Display Name" />
      <TextField name="email" label="Email" type="email" isRequired />
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
