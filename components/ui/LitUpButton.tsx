import React from 'react'

const LitUpButton = (
  {title,icon,position,handleClick,otherClasses} :
  {title: string; icon:React.ReactNode; position:string; handleClick?:()=>void; otherClasses?:string;}
) => {
  return (
    <button className="p-[2px] relative w-full md:w-70 md:mt-10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className={`inline-flex gap-4 px-10 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent items-center justify-center ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
      </div>
    </button>
  )
}

export default LitUpButton