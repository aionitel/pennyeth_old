import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Query: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div>
      <Head>
        <title>PennyETH • {query}</title>
      </Head>
      <h1>{query}</h1>
    </div>
  )
}

export default Query;