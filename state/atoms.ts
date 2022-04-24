import { atom } from "recoil";

export const currPageAtom = atom({
  key: 'currPage',
  default: 'Assets' as string
})

export const currNavPage = atom({
  key: 'currNavPage',
  default: 'assets' as string
})

export const currUserAtom = atom({
  key: 'currUser',
  default: null as string | null
})