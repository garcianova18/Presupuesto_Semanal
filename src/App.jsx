import { useState, useEffect } from "react";
import "./App.css";
import { Gastos } from "./Componentes/Gastos";
import { Presupuesto } from "./Componentes/Presupuesto";
import { TablaGastos } from "./Componentes/TablaGastos";

function App() {
  const [mostarpresupuestos, setMostarPresupuestos] = useState(true);
  const [listagastos, setListaGastos] = useState([]);
  const [capital, setCapital] = useState(0);
  const [restante, setRestante] = useState(0);
  const [agregargastos, setAgregarGastos] = useState({});
  const [estadogasto, setEstadoGasto] = useState(false);

  const mostrarGastos = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem("gasto"));

    if (getLocalStorage != null) {
      setListaGastos(getLocalStorage);
    }
  };

  useEffect(() => {
    mostrarGastos();
  }, []);


  //para agregar gastos 
  useEffect(() => {

    if (estadogasto) {

      const gastos = JSON.parse(localStorage.getItem("gasto"));

      if (gastos == null) {

        localStorage.setItem("gasto", JSON.stringify([agregargastos]));
      } 
      else {

        localStorage.setItem(
          "gasto",
          JSON.stringify([...gastos, agregargastos]) );
      }

      setRestante(restante - agregargastos.cantidad);

      mostrarGastos();
    }

  }, [agregargastos]);

  return (
    <div className="container text-center ">
      <h1 className="mt-5 mb-5 text-light">Gastos Semanal</h1>
      {mostarpresupuestos ? (
        <Presupuesto
          setMostarPresupuestos={setMostarPresupuestos}
          setCapital={setCapital}
          setRestante={setRestante}
        />
      ) : (
        <div className="row g-5 ">
          <div className="col-12 col-md-6">
            <Gastos 
            setAgregarGastos={setAgregarGastos}
            setEstadoGasto={setEstadoGasto}
             />
          </div>

          <div className="col-12 col-md-6">
            <TablaGastos
              listagastos={listagastos}
              capital={capital}
              restante={restante}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
