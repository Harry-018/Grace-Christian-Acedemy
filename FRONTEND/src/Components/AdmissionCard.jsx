import React from 'react'

const AdmissionCard = ({Atitle}) => {
  return (
    <div className="flex flex-col rounded-xl font-[Poppins] gap-y-10 bg-bone">
      <span className="flex flex-col h-30 w-30 text-xs text-center">{Atitle}</span>
    </div>
  )
}

export default AdmissionCard