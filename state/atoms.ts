import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface AssetProps {
  name: string,
  ticker: string,
  price: number,
  hourChange: number,
  dailyChange: number,
  volume: number
}

// curr user's eth address
export const currUserAtom = atom({
  key: 'currUser',
  default: '' as string ,
  effects_UNSTABLE: [persistAtom]
})

// to close and open modal on certain events
export const navOpenAtom = atom({ 
  key: 'modalOpen',
  default: false as boolean,
  effects_UNSTABLE: [persistAtom]
})

// various metrics for certain asset
export const assetMetricsAtom = atom({
  key: "assetMetrics",
  default: [] as AssetProps[],
  effects_UNSTABLE: [persistAtom]
})

// weekly btc and eth ytd data
export const WeeklyBtcAtom  = atom({
  key: "weeklyBtc",
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const WeeklyEthAtom = atom({
  key: 'weeklyEth',
  default: [],
  effects_UNSTABLE: [persistAtom]
})