import React from "react";
import { generateOutput } from "./NumberPadSection/generateOutput";
import { Wrapper } from "./NumberPadSection/Wrapper";

type Props = {
  value:number
  onChange:(value:number)=>void
  onOK?:()=>void
}
const NumberPadSection: React.FC<Props> = (props) => {
  // const [output, _setOutput] = useState("0");
  const output = props.value.toString()
  const setOutput = (output: string) => {
    if (output.length > 16) {
      return parseFloat(output.slice(0, 16));
    }else{
      props.onChange(parseFloat(output));
    }

  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if (text === null) {
      return;
    }
    if (text === 'OK' && props.onOK) {props.onOK?.();}
    if ("0123456789.".split("").concat(["删除", "清空"]).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};

export default NumberPadSection;
