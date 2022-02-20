import { FcScatterPlot } from 'react-icons/fc'
import { AiTwotoneFire } from 'react-icons/ai'

function Header() {
  return (
    <div className="flex w-full justify-evenly bg-[#1a1616] text-xl font-bold text-gray-300 shadow-md">
      <div className="group flex h-16 w-3/4 cursor-pointer flex-col justify-center">
        <h1 className="hidden text-xl hover:text-teal-500 group-hover:inline">
          <AiTwotoneFire className="inline text-teal-600" />{' '}
          <a href="https://github.com/gagan-iitb/DataAnalyticsAndVisualization">
            Data Analytics and Visualization
          </a>{' '}
          <FcScatterPlot className="inline" />
        </h1>
        <div className="flex justify-center">
          <h2 className="text-3xl text-teal-600">Medical Diagnosis App</h2>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center text-sm ">
        <p>Accuracy train: 1.0</p>
        <p>Accuracy test: 1.0</p>
      </div> */}
    </div>
  )
}

export default Header
// bg-[#393D42]
// bg-[#310c3a]