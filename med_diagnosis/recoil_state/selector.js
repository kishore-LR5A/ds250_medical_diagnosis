import { selector } from 'recoil'
import { allSymptoms, symtomArray } from '../recoil_state/atom'

export const final_arr = selector({
  key: 'final_arr',
  get: ({ get }) => {
    const f_arr = []
    const symps = get(symtomArray)
    const arr = get(allSymptoms)
    arr.forEach((x) => {
      if (symps.includes(x)) {
        f_arr.push(1)
      } else {
        f_arr.push(0)
      }
    })
    // console.log(f_arr)
    return f_arr
  },
})

// export const scrap_arr = selector({
//   key: 'scrap_arr',
//   get: ({ get }) => {
//     const scrap = get(symtomArray)
//     return scrap
//   },
// })
