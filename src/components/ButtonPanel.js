import Button from "./Button";

function ButtonPanel({ onClick, onClear, onEquals }) {
  return (
    <div className="buttons">
      <Button label="1" onClick={onClick} />
      <Button label="2" onClick={onClick} />
      <Button label="3" onClick={onClick} />
      <Button label="+" onClick={onClick} />

      <Button label="4" onClick={onClick} />
      <Button label="5" onClick={onClick} />
      <Button label="6" onClick={onClick} />
      <Button label="-" onClick={onClick} />

      <Button label="7" onClick={onClick} />
      <Button label="8" onClick={onClick} />
      <Button label="9" onClick={onClick} />
      <Button label="*" onClick={onClick} />

      <Button label="C" onClick={onClear} className="clear" />
      <Button label="0" onClick={onClick} />
      <Button label="=" onClick={onEquals} className="equals" />
      <Button label="/" onClick={onClick} />
    </div>
  );
}

export default ButtonPanel;