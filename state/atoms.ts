import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const currUserAtom = atom({ // global user state
  key: 'currUser',
  default: '' as string ,
  effects_UNSTABLE: [persistAtom]
})

export const navOpenAtom = atom({ // to close and open modal on certain events
  key: 'modalOpen',
  default: false as boolean,
  effects_UNSTABLE: [persistAtom]
})

export const IntradayDataAtom = atom({
  key: 'IntradayData',
  default: {
    btc: "20000",
    eth: "1000",
  },
  effects_UNSTABLE: [persistAtom]
})