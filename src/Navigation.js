import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import Dashboard from "Screens/Dashboard";
import Displaycomments from "Screens/Displaycomments/Displaycomments";


/**
 * Display if route is not exists
*/
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}


/**
 * Common private route
*/
// function PrivateRoute({ children, ...rest }) {
//   const hospitalId = localStorage.getItem(localVariable.HOSPITALID)
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         hospitalId ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/",
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }


/**
 * Login private route
*/
// function LoginRoute({ children, ...rest }) {
//   const hospitalId = localStorage.getItem(localVariable.HOSPITALID)
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         hospitalId ? (
//           <Redirect
//             to={{
//               pathname: "/dashboard",
//               state: { from: location }
//             }}
//           />
//         ) : (
//             children
//           )
//       }
//     />
//   );
// }

/**
 * Define application routes
*/
export default function Navigation(props) {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/comments/:id" component={Displaycomments} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}