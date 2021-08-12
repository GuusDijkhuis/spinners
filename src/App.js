import './App.css';

import WheelSpinnerForm from './components/WheelSpinnerForm';
import WheelSpinnerList from './components/WheelSpinnerList';
import WheelSpinner from './components/WheelSpinner';
import Nav from './components/Nav';

import {
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<div>
			<Nav />
			<Switch className="App">
				<Route exact path="/add-spinner" component={ () => <WheelSpinnerForm /> } />
				<Route exact path="/spinners/:id" component={ () => <WheelSpinner />} />
				<Route exact path="/" component={ () => <WheelSpinnerList /> } />
				<Route path="/*" component={ () => <WheelSpinnerList /> } />
			</Switch>
		</div>
	);
}

export default App;
