import { useState } from "react";
import Display from "./Display";
import CalculatorButton from "./CalculatorButton";

const MyCalculator = () => {
  const [number, setNumber] = useState("");
  const defaultDisplay = 0
const calcNumbers = [1,2,3,4,5,6,7,8,9,0];
const numberWords= ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];

  return (
    <div>
      <Display number={number ? number : defaultDisplay} />

      <div className="button-grid">
      <CalculatorButton
        typeOfButton={"clear"}
         buttonText={"AC"}
         id="clear"
         onClick={() => {
          setNumber("")
         }}
        />
        
      
          {calcNumbers.map((item, index) => {
            return (
            <CalculatorButton
            typeOfButton={"number"}
            id={numberWords[index]}
            buttonText={item.toString()}
            onClick={() => {
              setNumber(number + item);
            }}
            />
          );
        })}
        
        <CalculatorButton
        typeOfButton={"arithmetic"}
         buttonText={"."}
         id="decimal"
         onClick={() => {
          setNumber(number + ".");
          }}
        />
        <CalculatorButton
        typeOfButton={"arithmetic"}
         buttonText={"+"}
         id="add"
         onClick={() => {
          setNumber(number + " + ");
         }}
        />
        <CalculatorButton
        typeOfButton={"arithmetic"}
         buttonText={"-"}
         id="subtract"
         onClick={() => {
          setNumber(number + " - ");
         }}
        />
         <CalculatorButton
        typeOfButton={"arithmetic"}
         buttonText={"*"}
         id="multiply"
         onClick={() => {
          setNumber(number + " * ");
         }}
        />
        <CalculatorButton
        typeOfButton={"arithmetic"}
         buttonText={"/"}
         id="divide"
         onClick={() => {
          setNumber(number + " / ");
         }}
        />
        <CalculatorButton
        typeOfButton={"arithmetic"}
         buttonText={"="}
         id="equals"
         onClick={() => {
          setNumber(eval(number));
         }}
        />

      </div>
    </div>
  );
};

export default MyCalculator;
