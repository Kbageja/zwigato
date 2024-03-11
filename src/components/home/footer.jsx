import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer(){
return(<>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><FaTwitter /></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><FaFacebookF /></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><FaInstagram /></a></li>
    </ul>
  </footer>
</div>
</>);

}
export default Footer;