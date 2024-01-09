"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter)=>{
        typewriter.typeString("| Cannot Respond to Loads of Mails |")
        .pauseFor(2000).deleteAll()
        .typeString("| Let our Backend Service respond to Your Mails |")
        .pauseFor(2000).deleteAll()
        .typeString("| Adds all Responded Mails to a Label, for your reference |")
        .pauseFor(2000).deleteAll()
        .start()
      }}
    />
  )
}

export default TypeWriterTitle