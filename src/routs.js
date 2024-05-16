import React from "react"
import { BrowserRouter as Router, switch, Route} from "react-router-dom";
import Home from "./conteiners/Home"
import Users from "./conteiners/Users"
"
function Router(){

    return(
    <Router>
        <switch>
         <Route exact path="/" Component={Home}/>
         <Route exact path="/usuarios" Component={Users} />
         </switch>
    </Router>

    )

}

export default Router