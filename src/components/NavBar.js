import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavBar() {
    let history = useHistory()
    const redirect = (path) => {
        history.push(path)
    }
    return (
        <>
            <div className="navbar">
                <Button variant="primary" onClick={() => redirect('/liked')}>Liked</Button>
                <Button variant="primary" onClick={() => redirect('/')}>Home</Button>
            </div>
        </>
    )
}



export default NavBar