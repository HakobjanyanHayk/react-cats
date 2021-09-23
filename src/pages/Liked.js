import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";

const Liked = () => {

    const [liked, setLiked] = useState([])

    useEffect(() => {
        setLiked(JSON.parse(localStorage.getItem('liked')) || [])
    }, [])

    return (
        <>
            <Row>
            {
                liked.length > 0
                    ?
                    liked.map((img) =>
                        <Col md={3} key={img} className="d-flex justify-content-center px-0">
                            <div className="liked-cat d-flex justify-content-center">
                                <img src={img} />
                            </div>
                        </Col>
                    )
                    :
                    <Col md={3}>
                        <div className="d-flex justify-content-center">
                            <h2>Nothing to show</h2>
                        </div>
                    </Col>
            }
            </Row>
        </>
    )
}

export default Liked