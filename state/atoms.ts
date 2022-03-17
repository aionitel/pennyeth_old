import { atom } from "recoil";

export const currPageAtom = atom({
  key: 'currPage',
  default: 'Home' as string
})