import { Container, Row, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ImageItem from './ImageItem';




const SelectedItems = ({selectedItems, checkedItems, setcheckedItems, memoizedAddHandler, memoizedRemoveHandler}) => {

    const navigate = useNavigate();

    return (
        <Container>

            <Button variant="outline-primary selected__back-button"
                onClick={()=> {
                    setcheckedItems([])
                    navigate('/')
                }}
            > 
                Back to search 
            </Button>
            <h2 className='selected__title'>Selected images</h2>
            <Row className='selected__list' xl={4} lg={3} md={2}>
                {
                    !selectedItems.length ? (<div>No images to show</div>)
                    :selectedItems.map(item => (
                        <ImageItem item={item} key={item.id} 
                                memoizedAddHandler={memoizedAddHandler} 
                                memoizedRemoveHandler={memoizedRemoveHandler}
                                checkedItems={checkedItems}
                        />
                    ))
                }
            </Row>
        </Container>
    );
};

export default SelectedItems;