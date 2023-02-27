import { useState } from "react";
import { MensajeError } from "./MensajeError";

export const Presupuesto = ({setMostarPresupuestos, setCapital, setRestante}) => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [mensajeerror, setMensajeError] = useState(false);

  const handleFormPresupuesto = (e) => {
    e.preventDefault();

    if (presupuesto < 1 || isNaN(presupuesto)) {
      setMensajeError(true);

      return;
    }

    setMostarPresupuestos(false)
    setMensajeError(false);
    setPresupuesto(0)

    setCapital(presupuesto)
    setRestante(presupuesto)
    
  };

  return (
    <div className="row d-flex text-dark justify-content-center  ">
      <div
        className="col-12 col-md-8 text-center px-5 pt-5 rounded-4   bg-light  "
        style={{ height: "400px" }}
      >
        
        <h3 className="mt-5 mb-4">Ingrese su Presupuesto</h3>

        <form onSubmit={handleFormPresupuesto}>

            {/* mostrar mensaje de error */}
          {mensajeerror ? (
            <MensajeError mensaje={"introduzca un presupuesto valido"} />
          ) : null}


          <input
            className="form-control  mb-4"
            placeholder="Eje: 400"
            type="number"
            value={presupuesto}
           
            onChange={(e) => setPresupuesto(e.target.value)}
            />

          <input
            className="btn btn-info text-white   w-100 "
            type="submit"
            value="Agregar"
           
          />

        </form>
      </div>
    </div>
  );
};
