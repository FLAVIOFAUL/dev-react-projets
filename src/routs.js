import React from "react"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./conteiners/Home"
import Users from "./conteiners/Users"

function MyRouter(){

    return(
    <Router>
        <Routes>
         <Route  path="/" element={<Home />}/>
         <Route  path="/usuarios" elementent={<Users />} />
         </Routes>
    </Router>

    )

}

export default MyRouter;