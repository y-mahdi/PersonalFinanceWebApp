import '../Style/application.css';
import creditcard from '../../Icons/creditcard.svg';
import plusicon from '../../Icons/plus.svg';
import AddSpendPopUp from './AddSpendPopUp';
import {useState,useEffect} from 'react';
export default function HeaderApp() {
    const [open, setOpen] = useState(false);
    const closeAddPopUp=()=>{
        setOpen(false)
    }
    useEffect(()=>{
        console.log(open)
    },[open])
    return (
        <div>
            <div className="logo-panel-app">
                <img src={creditcard} alt="credit card" width="50px" />
            </div>
            <button className="btn-add-spent" onClick={()=>{
                setOpen(true)
            }}>
                <img src={plusicon} alt="plus icon" width="20px"/>
                Add a Spend
            </button>
            {AddSpendPopUp(open,closeAddPopUp)}
        </div>
    )
}   