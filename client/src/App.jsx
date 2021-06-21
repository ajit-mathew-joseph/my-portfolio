import NavBar from "./Components/NavBar/NavBar";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MainPage from "./MainPage";

function App() {

  document.title="Welcome to my site!"

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          path="/"
          render={(routeProps) => {
            return <MainPage {...routeProps} />;
          }}
        />
      </Router>
    </div>
  );
}

export default App;
