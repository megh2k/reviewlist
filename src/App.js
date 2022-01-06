import './App.css';
import Navbar from "./components/Navbar"
import List from "./components/List"
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import { Button } from 'react-bootstrap'


function App() {

    List.sort((a, b) => {
      let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });

  

  

  let listHome = List.sort().map( item =>
    {
        return <Home 
        key = {item.title}
        {...item}/>
    })

    let listWatching = List.filter(x => x.watching === true).map( filtered =>{
      console.log(filtered)
      return <Home
      {...filtered} />
    })

    let listFavourite = List.filter(x => x.favourites === true).map( filtered =>{
      console.log(filtered)
      return <Home
      {...filtered} />
    })

  return (
    <Router>
      <div>
        <Navbar 
        title = "TV Series"/>
        {/* <div>
          <h5 className="sort">Sort By:
          <Button variant="light" className='sorting'>Highest Rated</Button>
          <Button variant="light" className='sorting'>Alphabetically</Button>

          </h5>
        </div> */}

        <div>
          <Switch>
          <Route exact path = "/reviewlist" >
            <h1 className='sort'>Hello there</h1>
            {/* nothing */}
            </Route>

            <Route path = "/reviewlist/home" >
              {listHome}
            </Route>

            <Route path = "/reviewlist/currently_watching" >
              {listWatching}
            </Route>

            <Route path = "/reviewlist/favourites" >
              {listFavourite}
            </Route>
          </Switch>
        </div>



      </div>
    </Router>
    
  )
}

export default App;
