import { NextPage } from 'next'
import React, { useEffect } from 'react'
import fetchWeeklyBtc from '../../prices/btc/fetchWeeklyBtc'
import fetchDailyBtc from '../../prices/btc/fetchDailyBtc'
import { useRecoilState } from 'recoil'
import { CurrBtcAtom, CurrEthAtom, WeeklyBtcAtom } from '../../state/atoms'
import fetchCurrEth from '../../prices/eth/fetchCurrEth'
import fetchCurrBtc from '../../prices/btc/fetchCurrBtc'

/*
  secret page for only fetching and setting certain data only on initial load
  component will not render again, so performance is better
*/

interface SecretProps {
  fetchedCurrBtc: number | typeof NaN,
  fetchedCurrEth: number | typeof NaN,
  weeklyBtc: number | typeof NaN,
}

const Secret: NextPage<SecretProps> = ({ fetchedCurrBtc, fetchedCurrEth, weeklyBtc }) => {
  const [currBtc, setCurrBtc] = useRecoilState(CurrBtcAtom);
  const [currEth, setCurrEth] = useRecoilState(CurrEthAtom);
  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(WeeklyBtcAtom);

  useEffect(() => {
    setCurrBtc(fetchedCurrBtc);
    setCurrEth(fetchedCurrEth);
    setCurrWeeklyBtc(weeklyBtc);
  })

  return (
    <div>
      You found the secret page!
    </div>
  )
}

export const getServerSideProps = async () => {
  const fetchedCurrBtc = await fetchCurrBtc();
  const fetchedCurrEth = await fetchCurrEth();
  const weeklyBtc = await fetchWeeklyBtc();

  return {
    props: {
      fetchedCurrBtc,
      fetchedCurrEth,
      weeklyBtc
    }
  }
}

export default Secret