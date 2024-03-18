import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode}
export default function SectionHeading({children}:SectionHeadingProps) {
  return (
    <div className='py-1 text-2xl font-medium capitalize mb-8 border border-white-
     rounded-full border-opacity-10
    bg-gradient-to-t from-slate-800 to-slate-00 bg-opacity-40 shadow-lg shadow-black/[0.09]
    backdrop-blur-[0.1rem] text-center'>{children}</div>
  )
}
