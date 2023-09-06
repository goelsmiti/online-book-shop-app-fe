
import { Link } from "react-router-dom";
import '../App.css'
import { Button, Card } from "react-bootstrap";

export function Menu({ title, product_image, category, price, id, author }) {
    return (
        <div className="col col-md-2 col-xl-4 ">
            <Link to={`/about/${id}`} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product_image} style={{ height: 300, width: "auto" }} />
                    <Card.Body>
                        <Card.Title>{title}
                        </Card.Title>
                        <Card.Text>
                            <span>Price:{price}</span><br></br>
                            <span>Author: {author}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )


};
















