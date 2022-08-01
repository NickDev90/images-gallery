import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loader from './Loader';
import ImageItem from './ImageItem';

const ImageList = ({ items, isLoading, memoizedAddHandler, memoizedRemoveHandler}) => {


    return (
        <Container>      
            <Row className='itemList' xl={4} lg={3} md={2}>
                {
                    isLoading && <Loader/>
                }            
                {   items &&
                    items.map(item => (
                        <ImageItem item={item} key={item.id} 
                                memoizedAddHandler={memoizedAddHandler} 
                                memoizedRemoveHandler={memoizedRemoveHandler} 
                        />
                    ))
                }
            </Row>
        </Container>
    );
};

export default ImageList;