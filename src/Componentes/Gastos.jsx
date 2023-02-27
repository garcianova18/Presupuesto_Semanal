import { useState } from "react"
import { MensajeError } from "./MensajeError"
import shortid from "shortid"

const obgasto ={
  id: '',
  nombre:'',
  cantidad:''
}

export const Gastos = ({setAgregarGastos, setEstadoGasto  }) => {

  const [gasto, setGasto] = useState(obgasto)
  const [mensajeerror, setmensajeerror ] = useState(false)


  const handleInputs =(e)=>{  

    setGasto({...gasto, [e.target.name]: e.target.value})
 
  }
  //destructurando gasto
  const  {nombre, cantidad} = gasto;

  const handleFormGasto
   =(e)=>{

    e.preventDefault();

    //comprobar inputs
    if (nombre ===''|| cantidad < 1 || isNaN(cantidad)) {
      
      setmensajeerror(true)
      return;
    }
    
      
    //si los campos son validos

    //quitamos el mensaje error si existe
    setmensajeerror(false);

    //limpiamos  los campos
    setGasto(obgasto);

    //agregar id a cada hgasto
    gasto.id = shortid.generate()

//agregar gasto a local storage
    setAgregarGastos(gasto)
    setEstadoGasto(true)
  
  }



  return (
    <div className="row ">
    <div
      className="col-12 rounded bg-light px-5  "
      
    >
      
      <h6 className="mt-5 mb-4">agrega tus gastos aqui</h6>

      <form className="text-start" onSubmit={handleFormGasto
      }>

          {/* mostrar mensaje de error */}
        {mensajeerror ? (
          <MensajeError mensaje={"No has introducido ningun nombre gasto o la cantidad no es validad"} />
        ) : null}

        <label className="form-label">Nombre Gasto</label>

        <input

        className="form-control mb-4"
        placeholder="Eje: ir al cine"
        value={nombre}
        name='nombre'
        onChange={(e)=> handleInputs(e)}
        
        />

    <label className="form-label">Cantidad Gasto</label>
        <input
          className="form-control  mb-4"
          placeholder="Eje: 400"
          type="number"
          name="cantidad"
          value={cantidad}
          onChange={(e)=> handleInputs(e)}
          />

        <input
          className="btn btn-info text-white w-100 mb-5 "
          type="submit"
          value="Agregar Gasto"
         
        />

      </form>
    </div>
  </div>
  )
}
