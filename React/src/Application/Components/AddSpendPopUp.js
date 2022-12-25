

export default function AddSpendPopUp(onOpen,onClose) {
    if(onOpen){
        return(<div className="addspend-pop-up">
                    <div className="popup-add-title">Add a Spent</div>
                    <input min={1} type={'number'} placeholder='Amount' /><br />
                    <select>
                        <option value={'food'}>Food</option>
                        <option value={'entertainement'}>Entertainement</option>
                        <option value={'housing'}>Housing</option>
                        <option value={'education'}>Education</option>
                        <option value={'travel'}>Travel</option>
                        <option value={'transport'}>Transport</option>
                        <option value={'others'}>Others</option>
                    </select><br/>
                    <button>Add</button><br />
                    <button onClick={()=>{
                        onClose()
                    }}>Cancel</button>
                 </div>)
    }
    else{
        return(
            <div></div>
        )
    }
}