import { NextPage } from 'next'
import React, { useEffect } from 'react'
import fetchWeeklyBtc from '../../prices/btc/fetchWeeklyBtc'
import fetchDailyBtc from '../../prices/btc/fetchDailyBtc'
import { useRecoilState } from 'recoil'
import { CurrBtcAtom, WeeklyBtcAtom } from '../../state/atoms'

/*
  secret page for only fetching certain data on initial page load
  component will not render again, so performance is better
*/

interface SecretProps {
  dailyBtc: number | typeof NaN,
  weeklyBtc: number | typeof NaN,
}

const Secret: NextPage<SecretProps> = ({ dailyBtc, weeklyBtc }) => {
  const [currBtc, setCurrBtc] = useRecoilState(CurrBtcAtom);
  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(WeeklyBtcAtom);

  useEffect(() => {
    setCurrBtc(dailyBtc);
    setCurrWeeklyBtc(weeklyBtc);
  })

  return (
    <div>
      You found the secret page!
    </div>
  )
}

export const getServerSideProps = async () => {
  const dailyBtc = await fetchDailyBtc();
  const weeklyBtc = await fetchWeeklyBtc();

  return {
    props: {
      dailyBtc,
      weeklyBtc
    }
  }
}

export default Secret