function Navbar(){
    return(
        <div className="navbar">
        <div className="icon">
        <i className="fa-solid fa-bars"></i></div>

        <div className="navbar_sec_1">
            <h1 className="navbar_sec_1_title">Udemy</h1>
        </div>
        <div className="navbar_sec_2">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="search for anything here"></input>

        </div>
        <div className="navbar__sec__0">
            
            <div className="navbar_sec_3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You currently do not have any course</p>
                    </div>
                </div>
            </div>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user"></i>
        </div>
    </div>
   
    )
}
export default Navbar