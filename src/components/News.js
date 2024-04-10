import React from 'react'
import NewsTab from './NewsTab'

const News = () => {
  return (
    <div className="py-12 flex flex-col" id="news">
      <div className="py-2 md:py-8 flex gap-4 items-center justify-between md:justify-start">
        <h2 className="text-3xl font-bold">In The News</h2>
        <a
          href="/"
          className="text-sm md:text-lg underline decoration-1 underline-offset-4 hover:text-gray-500 duration-200"
        >
          View All
        </a>
      </div>

      <div className="flex flex-col py-8">
        <NewsTab
          date="April 28, 2022"
          link="Bloomberg"
          title="How E-Scooters Are Transforming Tel Aviv"
        />
        <NewsTab
          date="April 27, 2022"
          link="Benzinga"
          title="Wix, LegalZoom Collaborate To Boost Online Presence Of Small Businnesses"
        />
        <NewsTab
          date="April 26, 2022"
          link="HostingAdvice.com"
          title="Wix Peartners with Agencies to Build High-Performance Websites for Scalable Growth"
        />
        <NewsTab
          date="April 18, 2022"
          link="DevOps.com"
          title="Nurturing a Developer-Centric Culture"
        />
      </div>
    </div>
  )
}

export default News
