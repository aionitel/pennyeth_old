import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Block: NextPage = () => {
  const router = useRouter();

  const { block } = router.query;

  return (
    <div>
      <Head>
        <title>PennyETH • {block}</title>
      </Head>
      <div className="text-white">
        {block}
      </div>
    </div>
  )
}

export default Block;