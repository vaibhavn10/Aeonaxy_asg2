import React from 'react'

const ReleasesTab = (props) => {
    const {date, title} = props;
  return (
    <div className="flex flex-col pt-4 pb-12 md:pb-20 border-b border-black">
      <div className='text-sm font-bold pt-8 pb-4'>{date}</div>
      <div className='flex flex-col gap-4 md:flex-row items-start md:items-center justify-between'>
        <div className='text-sm px-4 md:px-0'>{title}</div>
        <a href="/" className='uppercase text-xs md:text-sm px-6 underline decoration-1.5 underline-offset-4 text-center md:text-end w-full md:w-40'>Read More</a>
      </div>
    </div>
  )
}

export default ReleasesTab
