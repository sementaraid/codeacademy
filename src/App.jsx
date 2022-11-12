import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader  from "./components/loader";
import "./app.css";

const Home = lazy(() => import("./pages/home"));
const Checkout = lazy(() => import("./pages/checkout"));
const CodeMirror = lazy(() => import("./pages/code-mirror"));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path={"/code-mirror"} component={CodeMirror}/>
          <Route path={"/checkout"} component={Checkout}/>
          <Route path={"/"} component={Home}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
