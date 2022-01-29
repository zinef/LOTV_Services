

import '../css/myCss/home.css'

const Navbar = () => {
    return (
        <div className="shadow-lg shadow-inset">
            
            <nav className="navbar fixed-top navbar-expand-lg d-flex flex-column ftco-navbar-light shadow-lg p-4 mb-100 " id="ftco-navbar" >
                <div className="container ">
                <a className="navbar-brand" href="/" style={{color:"black"}}> <b>Lily Of the Valley</b> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="/" className="nav-link" style={{color:"white"}}><b>Home</b></a></li>
                        <li className="nav-item"><a href="/register" className="nav-link" style={{color:"white"}}><b>SignUp</b></a></li>
                        <li className="nav-item"><a href="/login" className="nav-link" style={{color:"white"}}><b>SignIn</b></a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;