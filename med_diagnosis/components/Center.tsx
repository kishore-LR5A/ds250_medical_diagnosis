import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Chip from './Chip'
import { allSymptoms, symtomArray } from '../recoil_state/atom'
import { final_arr } from '../recoil_state/selector'
import { BsHandIndexThumbFill } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import { FcApproval } from 'react-icons/fc'
import { FaVirus } from 'react-icons/fa'
import { MdDescription, MdHealthAndSafety, MdCancel } from 'react-icons/md'
interface prediction {
  predicted_disease: string
  disease_desc: string
  precautions: string[]
  model_used: string
}

function Center() {
  const all_Symptoms = useRecoilValue(allSymptoms)
  const [symp_array, setSympArray] = useRecoilState(symtomArray)
  const inp_arr = useRecoilValue<number[]>(final_arr)
  const [predict, setPredict] = useState({
    predicted_disease: '',
    disease_desc: '',
    precautions: [''],
    model_used: '',
  })
  const [visible, setVisible] = useState(false)

  const handleSend = async () => {
    try {
      const res = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ arr: inp_arr }), // body data type must match "Content-Type" header
      })
      const data: prediction = await res.json()
      setPredict(data)
      setVisible(true)
      // console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleCancel = () => {
    // setPredict({
    //   predicted_disease: '',
    //   disease_desc: '',
    //   precautions: [''],
    //   model_used: '',
    // })
    location.reload()
  }
  return (
    <div className="grid grid-cols-3 gap-2 overflow-visible">
      {/* left */}
      <div className="relative col-span-2 flex h-[800px] flex-col space-y-2 overflow-y-scroll">
        <div className="sticky top-0 flex items-center justify-center space-x-1 bg-gray-700 ">
          <p className="text-lg font-bold text-yellow-300">
            Select the symptoms you have!{' '}
          </p>
          <BsHandIndexThumbFill className="inline h-4 w-4 text-yellow-300" />
        </div>
        <div className="m-1 flex flex-wrap p-1">
          {all_Symptoms.map((element: string, index) => (
            <Chip key={index} symptom={element} />
          ))}
        </div>
      </div>
      {/* right */}
      <div className="col-span-1 flex flex-col space-y-2">
        <p className="flex justify-center bg-[#9c5012] text-lg font-bold">
          seleced symptoms and predictions
        </p>
        <div className="flex flex-wrap">
          {symp_array.map((element: string, index) => (
            <div className="m-1 flex items-center justify-center space-x-1 rounded-md bg-gray-900">
              <p className="p-1 font-bold text-teal-500" key={index}>
                {element}
              </p>
              <FcApproval className="h-5 w-5" />
            </div>
          ))}
        </div>
        {/* send and receive */}
        {!(symp_array.length == 0) ? (
          <div className="flex justify-center">
            <div className="m-1 flex items-center justify-center space-x-1 rounded-md bg-gray-700 p-1">
              <button
                onClick={handleCancel}
                className=" text-xl font-bold text-teal-500 hover:text-red-500"
              >
                cancel
              </button>
              <MdCancel className="h-4 w-4 text-teal-500" />
            </div>
            <div className="m-1 flex items-center justify-center space-x-1 rounded-md bg-gray-700 p-1">
              <button
                onClick={handleSend}
                className=" text-xl font-bold text-teal-500 hover:text-green-500"
              >
                predict
              </button>
              <RiSendPlaneFill className="h-4 w-4 text-teal-500" />
            </div>
          </div>
        ) : null}

        {visible ? (
          <div className="mt-2 flex cursor-pointer text-lg font-bold text-teal-600">
            <div className="w-full rounded-md bg-gray-800 p-1">
              <div className="m-1 flex flex-col rounded-md bg-gray-900 p-1">
                <div className="flex items-center space-x-1">
                  <p className="text-blue-700">Predicted Disease </p>
                  <FaVirus className="inline h-5 w-5 text-green-500" />
                </div>
                <p className="rounded-md bg-gray-800 p-1 hover:text-teal-500">
                  {predict.predicted_disease ?? 'No disease found'}
                </p>
              </div>
              <div className="m-1 flex flex-col rounded-md bg-gray-900 p-1">
                <div className="flex items-center space-x-1">
                  <p className="text-blue-700">Disease Description</p>
                  <MdDescription className="inline h-5 w-5 text-green-500" />
                </div>
                <p className="rounded-md bg-gray-800 p-1 hover:text-teal-500">
                  {predict.disease_desc}
                </p>
              </div>
              <div className="m-1 flex flex-col rounded-md bg-gray-900 p-1">
                <div className="flex items-center space-x-1">
                  <p className="text-blue-700">Precautions</p>
                  <MdHealthAndSafety className="inline h-5 w-5 text-green-500" />
                </div>
                <p className="rounded-md bg-gray-800 p-1 hover:text-teal-500">
                  {predict.precautions.map((element: string, index) => (
                    <p className="text- bg-gray-800" key={index}>
                      {element}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Center
