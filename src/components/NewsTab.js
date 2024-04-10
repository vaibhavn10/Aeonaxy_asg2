import React from 'react'

const NewsTab = (props) => {
    const {date, link, title} = props;
  return (
    <div className="flex flex-col pt-4 pb-12 md:pb-20 border-b border-black">
      <div className='text-sm pt-8 pb-3'>{date}</div>
      <div className='text-sm font-bold py-2'>{link}</div>
      <div className='flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
        <div className='text-sm text-start px-4 md:px-0'>{title}</div>
        <a href="/" className='uppercase text-xs md:text-sm px-6 underline decoration-1.5 underline-offset-4 text-center md:text-end w-full md:w-40'>Read More</a>
      </div>
    </div>
  )
}

export default NewsTab
