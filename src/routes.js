import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Pages/Home";
import {NavBar} from "./Pages/Components/navBar";

export function Routes() {
    return (
        <Router>
            <div className={'container'}>
                <div className={'content'}>
                    <NavBar/>
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}