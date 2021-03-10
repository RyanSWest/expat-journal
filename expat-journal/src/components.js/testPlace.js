import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import Places from "./places";


const TestPlace = props => {
    // const id = props.match.params.id;
    const [placeData, setPlaceData]= useState({})
    // console.log("PROPS", props)
    const[story, setStory]= useState({
        review: "",
        place_id: 2
}
    )

    const handleInput = (e) => {
        e.preventDefault()
        setStory({
          ...story,
          [e.target.name]: e.target.value,
        });
      };
      
    
    const addStory=(e)=> {
        e.preventDefault()
        // axios.post(`https://bw-expat-journal2.herokuapp.com/api/places/${id}/stories`, story )

        axios.post(`https://localhost:3300/api/places/2/stories`,story.review)
        .then(res=>console.log(res.data))
    }


    useEffect(()=> {
        axios.get(`http://localhost:3300/api/places/2`)
        //  .then(res=> console.log ("RES PLACE", res.data))
        .then(res=> setPlaceData(res.data))
        .catch(err => console.log(err))
    })
    // if(!placeData.id)return <div>Loading ..</div>
 
    return (
        <div className = 'Place'>
            <h1>TEST PLACE</h1>
            <h1>Place</h1>
            <h1>{placeData.city}</h1>
            <h1>{placeData.country}</h1>
            <img src = {placeData.photo_url}/>

             
            <form type = "submit" onSubmit= {addStory}>
                <textarea
                type = "text"
                name = "story"
                 value = {story.text}
                 placeholder ="story"
                 onChange={handleInput}
                 
                 />
                 <button type="submit">Enter</button>
            </form>
 



        </div>
    )

}
export default TestPlace