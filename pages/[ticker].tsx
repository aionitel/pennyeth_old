import { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AssetPage: NextPage = () => {
  const router = useRouter();
  const { ticker: url_path } = router.query;

  return (
    <div>
    </div>
  )
}

export default AssetPage;