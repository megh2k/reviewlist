import React from "react"
<<<<<<< HEAD
// import { Button } from 'react-bootstrap'
=======
>>>>>>> b60155892570f3b8b478af878b0d285715209a54

export default function Home(props){

    let [hide, setHide] = React.useState(false);

    function changeHide(){
        setHide(!hide)
    }

    return(
        
            <div className="card">

            <ul className="list-group ">

                <li className='li'>
                {props.title && <h2 className="card-title">{props.title} 
                <i onClick = {changeHide}
                className="fas fa-sort-down" style={{padding: "3px" }}></i>
                <footer className="card-subtitle">{props.rating}
                <i class="far fa-star fa-xs" style={{padding: "2px"}}></i>
                </footer>
                </h2>  
                }
                 </li>
                {hide ? 
                <div className="alignimg">
                    

<<<<<<< HEAD
                    <li className='li'><img className = "images" src = {`../public/images/${props.img}.jpg` } 
                    alt={props.title}/></li>
=======
                    <li className='li'><img className = "images" src = {`../images/${props.img}.jpg` } 
                    alt="this is not working"/></li>
>>>>>>> b60155892570f3b8b478af878b0d285715209a54

                    <li className="li description">
                        <div>

                        <div>
                            {props.genre.map(x => 
                            <button type="button" className="btn btn-light rounded-pill">{x}</button>
                            )}
                        </div>

                        <h5>{props.seasons}</h5>
                        <p>{props.description}</p>

                        </div>
                        
                    </li> 
                </div>: null}  

            </ul>
    
        </div>

        
    )
}

