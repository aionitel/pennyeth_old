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
      <div className='text-white'>
        {query}
      </div>
    </div>
  )
}

export default Query;