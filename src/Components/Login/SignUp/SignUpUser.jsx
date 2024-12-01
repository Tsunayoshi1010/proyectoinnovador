import { useEffect, useState } from "react";
import { getCitiesCo } from "../../../api/getCitiesCo";
import "./SignUpUser.css";

const SignUpUser = () => {
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [explorerRole, setExplorerRole] = useState(false);
  const [entrepeneurRole, setEntrepeneurRole] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await getCitiesCo();
      setCity(res);
    };

    loadData();
  }, []);

  console.log(city);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const TogleExplorerRole = () => {
    setExplorerRole(!explorerRole);
    setEntrepeneurRole(false);
  };
  const TogleEntrepeneurRole = () => {
    setEntrepeneurRole(!entrepeneurRole);
    setExplorerRole(false);
  };

  return (
    <article className="signup__container">
      <div>
        <h3>Registration form</h3>
      </div>

      <div className="toggle-buttons">
        <div>
          <button
            type="button"
            onClick={TogleExplorerRole}
            className={`toggle-button ${explorerRole ? "active" : ""}`}
          >
            EXPLORADOR
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={TogleEntrepeneurRole}
            className={`toggle-button ${entrepeneurRole ? "active" : ""}`}
          >
            EMPRENDEDOR
          </button>
        </div>
      </div>

      {/* FORM depending on ROLE */}
      <form>
        {explorerRole && (
          <section>
            <div>
              <div>
                <label htmlFor="fullName">Nombre completo:</label>
              </div>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div>
              <div>
                <label htmlFor="email">Correo Electronico:</label>
              </div>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <div>
                <label htmlFor="password">Contraseña:</label>
              </div>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <div>
                <label htmlFor="contact">Numero de contacto:</label>
              </div>
              <input type="text" id="contact" name="contact" required />
            </div>
            <div>
              <div>
                <label htmlFor="speciality">Profesion:</label>
              </div>
              <input type="text" id="speciality" name="speciality" required />
            </div>
            <div>
              <div>
                <label htmlFor="userName">Nombre de Usuario:</label>
              </div>
              <input type="text" id="userName" name="userName" required />
            </div>
            <div>
              <div>
                <label htmlFor="city">Ciudad:</label>
              </div>

              <select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Seleccione una ciudad</option>
                {city.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div>
                <label htmlFor="experience">Experiencia previa:</label>
              </div>
             <textarea name="htmlFor" id="htmlFor" rows="4" cols="50" required>Cuentanos tu experiencia previa...</textarea>
            </div>

            <button type="submit">Registrarme</button>
          </section>
        )}
      </form>

        <form >
          {entrepeneurRole && (
            <p>AGREGAR LA INFO AQUI</p>
          )}
        </form>



    </article>
  );
};

export default SignUpUser;
