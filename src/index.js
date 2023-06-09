import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/AppScreen/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './components/HomeScreen/HomeScreen'
import DetailScreen from './components/DetailsScreen/DetailScreen'
import AboutMeScreen from './components/AboutMeScreen/AboutMeScreen'
import FormScreen from './components/FormScreen/FormScreen'
import store from './Redux/store'
import { Provider } from 'react-redux'
import FavoritesScreen from "./components/FavoritesScreen/favoritesScreen"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormScreen />} />
        <Route path='/FavoritesScreen' element={<FavoritesScreen/>} />
        <Route path='/HomeScreen' element={<HomeScreen />} />
        <Route path='/App' element={<App />} />
        <Route path="/DetailScreen/:id" element={<DetailScreen />} />
        <Route path="/AboutMeScreen" element={<AboutMeScreen />} />
      </Routes>
    </BrowserRouter>
  </Provider>

)






