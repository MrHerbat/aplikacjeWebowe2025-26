import React from 'react'

type Props = {
    content:string;
    fontColor?:string
}

export default function SomeText({content,fontColor}: Props) {
  return (
    <div style={{color:fontColor||"black"}}>{content}</div>
  )
}