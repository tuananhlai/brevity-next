import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { FormSlider, FormTextArea, FormTextField } from "@/components/rhf";
import { FormSelect, FormSelectProps } from "@/components/rhf/FormSelect";
import { SelectItem } from "@/components/ui/select";
import { TextLink } from "@/components/ui/text";
import { TODO_HREF } from "@/utils/misc";
import { requiredFieldMessage } from "@/utils/validation";
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
        <FormAPIKeySelect
          name="apiKeyID"
          isRequired
          rules={{
            required: {
              value: true,
              message: _(requiredFieldMessage),
            },
          }}
        />
        <FormTextField
          name="displayName"
          isRequired
          label={_(msg`Display name`)}
          placeholder="John Doe"
          rules={{
            required: {
              value: true,
              message: _(requiredFieldMessage),
            },
          }}
        />
        <FormTextArea
          name="systemPrompt"
          label={_(msg`System prompt`)}
          rows={4}
          placeholder="You are a senior software engineer."
          isRequired
          rules={{
            required: {
              value: true,
              message: _(requiredFieldMessage),
            },
          }}
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
        <FormSlider
          name="maxTokens"
          label={_(msg`Max tokens`)}
          minValue={100}
          maxValue={8000}
          step={100}
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
  maxTokens: 4000,
};

interface FormAPIKeySelectProps {
  name: string;
  rules?: FormSelectProps<{ id: string; name: string }>["rules"];
  isRequired?: boolean;
}

const FormAPIKeySelect: React.FC<FormAPIKeySelectProps> = (props) => {
  const { name, rules, isRequired } = props;

  const { _ } = useLingui();
  const { data = [] } = useQuery({
    queryKey: ["apiKeys"],
    queryFn: async () => {
      // TODO: Integrate API.
      return [
        {
          id: "1",
          name: "API Key 1",
        },
        {
          id: "2",
          name: "API Key 2",
        },
        {
          id: "3",
          name: "API Key 3",
        },
      ];
    },
  });

  return (
    <FormSelect
      name={name}
      items={data}
      isRequired={isRequired}
      label={_(msg`API key`)}
      rules={rules}
      description={
        <Trans>
          An OpenRouter API key is required to create a new digital author.{" "}
          <TextLink href={TODO_HREF} target="_blank">
            Create a new API key
          </TextLink>
        </Trans>
      }
    >
      {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
    </FormSelect>
  );
};
