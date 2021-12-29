import ExpenseItem from "./components/ExpenseItem";

function App(){
    let expenseDate = new Date();
    let expenseTitle = "School Fee";
    let expenseAmount = "300$";
    return (
        <div>
            <h1>Lets get started</h1>
            <ExpenseItem
                date={expenseDate} 
                title={expenseTitle}
                amount={expenseAmount}
            />
        </div>
    );
}
export default App;