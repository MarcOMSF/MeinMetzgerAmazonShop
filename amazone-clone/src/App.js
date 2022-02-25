// ZUM STARTEN DER ANWENDUNG JETZT STATT "npm start" (http://localhost:3000/checkout), IMMER "npm run build",
// WEIL WIR JETZT ONLINE UNTERWEGS SIND! (amazon-firebase/ https://challange-37cd7.web.app/)
// - VORHER HATTEN WIR DEN BEFEHL "firebase deploy" AUSGEFÜHRT (SOLLTE NICHT MEHR NÖTIG SEIN!)

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch , Route }
from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import Payment from './Payment';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe
//pk = public key von stripe.com
("pk_test_51KTK7GIoLSkvpK6F8g0BqrmhVLTiTK03iMi1PdnSK5npPwgINbEoBqEZaosSJESmkuchP19uTnXBcvchjlBrtzuX00GsJJjode");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will  only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
        type: 'SET_USER',
        user: null
      })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
          <Login/> 
        </Route>
        <Route path="/checkout">
        <Header />
        <Checkout />
          </Route>
          <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch >
      </div>
    </Router>
  );
}

export default App;  

// next, styling the payment page Tutorial 5:35
// next, "Stripe-Plattform" (stripe.com/de) verwenden, um Zahlungen abzuwickeln Tutorial 5:54 
// next, connect the "form" with stripe (form onSubmit={}) Tutorial 6:00
// next, stripeAPI succeeded,processing,error & axios-stuff Tutorial 6:31

// der amazone clone full stack kurs: https://www.youtube.com/watch?v=RDV3Z1KCBvo&list=PLQlxwYjVHwUWqYQsKXqBbVQOu9Oa8SIrY&index=22&t=29s

// Alles (database, deploy, authentification usw. mit Firebase!) 