import React, {useState, useEffect}from 'react';
import axios from 'axios'
import Nav from './nav';
import {Link} from 'react-router-dom';
import TestPlace from './testPlace'

const Places = (props)=> {
    console.log("PROPS", props)
    const id = props.match.params.id;
    console.log("ID", id)
    const [places, setPlaces]= useState([])
    const [ story, setStory] = useState ({text: ''})
    // const [editing, setEditing]= useState(false)
    const deletePlace= (e)=> {
        e.preventDefault();
        axios.delete(`https://bw-expat-journal2.herokuapp.com/api/places/${id}`)
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))

    }
    
    useEffect(()=> {
        axios.get('https://bw-expat-journal2.herokuapp.com/api/places/all')
        // .then(res=> console.log(res.data))
        
        .then (res =>setPlaces(res.data))




    }, [] )

     console.log("PLACES", places)
     const uid = localStorage.getItem('USERID')
     console.log(uid)

    return(
        <div>
             <Nav/>
             <h1>Places</h1>
           
              

             {places.map (p => {
                return(

                    <div className = 'place' key = {p.id}>
                        <h3>{p.city}</h3>
                         <h3>{p.country}</h3>
                        <img src = {p.photo_url}></img>
                        <h4>{p.id}</h4>
                        <button onClick ={deletePlace 
                        }>x</button>
                         <Link to ={`/places/${p.id}`}>{p.city} -{p.country}</Link>
                          

                         
                        
                        
                        
                        
                        
                         </div>
                )
            })} 
        </div>
    )
}

export default Places