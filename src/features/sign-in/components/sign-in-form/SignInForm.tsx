import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TextField } from "@/components/ui/text-field";
import styles from "./SignInForm.module.scss";

export interface SignInFormProps {
  // Add component props.
}

export const SignInForm: React.FC<SignInFormProps> = (props) => {
  return (
    <form className={styles.root}>
      <TextField label="Email" type="email" />
      <TextField className={styles.password} label="Password" type="password" />
      <Checkbox className={styles.rememberMe}>Remember me</Checkbox>
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
