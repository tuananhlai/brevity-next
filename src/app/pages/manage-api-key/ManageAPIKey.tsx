import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { NextPage } from "next";
import { StudioLayout } from "@/components/studio-layout";
import { Table } from "@/components/ui/table";
import { Heading, Text } from "@/components/ui/text";
import { ManageAPIKeyTable } from "@/features/digital-author/components/manage-api-key-table";
import styles from "./ManageAPIKey.module.scss";

export const ManageAPIKey: NextPage = () => {
  const { _ } = useLingui();

  return (
    <StudioLayout>
      <Heading level={1}>{_(msg`Manage API Key`)}</Heading>
      <Text>
        {_(msg`API keys are used to authenticate requests to the API.`)}
      </Text>

      <ManageAPIKeyTable items={[]} />
    </StudioLayout>
  );
};
