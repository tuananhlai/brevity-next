import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { TextField } from "@/components/ui/text-field";
import styles from "./SignInForm.module.scss";

export interface SignInFormProps {
  onSubmit: (values: SignInFormValues) => void;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  return (
    <form className={styles.root}>
      <Heading className={styles.heading} level={2}>
        Sign in with your account
      </Heading>
      <TextField className={styles.email} label="Email" type="email" />
      <TextField className={styles.password} label="Password" type="password" />
      <Button className={styles.submitBtn} type="submit">
        Sign in
      </Button>
      <div className={styles.thirdPartyAuthButtonContainer}>
        <Button
          className={styles.thirdPartyAuthButton}
          variant="secondary"
          aria-label="Sign in with Google"
        >
          <FaGoogle />
          Google
        </Button>
        <Button
          className={styles.thirdPartyAuthButton}
          variant="secondary"
          aria-label="Sign in with Facebook"
        >
          <FaFacebook />
          Facebook
        </Button>
      </div>
    </form>
  );
};
