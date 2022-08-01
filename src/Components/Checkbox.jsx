import {memo, useEffect, useState} from 'react';



const Checkbox = ({memoizedAddHandler, memoizedRemoveHandler, checkedItems, id}) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
      if(checkedItems && checkedItems.includes(id)) setChecked(!checked)
    }, [])


    const handleChange = (e) => {
      setChecked(!checked);
      if(!checked) memoizedAddHandler(+e.target.value);
      if(checked) memoizedRemoveHandler(+e.target.value);
    };
  
    return (
        <div className="checkBox">
            <label>
                <input type="checkbox"
                checked={checked}
                onChange={handleChange} 
                value={id}/>
                Select this image
            </label>
        </div>
    );
};

export default memo(Checkbox);