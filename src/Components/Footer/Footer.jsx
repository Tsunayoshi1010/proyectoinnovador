import "./Footer.css";

import logo2 from "../../img/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_top">
      <div className="footer_main">
        <div className="logo__footer">
          <img src={logo2} alt="LOGO" />
        </div>
        <div className="lista__footer">
          <ul>
            <li>
              <Link className="link" to={"/"}>
                {" "}
                Inicio{" "}
              </Link>
            </li>
            <li>
              <Link className="link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to={"/about-us"}>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="emails">soporte.tecnico@vce.com / recursos.humanos@vce.com</p>
        <p className="copyright">Copyright © 2024 VCE All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
