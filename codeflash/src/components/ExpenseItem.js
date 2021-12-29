import './ExpenseItem.css' 

function ExpenseItem(){
    let title = "Car Insurance";
    return (
        <div className='expense-item'>
            <div>March 12 2021</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>$200</div>
            </div>
        </div>
    );
}
export default ExpenseItem;