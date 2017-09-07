import React from 'react';
import Main from './Main';

const Home = ({ route }) => (
  <div>
    <h2>Home</h2>
  </div>
)

const Products = ({ route }) => (
  <div>
    <h2>Products</h2>
  </div>
)

const routes = [
    {
	  	component: Main,
	    routes: [
	      { 
	      	path: '/',
	        exact: true,
	        component: Home
	      },
	      {
	      	path: '/products',
	        component: Products
	      }
	    ]
    }
]

export default routes;