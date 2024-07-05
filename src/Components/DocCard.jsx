import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function DocCard({ doc }) {
    return (
        <div>
            <center>
                <Card className='mx-3 my-4' style={{ backgroundColor: 'rgba(189, 221, 248, .90)', height: '305px' }}>
                    <Card.Body>
                        <Card.Title>
                            <strong>{doc.hospital}</strong>
                            <br /><br />
                            <span style={{ color: '#4d4d4d' }}>
                                {doc.name}
                                <br />
                                <div style={{ paddingTop: '7px' }}>
                                    Ph : {doc.phone}
                                </div>
                                <br />
                                {doc.specialty}
                                <br /><br />
                                <i class="fa-solid fa-star" style={{ color: "#E4A11B" }}></i> {doc.rating}
                            </span>
                        </Card.Title>
                        <Link to={`doc/${doc.id}`}>
                            <Button variant="primary">More Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}

export default DocCard