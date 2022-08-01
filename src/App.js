import { useEffect, useState, useCallback} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ImageList from './Components/ImageList';
import ItemInfo from './Components/ItemInfo';
import { Requests } from './API/requests';
import NotFound from './Components/NotFound';
import SelectedItems from './Components/SelectedItems';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [checkedItems, setcheckedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);


  const addHandler  = (id) => {
    setcheckedItems( prev => [id, ...prev])
  }

  const removeHandler  = (id) => {
    setcheckedItems(prev => prev.filter(item => item !==id))
  }

  const memoizedAddHandler = useCallback( (id) => addHandler(id), [] )

  const memoizedRemoveHandler = useCallback( (id) => removeHandler(id), [] )

  const filterItems  = () => {
    const filtered = items.filter( ({id}) => checkedItems.includes(id) );
    setSelectedItems(filtered);
  }
   

  useEffect(() => {
    setIsLoading(true);
    Requests.getImages()
      .then(res => {
        setItems(res);
        setIsLoading(false)
      })
  }, [])
 

  return (
    <div className="App">
      <Header checkedItems={checkedItems} filterItems={filterItems}/>
      <Routes>
        <Route path="/" element={<ImageList 
                isLoading={isLoading} 
                items={items} 
                memoizedAddHandler={memoizedAddHandler}
                memoizedRemoveHandler={memoizedRemoveHandler}
              />}  
        />
        <Route path=":itemId" element={<ItemInfo />} />
        <Route path="selected" element={<SelectedItems 
                selectedItems={selectedItems} 
                setcheckedItems={setcheckedItems}
                memoizedAddHandler={memoizedAddHandler}
                memoizedRemoveHandler={memoizedRemoveHandler}
                checkedItems={checkedItems}
              />} 
        />
        <Route path='*' element={ <NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
