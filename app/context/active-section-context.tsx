"use client"

import { sectionName } from '@/lib/types';
import React, { useState,createContext } from 'react'


type ActiveSectionContextProvideProps={
  children:React.ReactNode;
}
type ActiveSectionContextType={
  activeSection:sectionName,
  setActiveSection:React.Dispatch<React.SetStateAction<sectionName>>;
  timeOfLastClick:number,
  SetTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null)
export default function ActiveSectionContextProvider({children}:ActiveSectionContextProvideProps) {
    const [activeSection,setActiveSection]=useState<sectionName>('Home');
    const [timeOfLastClick,SetTimeOfLastClick]=useState(0);
  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    SetTimeOfLastClick,}}>
    {children}
    </ActiveSectionContext.Provider>
}
export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)
  if (context === undefined) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
  }
  return context;
}
