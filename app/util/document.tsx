import Head from "next/head";
import { memo } from "react";

type DocumentProps = {
  title: string;
  description: string;
};

const Document = memo<DocumentProps>(
  ({ title, description }: DocumentProps) => {
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    );
  }
);

export default Document;
