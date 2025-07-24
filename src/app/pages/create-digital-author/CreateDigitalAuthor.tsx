import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { NextPage } from "next";
import { useId } from "react";
import { StudioLayout } from "@/components/studio-layout";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import {
  CreateDigitalAuthorForm,
  CreateDigitalAuthorFormValues,
} from "@/features/digital-author/components/create-digital-author-form";
import styles from "./CreateDigitalAuthor.module.scss";

export const CreateDigitalAuthor: NextPage = () => {
  const { _ } = useLingui();
  const formID = useId();

  const submit = (values: CreateDigitalAuthorFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <StudioLayout>
      <Heading level={1}>{_(msg`New digital author`)}</Heading>
      <CreateDigitalAuthorForm
        className={styles.form}
        id={formID}
        onSubmit={submit}
      />
      <div className={styles.submitButtonContainer}>
        <Button className={styles.submitButton} type="submit" form={formID}>
          {_(msg`Submit`)}
        </Button>
      </div>
    </StudioLayout>
  );
};
