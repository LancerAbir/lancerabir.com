import "../src/assets/css/maicons.css";
import "../src/assets/vendor/animate/animate.css";
import "../src/assets/css/mobster.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home1 from "./components/Pages/Home1";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import NotFound from "./components/Pages/NotFound";
import Npm from "./components/Pages/Npm";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Home1} />
               <Route exact path="/about" component={About} />
               <Route exact path="/blog" component={Blog} />
               <Route exact path="/contact" component={Contact} />
               <Route exact path="/npm" component={Npm} />
               <Route path="*" component={NotFound} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
