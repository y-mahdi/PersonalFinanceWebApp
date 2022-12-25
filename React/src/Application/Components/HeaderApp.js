import '../Style/application.css';
import creditcard from '../../Icons/creditcard.svg';
import plusicon from '../../Icons/plus.svg';
import AddSpendPopUp from './AddSpendPopUp';
import {useState} from 'react';
export default function HeaderApp() {
    const [open, setOpen] = useState(true);
    const closeAddPopUp=()=>{
        setOpen(false)
    }
    return (
        <div>
            <div className="logo-panel-app">
                <img src={creditcard} alt="credit card" width="50px" />
            </div>
            <div className="btn-add-spent">
                <img src={plusicon} alt="plus icon" width="20px"/>
                Add a Spend
            </div>
            <AddSpendPopUp onOpen={open} onClose={closeAddPopUp} />
        </div>
    )
}