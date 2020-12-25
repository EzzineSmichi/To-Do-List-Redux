import react from 'react'
import MainToDo from './component/Main'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store'


function App() {

    return (
		<Provider store = {store}>
			<div className="App">
				<MainToDo />
			</div>
		</Provider>
    );
}

export default App;
