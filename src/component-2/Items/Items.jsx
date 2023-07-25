import './items.css';
import { Container, Row, Col } from 'react-bootstrap'

export default function Items({coverUrl, title, intro}) {
    return(
        <Container>
            <Row>
                <Col>
                    <div className='itemcard'>
                        <img src={coverUrl} alt=""></img>
                        <div className='item-text'>
                            <p className='item-title'>{title}</p>
                            <p className='item-intro'>{intro}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};