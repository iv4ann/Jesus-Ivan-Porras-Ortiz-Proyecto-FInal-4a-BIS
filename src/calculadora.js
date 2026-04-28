import { useState } from "react";

export default function Calculadora() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    setResultado(Number(a) + Number(b));
  };

  const restar = () => {
    setResultado(Number(a) - Number(b));
  };

  const multiplicar = () => {
    setResultado(Number(a) * Number(b));
  };

  const dividir = () => {
    if (Number(b) === 0) {
      setResultado("No se puede dividir entre 0");
    } else {
      setResultado(Number(a) / Number(b));
    }
  };

  return (
    <div style={{ width: 200 }}>
      <h3>Calculadora</h3>

      <input
        type="number"
        placeholder="Número A"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Número B"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <br /><br />

      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={multiplicar}>*</button>
      <button onClick={dividir}>/</button>

      <h4>Resultado: {resultado}</h4>
    </div>
  );
}
