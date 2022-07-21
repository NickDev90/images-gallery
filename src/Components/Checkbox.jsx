import {useState} from 'react';



const Checkbox = ({checkedCount, setCheckedCount}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
      if(!checked) setCheckedCount(checkedCount + 1);
      if(checked) setCheckedCount(checkedCount -1);
    };

  
    return (
        <div className="checkBox">
            <label>
                <input type="checkbox"
                checked={checked}
                onChange={handleChange} />
                Select this image
            </label>
        </div>
    );
};

export default Checkbox;