import "./App.css";
import SubComponent from "./components/SubComponent"

function App(){
    return (
        <div className="app-container">
            <SubComponent/>
            <h3>First component</h3>
            <p>Hello word!</p>
        </div>
    );
}
export default App;