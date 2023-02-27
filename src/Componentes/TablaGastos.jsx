import { restanteCondicional } from "./Helpers";
export const TablaGastos = ({ listagastos, capital, restante }) => {
    
  return (
    <div className="row bg-light rounded p-4">  

        
            <h4>Gastos</h4>
    
        

      <div className="col-12 py-5">

        {listagastos.map((gasto) => (

            <li key={gasto.id} className="  d-flex justify-content-between border-bottom border-secundary  mb-4 px-1">
                
                <p className="mb-0 text-capitalize">{gasto.nombre}</p>
                <p className=" bg-info w-25  py-2 mb-2 fw-bold">${gasto.cantidad}</p>
                
            </li>
            
         
        ))}

      </div>

      <div className="col-12 text-start fs-6 ">
        
          <p className="p-3 bg-info rounded">Capital: ${capital}</p>
        
          <p className={ restanteCondicional(capital, restante)} >Restante: ${restante}</p>
          
      </div>
    </div>
  );
};
