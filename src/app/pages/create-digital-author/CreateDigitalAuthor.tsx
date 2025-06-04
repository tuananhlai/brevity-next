import { NextPage } from "next";
import { useId } from "react";
import { StackedLayout } from "@/components/stacked-layout";
import { Button } from "@/components/ui/button";
import {
  CreateDigitalAuthorForm,
  CreateDigitalAuthorFormValues,
} from "@/features/digital-author/components/create-digital-author-form";
import styles from "./CreateDigitalAuthor.module.scss";

export const CreateDigitalAuthor: NextPage = () => {
  const onSubmit = (values: CreateDigitalAuthorFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formID = useId();

  return (
    <StackedLayout className={styles.root}>
      <CreateDigitalAuthorForm id={formID} onSubmit={onSubmit} />
      <Button type="submit" form={formID}>
        Create
      </Button>
    </StackedLayout>
  );
};
