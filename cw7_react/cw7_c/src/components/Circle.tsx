import { useState, type MouseEvent } from "react";

type Props = {
  color?: string;
  
};


const Circle = (props: Props) => {

  const [size, setSize] = useState(200);
  const [opacity, setOpacity] = useState(100);
    function handleMouseDown(e: MouseEvent<HTMLDivElement>): void {
      
        e.preventDefault();
        switch(e.buttons){
          case 1:
            setSize(size - 10);
            break;
          case 2:
            if(size > 20)
              setSize(size + 10);
            break;
          case 4:
            setSize(200);
            break;
          default:
            break;
        }  
    }
    function handleMouseMovement(e: MouseEvent<HTMLDivElement>):void{
      e.preventDefault();
      setOpacity((e.screenX/size));
    }


  console.log("renderowanie Circle");
  //użycie stanu dla text, który wymusza renderowanie gdy zmieni się wartość text
  const [text,setText] = useState("brak");
  //let text = "hh";
  return (
    <div
      onClick={(e) => {
        console.log(e);
        console.log(
          "kliknieto kółko o kolorze: " +
            (e.target as HTMLDivElement).style.backgroundColor
        );
       setText((e.target as HTMLDivElement).style.backgroundColor);
       //text = "fdffdffdd";
        console.log(text);
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: props.color || "white",
        border: "solid 1px black",
        borderRadius: "50%",
        cursor: "pointer",
        opacity: `${opacity}`
      }}
      onMouseMove={(e) => handleMouseMovement(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      onContextMenu={(e) => e.preventDefault()}>
      {text}
    </div>
  );
};

export default Circle;