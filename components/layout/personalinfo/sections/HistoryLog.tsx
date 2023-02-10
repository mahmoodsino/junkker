import React from 'react'
import JunkkersHistoryType from '../../../../helper/type/users/JunkkersHistoryType'


interface Props {
  junkkers : JunkkersHistoryType
}


const HistoryLog = ({junkkers}:Props) => {
  return (
    <div className="bg-white mt-5 flex justify-between items-center rounded-xl px-8 py-3">
          <div>
            <h5 className="font-bold text-lg">{junkkers.old}</h5>
            <span className="text-xs">Old Junkkers</span>
          </div>
          <div>
            <h5 className="font-bold text-lg text-red2">{junkkers.adjust}</h5>
            <span className="text-xs">Adjustment</span>
          </div>
          <div>
            <h5 className="font-bold text-lg">{junkkers.new}</h5>
            <span className="text-xs">New Junkkers</span>
          </div>
          <div>
            <h5 className="font-bold text-lg">Bid Fees</h5>
            <span className="text-xs">Toyota Corolla 2009</span>
          </div>
          <div className="flex items-center space-x-7">
            <h5 className="font-bold text-lg">11/11/2022</h5>
            <img src="/right.svg" alt="" />
          </div>
        </div>
  )
}

export default HistoryLog
