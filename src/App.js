import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PageWrapper from './pages/PageWrapper'
import Home from './pages/Home'
import Patrimone from './pages/Patrimoine'
import StreetArt from './pages/StreetArt'
import Culture from './pages/Cuture'



import Msaken from './components/patrimoine/Msaken';
import Mornag from './components/patrimoine/Mornag';
import Klaa from './components/patrimoine/Klaa';


function App() {

  const [ locationKeys, setLocationKeys ] = useState([])
  const history = useHistory()
  
  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }
  
      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys ]) => keys)
  
          // Handle forward event
         window.location.reload()
         
        } else {
          setLocationKeys((keys) => [ location.key, ...keys ])
  
          // Handle back event
 window.location.reload()
        }
      }
    })
  }, [ locationKeys, ])
  
  return (
    <div>
      <Router>

        <PageWrapper>
          <Route exact={true} path = "/"  component = {Home}/>
          <Route exact={true} path = "/patrimoine"  component = {Patrimone}/>
          <Route path = "/streetart" component = {StreetArt}/>
          <Route path = "/culture" component = {Culture} />

          <Route   path="/msaken" component={Msaken}/>
          <Route   path="/mornag" component={Mornag}/>
          <Route path="/kalaa" component={Klaa}/>
        </PageWrapper>
      </Router>
      
    </div>
  );
}

export default App;
