import React from 'react'

const AdmissionCard = ({ Icon, Atitle }) => {
  return (
    <div className="flex flex-col justify-center gap-3 rounded-xl bg-bone p-5 font-[Poppins]">
      <div className="text-green-600 h-20 w-20">
        {Icon}
      </div>
      
      <span className="text-xs text-center">
        {Atitle}
      </span>
    </div>
  )
}

export default AdmissionCard