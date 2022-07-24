import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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

// latest btc/usd price
export const CurrBtcAtom = atom({
  key: 'IntradayBtcPrice',
  default: 0 as number,
  effects_UNSTABLE: [persistAtom]
})

// latest eth/usd price
export const CurrEthAtom = atom({
  key: 'IntradayEthPrice',
  default: 0 as number,
  effects_UNSTABLE: [persistAtom]
})