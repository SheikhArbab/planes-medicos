import React from 'react';
import * as L from "./layouts/index"
import * as R from "react-router-dom";
import * as P from './pages/index';

const App = () => {

  const router = R.createBrowserRouter(
    R.createRoutesFromElements(
        //RootLayout start
        <R.Route path='/' element={<L.RootLayout />}>
            <R.Route index element={<P.LandingPage  />} /> 
        </R.Route>
        //  RootLayout end
    )
);

  return (
    <R.RouterProvider
    router={router} /> 
  )
}

export default App