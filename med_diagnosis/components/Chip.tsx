import React, { useEffect, useState } from 'react'
import { MdGppGood, MdGppBad } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { symtomArray } from '../recoil_state/atom'

interface symp {
  key: number
  symptom: string
}
function Chip(props: symp) {
  const [selected, setSelected] = useState(true)
  const [symp_array, setSympArray] = useRecoilState<string[]>(symtomArray)
  useEffect(() => {
    // console.log(symp_array)
  }, [symp_array])

  return (
    <div
      className="m-1 flex cursor-pointer items-center justify-center space-x-1 rounded-lg bg-gray-900 p-2 font-bold text-teal-400"
      onClick={() => {
        setSelected((prev) => !prev)
        setSympArray((arr: string[]) => {
          const new_arr: string[] = [...arr]
          if (selected) {
            return [...new_arr, props.symptom]
          } else {
            return new_arr.filter((element) => element !== props.symptom)
          }
        })
      }}
    >
      <p className={selected ? 'text-lg text-teal-300' : 'text-lg'}>
        {props.symptom}
      </p>
      {selected ? (
        <MdGppBad className="h-5 w-5 text-red-500" />
      ) : (
        <MdGppGood className="h-5 w-5 text-green-500" />
      )}
    </div>
  )
}

export default Chip
