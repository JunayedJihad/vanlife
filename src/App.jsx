import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans,{loader as vansLoader} from "./pages/Vans";
import Vandetails,{loader as vanDetailsLoader} from "./pages/Vandetails";
import Layout from "./components/Layout";
import Income from './components/Income';
import Review from './components/Review';
import HostLayout from "./components/HostLayout";
import Dashboard from "./components/Dashboard";
import Myvans,{loader as myVansLoader} from "./components/Myvans";
import MyVanDetails,{loader as myVanDetailsLoader} from './pages/MyVanDetails';
import Pricing from './components/Pricing';
import Photos from './components/Photos';
import HostVanInfo from "./components/HostVanInfo";
import Error from "./pages/Error";
import Wrong from "./components/Wrong";
import Login from "./pages/Login";
import { requireAuth } from "./components/util";


const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about"  element={<About />} />
    <Route path="vans" loader={vansLoader} errorElement={<Wrong/>} element={<Vans />} />
    <Route path="vans/:id" loader={vanDetailsLoader} element={<Vandetails />} />
    <Route path="login"  element={<Login />} />
    <Route path="host"  element={<HostLayout />}>
      <Route index  loader={async ()=> await requireAuth()}  element={<Dashboard />} />
      <Route path="income"  loader={async ()=> await requireAuth()} element={<Income />} />
      <Route path="my-vans" loader={myVansLoader} element={<Myvans />} />
      <Route path="my-vans/:id" loader={myVanDetailsLoader} errorElement={<Wrong/>} element={<MyVanDetails />}>
        <Route index  loader={async ()=> await requireAuth()} element={<HostVanInfo />} />
        <Route path="pricing" loader={async ()=> await requireAuth()}  element={<Pricing />} />
        <Route path="photos" loader={async ()=> await requireAuth()}  element={<Photos />} />
      </Route>
      <Route path="review"  loader={async ()=> await requireAuth()} element={<Review />} />
    </Route>
    <Route path='*' element={<Error/>} />
  </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
