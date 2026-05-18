import React from 'react'

type Props = {
    myColor?: string,
    children?:React.ReactNode
}

const CompWithChild = ({myColor,children}: Props) => {
  return (
    <div style={{color:myColor||"black"}}>{children}</div>
  )
}
export default CompWithChild;