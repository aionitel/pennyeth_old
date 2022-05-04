import { atom } from "recoil";

export const currPageAtom = atom({ // keeping track of current page 
  key: 'currPage',
  default: 'Assets' as string
})

export const currUserAtom = atom({ // global user state
  key: 'currUser',
  default: null as string | null
})