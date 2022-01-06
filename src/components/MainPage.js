import React from "react"
import {Carousel} from "react-bootstrap"

function MainPage(props){

    return(
        <Carousel variant="white">
            {props.list.map(x =>{
          return(
            <Carousel.Item interval={2500}>

                <img 
                    className="d-block cimages"
                    src ={`https://storage.googleapis.com/mp2k-images/images/c${x.img}.jpg`}
                    alt={x.title}/>

                 <Carousel.Caption className="caption">
                    <h3>{x.title}</h3>
                </Carousel.Caption>

            </Carousel.Item>
  
          )
      })}

        </Carousel>
    
    )

}


export default MainPage