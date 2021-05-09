import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Details from "./pages/detail";
import Navbare from "./pages/components/navbar";

function App() {
  return (
    <div className="App">
      <Navbare></Navbare>
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route paht="/details" component={Details} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
