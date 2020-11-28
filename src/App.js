import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Authentication from './Components/Authentication/Authentication';
import AuthContext from './Components/Authentication/AuthFunctions';
import DashBoard from './Components/DashBoardContainer/DashBoard/DashBoard';
import FoodItem from './Components/HomeContainer/FoodItem/FoodItem';
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';
import Order from './Components/OrderContainer/Order/Order';
import { fetchAllProduct } from './Redux/Action/FoodsDataAction';


const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAllProduct())
}, [dispatch])

  return (
    <>
      <AuthContext>
        <Navbar />
        {/* <DashBoard /> */}
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Authentication />
          </Route>
          <Route path='/food/:foodId'>
            <FoodItem />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </AuthContext>
    </>
  );
};



export default App;