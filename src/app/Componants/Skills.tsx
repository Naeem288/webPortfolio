import React from 'react'
import {AiOutlineCheckSquare} from 'react-icons/ai'

const Skills = () => {
  return (
    <div id='skills' >
        <section className="text-gray-600 body-font -mt-10 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 ">
        {/* skill 1 */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00A9FF] text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-full'>
            <div className='absolute bg-[#00A9FF] h-1 w-[100%]'></div>
           </div>
           <p className='font-bold text-[#00A9FF] text-right'>100%</p>
          </div>
        </div>
      </div>
      {/* skill 2*/}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00A9FF] text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Tailwind-Css
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-full'>
            <div className='absolute bg-[#00A9FF] h-1 w-[80%]'></div>
           </div>
           <p className='font-bold text-[#00A9FF] text-right'>80%</p>
          </div>
        </div>
      </div>
        {/* skill 3*/}
        <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00A9FF] text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TS/JS
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-full'>
            <div className='absolute bg-[#00A9FF] h-1 w-[80%]'></div>
           </div>
           <p className='font-bold text-[#00A9FF] text-right'>80%</p>
          </div>
        </div>
      </div>
       {/* skill 4*/}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00A9FF] text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Bootstrap 5
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-full'>
            <div className='absolute bg-[#00A9FF] h-1 w-[70%]'></div>
           </div>
           <p className='font-bold text-[#00A9FF] text-right'>70%</p>
          </div>
        </div>
      </div>
       {/* skill 5*/}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00A9FF] text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next-Js
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-full'>
            <div className='absolute bg-[#00A9FF] h-1 w-[80%]'></div>
           </div>
           <p className='font-bold text-[#00A9FF] text-right'>80%</p>
          </div>
        </div>
      </div>
       {/* skill 4*/}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#00A9FF] text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              React
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-full'>
            <div className='absolute bg-[#00A9FF] h-1 w-[60%]'></div>
           </div>
           <p className='font-bold text-[#00A9FF] text-right'>60%</p>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills