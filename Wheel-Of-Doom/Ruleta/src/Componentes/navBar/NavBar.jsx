import "./navbar.css"
import logo from "./images_navbar/logo.svg"
import iconlogin from "./images_navbar/iconlogin.svg"
import iconlogout from "./images_navbar/iconlogout.svg"


function NavBar() {


    return (
        <>

            <navbar className="navbar">
                <section>
                    <img className='logo' src={logo} alt="logo"></img>
                </section>

                <section>
                    <button id="buttonform" >FORMULARIO</button>
                    <button >RULETA</button>
                </section>

                <section className="options">
                    <div className="login">
                        <img src={iconlogin} alt="login" id="img_login"></img>
                        <p>@usuaria</p>
                    </div>

                    <div className="logout">
                        <img src={iconlogout} alt="logout" id="img_logout"></img>
                        <p>Salir</p>
                    </div>
                </section>

            </navbar>

        </>
    )
}

export default NavBar