import React from 'react'
import Firstdatacollection from '../../Data/Firstdatacollection.js'

export default function Etension() {
  return (
    <div>

     <div className="">
     <h1 className="text-[24px] text-white font-normal">Waarmee kunnen we je helpen?</h1>
     </div>

      <div className="flex justify-center items-center gap-4 w-full flex-wrap">
        {
          Firstdatacollection.map((items, index) => (
            <div key={index} className="bg-white rounded-lg p-2  m-4">
              <div className="flex items-center justify-start gap-2 w-[200px]">
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
