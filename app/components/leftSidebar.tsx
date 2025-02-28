import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  const links = [{name: "Home", link: "/"}, {name: "Ai", link: "/ai"}, {name: "News", link: "/news"}, {name: "Funding", link: "/Funding"}]
  return (
    <div className="w-[28vw] h-full p-4">
      <div className='w-full flex flex-col py-12 rounded-3xl h-full bg-blue-300'>
          {links.map((item, i) => (
            <Link key={i} href={item.link} className='w-full px-4 py-3 hover:bg-red-200 transition-all duration-200 ease-in-out'>{item.name}</Link>
          ))}
      </div>
    </div>
  )
}

export default LeftSidebar