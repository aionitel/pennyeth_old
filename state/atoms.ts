import { atom } from "recoil";

export const currPageAtom = atom({
  key: 'currPage',
  default: 'Home' as string
})

export const currUserAtom = atom({
  key: 'currUser',
  default: null as string | null
})