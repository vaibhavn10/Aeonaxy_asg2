import React, { useEffect } from "react";

if(window.scrollY<"400px"){
  const tabs = document.getElementById("tabs");
  tabs.forEach(tab=>{
    tab.classList.remove("activesection");
  })
}

const Intro = () => {
  const scrollTo = (e,n) =>{
    const tabs = document.getElementById("tabs");
    for(let i=0 ; i<tabs.children.length ; i++){
      tabs.children[i].classList.remove("activesection");
    }
    e.target.classList.add("activesection");
    if(document.getElementById("sections")){
      const targetElement = document.getElementById("sections").children[n];
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const handleScroll = () => {
    if (window.scrollY >= 820 && window.scrollY <= 900) {
      const tabs = document.getElementById("tabs");
      tabs.children[0].classList.add('activesection');
    for(let i=1 ; i<tabs.children.length ; i++){
      tabs.children[i].classList.remove("activesection");
    }
    }
  }
  useEffect(() => {
    document.getElementById("sections").scrollIntoView({ behavior: 'smooth' });
    window.addEventListener('scroll', handleScroll);
  }, [])
  
  

  return (
    <div className="pt-24 flex flex-col">
      <div className="flex flex-col gap-2 pb-10">
        <h1 className="text-5xl font-bold text-black tracking-tight title-font">
          Press Room
        </h1>
        <div className="text-lg text-black">
          All the News You Need to Know about Wix
        </div>
      </div>
      <div className="flex py-6 border-y border-slate-400 text-center md:text-start" id="tabs">
        <button className="text-xs md:text-sm font-semibold md:font-medium pr-6 cursor-pointer activesection">
          Press Room
        </button>
        <button className="text-xs md:text-sm font-semibold md:font-medium px-6 border-x border-black cursor-pointer" onClick={(e)=>scrollTo(e,1)}>
          Press Release
        </button>
        <button className="text-xs md:text-sm font-semibold md:font-medium pl-6 cursor-pointer" onClick={(e)=>scrollTo(e,2)}>
          In The News
        </button>
      </div>
      <div className="py-10 text-md w-full md:w-3/5">
        Wix is leading the way with a cloud-based development platform for users
        worldwide. Wix was founded on the belief that the Internet should be
        accessible to everyone to develop, create and contribute. Through free
        and premium subscriptions, Wix empowers millions of businesses,
        organizations, artists, and individuals to take their businesses, brands
        and workflow online.
      </div>
      <div className="">
        <div className="h-64 md:h-80 w-full rounded-sm bg-zinc-100"></div>
        <div className="flex items-center justify-center py-6 gap-2">
          <div className="h-2 w-2 rounded-full bg-zinc-300"></div>
          <div className="h-2 w-2 rounded-full bg-zinc-300 activecarousal"></div>
          <div className="h-2 w-2 rounded-full bg-zinc-300"></div>
          <div className="h-2 w-2 rounded-full bg-zinc-300"></div>
          <div className="h-2 w-2 rounded-full bg-zinc-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
