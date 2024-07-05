import React, { useEffect, useState } from 'react'

import background from "./image.jpg";

import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DocCard from './DocCard';

function AllDoc() {

    const base_url = "https://doctor-backend-499q.onrender.com/doctors";

    const [allDocData, setAllDocData] = useState([]);

    const fetchData = async () => {
        const result = await axios.get(base_url);
        setAllDocData(result.data);
        console.log(result.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Row>
                {
                    allDocData.map(item => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <DocCard doc={item} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default AllDoc