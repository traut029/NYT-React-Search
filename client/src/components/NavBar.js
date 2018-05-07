import React from "react";



const Navbar = (props) => (
    <div>

        <nav className="navbar navbar-light bg-light">
            <a
                onClick={() => props.handlePageChange("Home")}
                className={
                props.currentPage === "Home" ? "nav-link active" : "nav-link"
                }
            >Home
            </a>
            <a
                onClick={() => props.handlePageChange("About")}
                className={
                props.currentPage === "About" ? "nav-link active" : "nav-link"
                }
            >
                Saved
            </a>
        </nav>
    </div>
);

export default Navbar;
