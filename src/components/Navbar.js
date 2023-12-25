
import logic from '../images/logo.svg'
import { PageLinks, socialLinks } from '../data';
const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logic} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
         {/* <!-- left this comment on purpose -->*/} 
         
         <ul class="nav-links" id="nav-links">
         {PageLinks.map((link)=>{
     return (
            <li key={link.key}>
              <a href={link.href} className="nav-link"> {link.text} </a>
            </li>
         );
         })}

         </ul>
       
          <ul className="nav-icons">
           {socialLinks.map((link)=>{
            const {id,href,icon} =link
            return (
                <li key={id}>
              <a href={href} target="_blank" className="nav-icon"
                ><i className={icon}></i
              ></a>
            </li>
            )
           }

           )}
           
          </ul>
        </div>
      </nav>
    );
}
export default Navbar; 