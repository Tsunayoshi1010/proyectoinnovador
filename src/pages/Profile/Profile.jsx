import { useSelector } from "react-redux"




const Profile = () => {

    //Me puedo traer cualquier info almacenada en el login de la personas usando el useSelector, gracias al thunk
    const infoUser = useSelector((store)=> store.authSlice.fullName)

  return (
    <section>
        <div>
            <h3>{`Bienvenido ${infoUser}`}</h3>
        </div>
        <div>
            <h4>info persona</h4>
            <p>foto</p>
        </div>
        <div>
            <p>descripcion</p>
        </div>
        <div>
            <p>background</p>
        </div>
        <div>
            <p>data importante necesaria</p>
        </div>

    </section>
  )
}

export default Profile