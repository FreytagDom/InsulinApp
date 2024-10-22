// import { Route, Redirect } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated, isLoading } = useAuth0();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoading ? (
//           <div>Loading...</div> // optional: eine Ladeanzeige hinzufügen
//         ) : isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/" />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;


import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
