import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { NextPage } from "next";
import { DialogTrigger } from "react-aria-components";
import { StudioLayout } from "@/components/studio-layout";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { Heading, Text } from "@/components/ui/text";
import { AddApiKeyDialog } from "@/features/digital-author/components/add-api-key-dialog";
import { ManageAPIKeyTable } from "@/features/digital-author/components/manage-api-key-table";
import styles from "./ManageAPIKey.module.scss";

export const ManageAPIKey: NextPage = () => {
  const { _ } = useLingui();

  return (
    <StudioLayout>
      <Heading level={1}>{_(msg`Manage API keys`)}</Heading>
      <Text className={styles.pageDescription}>
        {_(
          msg`Register your LLM provider API keys in order to create a new digital author.`,
        )}
      </Text>

      <Flex style={{ marginTop: "var(--bw-space-4)" }} justify="end">
        <DialogTrigger>
          <Button>{_(msg`Create new`)}</Button>
          <AddApiKeyDialog />
        </DialogTrigger>
      </Flex>
      <ManageAPIKeyTable className={styles.apiKeyTable} items={[]} />
    </StudioLayout>
  );
};
