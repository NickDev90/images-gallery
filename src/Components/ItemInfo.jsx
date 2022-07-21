import { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Requests } from '../API/requests';

const ItemInfo = ({}) => {

    const navigate = useNavigate();
    const params = useParams();

    const [item, setItem] = useState({});

    useEffect(  () => {
            Requests.getItemInfo(params.itemId)
            .then(res => setItem(res))
    }, [])

    return (
        <Container className='itemInfo'>
            <Button variant="outline-primary"
                onClick={()=> navigate(-1)}
            > 
                Back to search 
            </Button>

            <div className="itemBody">
                <h2 className="itemTitle">{item.title}</h2>
                <div className="itemImage">
                    <img src={item.url} alt={item.thumbnailUrl} />
                </div>
            </div>
        </Container>
    );
};

export default ItemInfo;