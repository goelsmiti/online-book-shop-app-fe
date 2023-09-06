import { Link, json, useLocation, useNavigate } from "react-router-dom"
import { Menu } from "./Menu";
// import * as jwt from 'jsonwebtoken'
import { useState } from "react";
import { useJwt } from "react-jwt";
import { Col, Container, Row } from "react-bootstrap";


export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const productList = JSON.parse(localStorage.getItem('products'))
    console.log("product list::::::", productList);

    // useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        navigate('/login')
    }
    const user = useJwt(token)

    if (token) {
        // const user = jwt.decode(token)
        // const user = ''
        if (!user) {
            localStorage.removeItem('token')
            navigate('/login')
        } else {
            console.log("IN DASHBORAD ELSE");
        }
    }
    // }, [])

    function handleReset(e) {
        console.log("Reset");
    }

    function handleSearch(e) {
        e.preventDefault();

        alert(`book selected1`)
    }
    const productCard = productList && productList.data && productList.data.map(el =>
        <Menu
            key={el._id}
            id={el._id}
            product_image={el.product_image}
            title={el.title}
            price={el.price}
            category={el.category}
            author={el.about_product.author}
        />
    );

    return (
        <div style={{ marginTop: 50 }}>

            <Container>
                <Row style={{ marginBottom: 20 }}>
                    <Col>
                        <h1 style={{ fontSize: 30 }}>Hi welcome to Book Shop</h1>
                    </Col>
                </Row>
                <Row md={4} sm={2} className="g-4">
                    {productCard}

                </Row>
                <Row style={{ margin: 20 }}><Col></Col></Row>
            </Container>
        </div>
    )
}