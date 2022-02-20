import Link from 'next/link'
import { FcHome, FcAbout, FcMindMap, FcAddressBook } from 'react-icons/fc'
import { ImTree } from 'react-icons/im'
import { GiBurningForest } from 'react-icons/gi'
import { useEffect, useState } from 'react'
// import { SiThemodelsresource } from 'react-icons/si'
interface homeDataType {
  About: string
  Course: string
  Name: string
  Discipline: string
  Department: string
  Year_of_Graduation: string
}
function Sidebar() {
  const [modelView, setModelView] = useState(false)
  const [homeData, setHomeData] = useState<homeDataType>({
    About: 'Medical Diagnosis App',
    Course: 'Data Analytics and Visulization',
    Department: 'EECS',
    Discipline: 'Electrical Engineering',
    Name: 'yaadava_kishore',
    Year_of_Graduation: '2023',
  })
  useEffect(() => {
    async function fetchHomeData() {
      const res = await fetch('/api/')
      const data: homeDataType = await res.json()
      setHomeData(data)
      // console.log(data)
    }
    fetchHomeData()
  }, [])

  return (
    <div className="hidden h-screen flex-col border-r border-gray-900 bg-[#05192D] p-2 text-sm sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem]">
      {/* images */}
      <div className="cursor-pointer">
        <img src="photos/med1.jpg" alt="" className="rounded-3xl" />
      </div>
      {/* quote */}
      <div className="mt-2 flex flex-col justify-center">
        <p className="text-center text-lg font-bold text-green-300">
          Early Diagnosis with Machine Learning
          <br />( for free)
        </p>
        <hr className="border-t-1 border-blue-500 " />
        <p className="text-center text-lg font-bold text-green-300">
          Live Longer 
        </p>
      </div>

      {/* <div className="mt-2 flex cursor-pointer justify-center text-lg font-bold text-teal-600 ">
        <div className="rounded-md bg-gray-800 p-1">
          <div className="m-1 flex flex-col rounded-md bg-gray-900 p-1">
            <p className="text-blue-700">Name:</p>
            <p className="rounded-md bg-gray-800 p-1 hover:text-teal-500">
              {homeData.Name}
            </p>
          </div>
          <div className="m-1 flex flex-col rounded-md bg-gray-900 p-1">
            <p className="text-blue-700">Department:</p>
            <p className="rounded-md bg-gray-800 p-1 hover:text-teal-500">
              {homeData.Department}
            </p>
          </div>
          <div className="m-1 flex flex-col rounded-md bg-gray-900 p-1">
            <p className="text-blue-700">Discipline:</p>
            <p className="rounded-md bg-gray-800 p-1 hover:text-teal-500">
              {homeData.Discipline}
            </p>
          </div>
        </div>
      </div> */}
      {/* links */}
      <div className="flex flex-col justify-evenly p-2">
        <div className="m-1 flex justify-center space-x-2 rounded-md bg-gray-800 p-1">
          <FcHome className="h-5 w-5 text-green-700" />
          <Link href="/">
            <a className="cursor-pointer text-[16px] font-semibold text-gray-400 hover:text-green-600">
              Home
            </a>
          </Link>
        </div>
        <div className="m-1 flex justify-center space-x-2 rounded-md bg-gray-800 p-1">
          <FcAbout className="h-5 w-5 text-green-700 " />
          <Link href="https://github.com/gagan-iitb/DataAnalyticsAndVisualization">
            <a className="cursor-pointer text-[16px] font-semibold text-gray-400 hover:text-green-600">
              About
            </a>
          </Link>
        </div>
        <div className="m-1 flex justify-center space-x-2 rounded-md bg-gray-800 p-1">
          <FcAddressBook className="h-5 w-5 text-green-700 " />
          <Link href="/">
            <a className="cursor-pointer text-[16px] font-semibold text-gray-400 hover:text-green-600">
              Github
            </a>
          </Link>
        </div>
        <div className="relative">
          <div
            className="m-1 flex justify-center space-x-2 rounded-md bg-gray-800 p-1"
            onClick={() => setModelView((prev) => !prev)}
          >
            <FcMindMap className="h-5 w-5 text-green-700 " />
            <Link href="/">
              <a className="cursor-pointer text-[16px] font-semibold text-gray-400 hover:text-green-600">
                Model
              </a>
            </Link>
          </div>
          {modelView ? (
            <div className="absolute top-9 flex w-full flex-col space-y-1 rounded-md bg-gray-800 p-1">
              <div className="flex justify-center space-x-2 rounded-md bg-gray-900 p-1">
                <ImTree className="h-5 w-5 text-blue-500 " />
                <Link href="/">
                  <a
                    className="cursor-pointer text-[16px] font-semibold text-gray-400 hover:text-teal-600"
                    onClick={() => {
                      setModelView(false)
                    }}
                  >
                    Decison Tree
                  </a>
                </Link>
              </div>
              {/* <div className="flex justify-center space-x-2 rounded-md bg-gray-900 p-1">
                <GiBurningForest className="h-5 w-5 text-blue-500 " />
                <Link href="/">
                  <a
                    className="cursor-pointer text-[16px] font-semibold text-gray-400 hover:text-teal-600"
                    onClick={() => {
                      setModelView(false)
                    }}
                  >
                    Random Forest
                  </a>
                </Link>
              </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
