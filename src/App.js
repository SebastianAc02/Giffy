

import './App.css';
import React from 'react';
import Detail from './pages/detail';
import { Link, Route } from 'wouter';
import Home from './pages/home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifContext';

function App() {



  // const HomePage = React.lazy(()=>import(./ home ))

  // <Suspense fallback={null}>  <Suspense>

  // replace component of home yo home page 



  return (
    <StaticContext.Provider 
    value={{    name : 'Sebas' ,
    programador : true}}
   >

    <div className="App">
      <header className="App-content">

      <Link to='/' >
        <h1> App</h1>
        </Link>

      <GifsContextProvider>
      <Route path='/gif/:id' component={Detail}/>
     
      <Route path="/search/:keyword" component={SearchResults}>
      </Route>

      <Route path='/' component={Home} />
      <Route path='/Home' component={Home} />

      <Route component={()=>
        <h1>404 error </h1> } path ="/404"/>



      </GifsContextProvider>
      </header>
    </div>

    </StaticContext.Provider>
  );
}

export default App;
