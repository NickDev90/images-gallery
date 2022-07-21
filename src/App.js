import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ImageList from './Components/ImageList';
import ItemInfo from './Components/ItemInfo';
import { Requests } from './API/requests';
import NotFound from './Components/NotFound';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);

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
      <Header checkedCount={checkedCount}/>
      <Routes>
        <Route path="/" element={
          <ImageList 
            isLoading={isLoading} 
            items={items} 
            checkedCount={checkedCount}
            setCheckedCount={setCheckedCount}
          />} 
        />
        <Route path=":itemId" element={<ItemInfo />} />
        <Route path='*' element={ <NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
