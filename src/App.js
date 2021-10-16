import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
	// palette: {
	// 	primary: {
	// 		main: '#fefefe',
	// 	},
	// },
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Notes />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
