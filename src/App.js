import { useReducer } from "react";

function App() {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fechaActual = new Date();
  const yearActual = fechaActual.getFullYear();
  const monthActual = fechaActual.getMonth();

  const initialState = {
    year: yearActual,
    month: monthActual,
  };

  const reducer = (state, action) => {
    let newYear = state.year;
    let newMonth = state.month;

    switch (action.type) {
      case "masM":
        newMonth = newMonth == 11 ? 0 : newMonth + 1;
        break;
      case "masY":
        newYear = newYear + 1;
        break;
      case "menosM":
        newMonth = newMonth == 0 ? 11 : newMonth - 1;
        break;
      case "menosY":
        newYear = newYear - 1;
        break;
    }
    return { year: newYear, month: newMonth };
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>
        <h1>Contador Reducer</h1>
        <h3
          style={
            (state.year < yearActual && state.month < monthActual) ||
            state.year < yearActual
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {meses[state.month]} ({state.year})
        </h3>
        <div className="boxed">
          <h4>Mes</h4>
          <button onClick={() => dispatch({ type: "masM" })}>+</button>
          <button onClick={() => dispatch({ type: "menosM" })}>-</button>
        </div>
        <div className="boxed">
          <h4>Año</h4>
          <button onClick={() => dispatch({ type: "masY" })}>+</button>
          <button onClick={() => dispatch({ type: "menosY" })}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
