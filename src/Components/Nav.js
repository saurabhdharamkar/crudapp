import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

import './Nav.css'
export let Nav = () => {
    let [searchId, setUser] = useState();

    const update = (e) => {
        setUser(e.target.value);
        console.log(searchId);
    }
    return (
        <section>
            <nav class="navbar navbar-light bg-warning" nav>
                <form class="container-fluid justify-content-start">

                    <NavLink to="/student/showall">
                        
                        {/* material ui */}
                        <Button color="primary" variant="contained">
                       Show Records
                    </Button>
                    </NavLink>
                    <NavLink to="/student/add">
                    <Button color="primary" variant="contained">
                       Add Student
                    </Button>
                    </NavLink>
                    <NavLink to="/student/contact">
                    <Button color="primary" variant="contained">
                       Contact Us
                    </Button>
                    </NavLink>
                 
                    <h1 className="mx-5 fw-bold text-center text-white ">Student Records</h1>
                    
                    <NavLink to="/">
                        <button class="btn btn-info mx-3 position-absolute fw-bold top-0 mt-2 end-0" type="button">Home</button>
                    </NavLink>
                </form>
               
            </nav>
            <div className="d-flex justify-content-center mt-3">

                <input type="number" onChange={update} value={searchId} placeholder="Enter ID "></input>
                <NavLink to={`/student/search/${searchId}`}> 
                <Button color="primary" variant="contained">
                       Show Records
                    </Button>
                </NavLink>
            </div>
        </section>
    )
}