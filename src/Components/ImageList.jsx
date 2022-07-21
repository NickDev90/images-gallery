import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Loader from './Loader';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import {useNavigate} from 'react-router';
import Checkbox from './Checkbox';

const ImageList = ({ items, scrollPosition, isLoading, checkedCount, setCheckedCount}) => {

    const navigate = useNavigate();

    return (
        <Container>         
            <Row className='itemList' xl={4} lg={3} md={2}>
                {
                    isLoading && <Loader/>
                }

                {   items &&
                    items.map(item => (
                        <Col style={{ marginBottom: '20px' }} >
                            <Card style={{ height: '100%' }}>
                                <LazyLoadImage className='imgItem'
                                    key={item.id}
                                    scrollPosition={scrollPosition}
                                    src={item.url}
                                    onClick={() => {
                                        navigate(`/${item.id}`);
                                        setCheckedCount(0);
                                    }}
                                />
                                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Card.Title style={{ flex: '1 1 auto' }}>{item.title}</Card.Title>
                                    <Checkbox checkedCount={checkedCount} setCheckedCount={setCheckedCount}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default trackWindowScroll (ImageList);