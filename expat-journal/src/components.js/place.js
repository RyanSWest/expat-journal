import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import Places from "./places";


const Place = props => {
    const id = props.match.params.id;
    const [placeData, setPlaceData]= useState({})
     
    const uid = localStorage.getItem('USERID')
    // console.log("UID", localStorage.getItem(Username))
    console.log("ID",uid)
    const[story, setStory]= useState({
        review: '',
        place_id: id,
        user_id: parseInt (uid),
        story_photo_url: " "
}
    )

    const [edit,setEdit]= useState( {
        review: '',
        place_id: id,
        user_id: parseInt (uid),


    })

    const [editBox, setEditBox]= useState(false)

    const [stories, setStories]=useState([])

    const handleInput = (e) => {
        e.preventDefault()
        setStory({
          ...story,
          [e.target.name]: e.target.value,
        });
      };
      
      console.log("STORIES", stories)
      const deletePlace= (e)=> {
        e.preventDefault();
        axios.delete(`https://bw-expat-journal2.herokuapp.com/api/places/${id}`)
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))

    }
    const addStory=(e)=> {
        e.preventDefault()
        axios.post(`https://bw-expat-journal2.herokuapp.com/api/places/${id}/stories`, story)

         .then(res=>console.log(res.data))
         .catch(err=> console.log(err))
    }
    const editStory = (e)=> {
        e.preventDefault()
        axios.put(`https://bw-expat-journal2.herokuapp.com/api/places/${id}/stories/11773`,edit)
        .then(res => console.log( "PUT",res.data))
        .catch(err=> console.log(err))
    }

    useEffect(()=> {
        axios.get(`https://bw-expat-journal2.herokuapp.com/api/places/${id}/stories`)
        .then(res=> setStories(res.data))
        .catch(err => console.log(err))
    },[stories.length])


    useEffect(()=> {
        axios.get(`https://bw-expat-journal2.herokuapp.com/api/places/${id}`)
         // .then(res=> console.log ("RES PLACE", res.data))
        .then(res=> setPlaceData(res.data))
        .catch(err => console.log(err))
    }, [id])
    if(!placeData.id)return <div>Loading ..</div>
 
    return (
        <div className = 'Place'>
            <h1>Place</h1>
            <h1>{placeData.city}</h1>
            <h1>{placeData.country}</h1>
            <img src = {placeData.photo_url}/>
 
 

             
            <form type = "submit" onSubmit= {addStory}>
                <textarea
                rows = '4'
                cols = '50'
                type = "text"
                name = "story"
                 value = {story.review}
                 placeholder ="story"
                //  onChange={handleInput}
                onChange={e=> setStory({...story, review:e.target.value})}
                 
                 />

 
                 <input 
                  type = "text"
                  name= "photo_url"
                  value = {story.photo_url}
                  onChange = {e => setStory({...story, story_photo_url:e.target.value})}
                  />
                 <button onClick ={deletePlace}>X</button>
                 <button type="submit">Enter</button>
            </form>
             
 
 <div>
     <h1>Stories</h1>
     {stories.map (s => {
         return(
                 <div className = 'story' key = {s.id}> 
                 
                <p>{s.review}</p>
                <img src = {s.story_photo_url}/>
                <p>{s.id}</p>
                <Link to ={`${id}/stories/${s.id}`}>Edit</Link>
                 

                
                <form type = 'submit'  onSubmit= {editStory}>  
                <textarea
                rows = '4'
                cols = '50'
                type = "text"
                name = "story"
                 value = {edit.review}
                 placeholder ="edit-story"
                 onChange={e=> setEdit({...edit, review:e.target.value})}
                 
                 />
                 <button type = 'submit'>Enter</button>
                 </form>
                </div>)
            })}
 </div>


        </div>
        
    )

}
export default Place