import React from "react";
import ReleasesTab from "./ReleasesTab";

const Releases = () => {
  return (
    <div className="py-12 flex flex-col" id="releases">
      <div className="py-2 md:py-8 flex gap-4 items-center justify-between md:justify-start">
        <h2 className="text-3xl font-bold">Press Releases</h2>
        <a
          href="/"
          className="text-sm md:text-lg underline decoration-1 underline-offset-4 hover:text-gray-500 duration-200"
        >
          View All
        </a>
      </div>

      <div className="flex flex-col py-8">
        <ReleasesTab
          date="June 14, 2022"
          title="Wix wins Google Cloud Expansion Partner of the Year Award"
        />
        <ReleasesTab
          date="June 7, 2022"
          title="Wix Relaunches its Solution for Hotels - Now Powered by HotelRunner, Providing a Comp..."
        />
        <ReleasesTab
          date="April 27, 2022"
          title="Wix and LegalZoom Join Forces to Offer Personalized Solutions for Small Businesses to..."
        />
        <ReleasesTab
          date="April 18, 2022"
          title="Wix Events Launches Seating Map Builder"
        />
      </div>
    </div>
  );
};

export default Releases;
