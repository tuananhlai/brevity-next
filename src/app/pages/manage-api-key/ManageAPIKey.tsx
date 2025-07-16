import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { NextPage } from "next";
import Head from "next/head";
import { DialogTrigger } from "react-aria-components";
import { LuPlus } from "react-icons/lu";
import { StudioLayout } from "@/components/studio-layout";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { Heading, Text } from "@/components/ui/text";
import { useGetAPIKeys } from "@/features/digital-author/api/getAPIKeys";
import { AddApiKeyDialog } from "@/features/digital-author/components/add-api-key-dialog";
import { ManageAPIKeyTable } from "@/features/digital-author/components/manage-api-key-table";
import { getPageTitle } from "@/utils/misc";
import styles from "./ManageAPIKey.module.scss";

export const ManageAPIKey: NextPage = () => {
  const { _ } = useLingui();
  const pageHeading = _(msg`Manage API keys`);

  const { data: res = { items: [] } } = useGetAPIKeys();

  // TODO: display an error message if the API keys cannot be fetched.

  return (
    <>
      <Head>
        <title>{getPageTitle(pageHeading)}</title>
      </Head>
      <StudioLayout>
        <Heading level={1}>{pageHeading}</Heading>
        <Text className={styles.pageDescription}>
          {_(
            msg`Register your LLM provider API keys in order to create a new digital author.`,
          )}
        </Text>

        <Flex style={{ marginTop: "var(--bw-space-4)" }} justify="end">
          <DialogTrigger>
            <Button prefixIcon={<LuPlus />}>{_(msg`Create new`)}</Button>
            <AddApiKeyDialog />
          </DialogTrigger>
        </Flex>
        <ManageAPIKeyTable
          className={styles.apiKeyTable}
          items={res.items.map((item) => ({
            id: item.id,
            name: item.name,
            apiKeyPrefix: item.valueFirstTen,
            apiKeySuffix: item.valueLastSix,
            createdAt: new Date(item.createdAt),
          }))}
        />
      </StudioLayout>
    </>
  );
};
