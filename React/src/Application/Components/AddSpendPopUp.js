

export default function AddSpendPopUp(onOpen,onClose) {
    if(onOpen){
        return(<div className="addspend-pop-up">
            <div className="popup-add-title">Add a Spent</div>
            <input type={'number'} placeholder='Amount' />
        </div>)
    }
    return(
        <div></div>
    )
}