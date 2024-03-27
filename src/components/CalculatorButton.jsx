

const CalculatorButton = ({ typeOfButton, buttonText, id, onClick }) => {
  return (
    <div className="calc-button" onClick={onClick} id={id}>
      {buttonText}
    </div>
  );
};

export default CalculatorButton;
