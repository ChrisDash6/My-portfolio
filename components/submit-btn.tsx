import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const {pending} = useFormStatus()
  return (
    <button
    className="group flex items-center justify-center bg-gradient-to-b from-green-900 to bg-slate-300 font-bold uppercase
              tracking-wider text-slate-900 rounded-full py-2 focus:scale-[1.10] hover:scale-[1.10] hover:bg-green-300 active:scale-110
              transition disabled:scale-100 disabled:bg-opacity-65"
    type="submit"
    disabled={pending}
  >{
    pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>) : (
    <>
    Submit {" "}
    <FaPaperPlane
      className="
              group-hover:translate-x-1
              group-hover:-translate-y-1"
    />
    </>)}
  </button>
  )
}
