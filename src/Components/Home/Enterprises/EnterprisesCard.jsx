import UserInteraction from "../../Interaction/UserInteraction";
import "./EnterprisesCard.css";

const EnterprisesCard = ({ enterprise }) => {
  return (
    <article className="container__card">
      <header>
        <div>
          <h3>TITULO</h3>
        </div>
        <div>
          <p> Nombre compania </p>
          <p>Nombre quien publica</p>
          <img src="" alt="logo compania" />
        </div>
      </header>
      <section>
        <div>
          <img src="" alt="img1" />
          <img src="" alt="img2" />
        </div>
        <div>
          <p>descripcion</p>
        </div>
        <div>
          <UserInteraction post={enterprise} />
        </div>
      </section>
    </article>
  );
};

export default EnterprisesCard;
