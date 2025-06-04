import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { FormProvider, useForm } from "react-hook-form";
import { FormSlider, FormTextArea, FormTextField } from "@/components/rhf";
import styles from "./CreateDigitalAuthorForm.module.scss";

export interface CreateDigitalAuthorFormValues {
  displayName: string;
  apiKeyID: string | null;
  systemPrompt: string;
  temperature: number;
  topP: number;
  maxTokens: number;
}

export interface CreateDigitalAuthorFormProps {
  onSubmit: (values: CreateDigitalAuthorFormValues) => void;
  /** The unique identifier for the form element. */
  id?: string;
}

export const CreateDigitalAuthorForm: React.FC<CreateDigitalAuthorFormProps> = (
  props,
) => {
  const { onSubmit, id } = props;
  const { _ } = useLingui();

  const methods = useForm<CreateDigitalAuthorFormValues>({
    defaultValues: defaultFormValues,
  });
  const { handleSubmit } = methods;

  const submit = handleSubmit((data: CreateDigitalAuthorFormValues) => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form id={id} className={styles.root} onSubmit={submit}>
        <FormTextField name="displayName" label={_(msg`Display Name`)} />
        <FormTextArea
          name="systemPrompt"
          label={_(msg`System Prompt`)}
          rows={4}
        />
        <FormSlider
          name="temperature"
          label={_(msg`Temperature`)}
          minValue={0}
          maxValue={1}
          step={0.1}
        />
        <FormSlider
          name="topP"
          label={_(msg`Top P`)}
          minValue={0}
          maxValue={1}
          step={0.1}
        />
      </form>
    </FormProvider>
  );
};

const defaultFormValues: CreateDigitalAuthorFormValues = {
  displayName: "",
  apiKeyID: null,
  systemPrompt: "",
  temperature: 0.5,
  topP: 1,
  maxTokens: 4096,
};
