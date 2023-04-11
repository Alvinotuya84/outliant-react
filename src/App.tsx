
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {  RouterProvider } from 'react-router-dom';

import { routes } from './constants';

function App() {
  return (
    <div className="App">
        <RouterProvider router={routes}  fallbackElement={<p>Loading...</p>}/>


    </div>
  )
}

export default App
