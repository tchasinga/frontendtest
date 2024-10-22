import React from 'react'
import Firstdatacollection from '../../Data/Firstdatacollection.js'

export default function Etension() {
  return (
    <div>

<div className="text-start py-3 pl-8">
  <h1 className="text-[24px] lg:text-white md:text-white sm:text-slate-950 font-semibold">
    Waarmee kunnen we je helpen?
  </h1>
</div>

      <div className="flex justify-center items-center w-full flex-wrap gap-2 text-blue-950 font-medium">
        {
          Firstdatacollection.map((items, index) => (
            <div key={index} className="bg-white rounded-lg p-3 lg:m-3 md:m-1 sm:m-2">
              <div className="flex items-center justify-start gap-2 w-[250px]">
                  <div className="text-2xl">
                    {items.icons}
                  </div>

                  <div className="text-sm">
                    <p>{items.title}</p>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
