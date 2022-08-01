import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import Checkbox from './Checkbox';




const ImageItem = ({item, checkedItems, scrollPosition, memoizedAddHandler, memoizedRemoveHandler}) => {

    const navigate = useNavigate();

    return (
        <Col style={{ marginBottom: '20px' }} >
            <Card style={{ height: '100%' }}>
                <LazyLoadImage className='imgItem'
                    key={item.id}
                    scrollPosition={scrollPosition}
                    src={item.url}
                    onClick={() => navigate(`/${item.id}`)}
                />
                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                    <Card.Title style={{ flex: '1 1 auto' }}>{item.title}</Card.Title>
                    <Checkbox id={item.id} 
                        memoizedAddHandler={memoizedAddHandler} 
                        memoizedRemoveHandler={memoizedRemoveHandler} 
                        checkedItems={checkedItems}
                    />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default trackWindowScroll(ImageItem);