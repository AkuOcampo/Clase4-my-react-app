import { Card, CardGroup } from "react-bootstrap"

function AboutUs() {
    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="src/assets/images/card1.jpg" style={{maxWidth:'100vh', maxHeight:'300px', objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Coliflor</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">$1500 kg</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="src/assets/images/card2.jpg" style={{maxWidth:'100vh', maxHeight:'300px', objectFit:'cover'}} />
                    <Card.Body>
                        <Card.Title>Acelga</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">$700 unidad</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="src/assets/images/card3.jpg" style={{maxWidth:'100vh', maxHeight:'300px', objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Papas</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">$850 kg</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    )
}

export default AboutUs
