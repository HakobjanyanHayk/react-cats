import React , {useState} from "react";
import { Button, Col } from "react-bootstrap";

const ActionBtn = ({type, click}) => {
const color = type === 1 ? "success" : "danger"
const text = type === 1 ? "Like" : "Dislike"

    return (
        <>
            <Col lg={6} md={6} sm={6}>
                <div className="d-flex justify-content-center">
                    <Button variant={color} onClick={()=>click(type)}>
                        {text}
                    </Button>
                </div>
            </Col>
        </>
    )
}


export default ActionBtn