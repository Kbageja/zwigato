import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer(){
return(<>
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><FaTwitter /></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebookF /></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><FaInstagram /></a></li>
    </ul>
  </footer>
</div>
</>);

}
export default Footer;