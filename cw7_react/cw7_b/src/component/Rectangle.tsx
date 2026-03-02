type Props = {
    myWidth:number;
    myHeight:number;
    myColor:string;
}

export default function Rectangle({myWidth,myHeight,myColor}: Props) {
  return (
    <div style={{width:`${myWidth}px`,height:`${myHeight}px`, backgroundColor:myColor}}/>
  )
}