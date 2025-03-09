import { NextPage } from "next";
import { useId } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { SignInForm } from "@/features/sign-in/components/sign-in-form";
import styles from "./SignInPage.module.scss";

export const SignInPage: NextPage = () => {
  const formId = useId();

  return (
    <main className={styles.root}>
      <Heading className={styles.heading} level={1}>
        Sign in with your account
      </Heading>
      <SignInForm className={styles.signInForm} id={formId} />
      <Button form={formId} className={styles.submitBtn} type="submit">
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
    </main>
  );
};
