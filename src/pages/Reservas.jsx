import { useState } from "react"
import { db } from "../firebase/firebase"
import moment from "moment"
import  "./Reservas.css";



export const Reservas = () => {

  const initialReserva = {
    nombre: '',
    comensales: '',
    reserva: ''

  }

  const [reserva, setReserva] = useState(initialReserva)



  const onChange = (e) => {
    console.log('e.target.name')
    console.log('e.target.value')
    setReserva({ ...reserva, [e.target.name]: e.target.value })
  }

  const enviarFormulario = async (e) => {
    e.preventDefault ()
    if (reserva.nombre==="" || reserva.reserva ==="" || reserva.comensales ==="") return;
    console.log(reserva)
    try {
      await db.collection("reservas").add(reserva)
    setReserva(initialReserva)
    window.alert("¡Reserva Realizada con exito!")
    } catch (error) {
      window.alert("No se pudo realizar su reserva intentelo nuevamente")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
    <div>
      <h1 className="h1-reservas">¡Haz tu reserva!</h1>

      <form className="form gap-5 p-5" onSubmit={enviarFormulario}>
        <input type="text" className="form-control mt-3" name="nombre" placeholder="Ingrese su nombre"
          value={reserva.nombre} onChange={onChange} required minLength={3} style={{ width: "300px" }} />

        <input type="number" className="form-control mt-3" name="comensales" placeholder="Cantidad de comensales"
          value={reserva.comensales} onChange={onChange} required min={1} max={10} style={{ width: "300px" }} />

        <input type="datetime-local" className="form-control mt-3" name="reserva" placeholder="Fecha de reserva"
          value={reserva.reserva} onChange={onChange} min={moment().add(12,"hours").format("YYYY-MM-DD hh:mm")} required style={{ width: "300px" }} />

        <button type="submit" className="btn btn-primary mt-3">Enviar reserva</button>
      </form>
    </div>
  </div>
    </>
    
  )
}
