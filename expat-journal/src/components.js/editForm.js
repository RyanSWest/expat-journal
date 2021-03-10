import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import axios from 'axios'


const EditForm = (props)=> {
    const id = props.match.params.id
    
    const[place, setPlace]= useState({id: ''})
    const uid = localStorage.getItem('USERID')
    

    // console.log("PLACE", place)

    useEffect(()=> {
        axios.get(`https://bw-expat-journal2.herokuapp.com/api/places/ ${place}/stories/${id}`)
        .then(res => setPlace({id:res.data.place_id} ))
        .catch(err=> console.log(err))




    })
    const [edit, setEdit]= useState({
        review: "",
        place_id: parseInt (id),
        // user_id : parseInt (uid)
        
    })

    const [story, setStory]= useState({
        review : "",
        place_id: parseInt (id),
        user_id: parseInt (uid)
    })


    useEffect(()=> {
        axios.get(`https://bw-expat-journal2.herokuapp.com/api/places/${place}/stories/${id}`)
        .then(res=> setStory(res.data))
        .catch(err=> console.log(err))
    },[])

    // {if(!place || !id) {
    //     return(<div>Loading...</div>)
    // }}
    const editStory = (e)=> {
        e.preventDefault()
        // axios.put(`https://bw-expat-journal2.herokuapp.com/api/places/59/stories/11772`, edit)
        axios.put(`https://bw-expat-journal2.herokuapp.com/api/places/${place.id}/stories/${id}`,edit.review)
        .then(res=> console.log("PUT",res.data))
        .catch(err => console.log(err.message))
    }
    const deleteStory= (e)=> {
        e.preventDefault()
        axios.delete(`https://bw-expat-journal2.herokuapp.com/api/places/${place}/stories/${id}`)
        .then( res =>console.log("DELETE",res.data))
        .catch(err => console.log(err))
        props.history.push(`/places/${place.id}`)
    }
    
 
    return (
    <div>


<h1>Edit</h1>
        <p>{story.review}</p>
        <p>{edit.review}</p>
        <button onClick = {deleteStory}>DELETE</button>

         
        <form type = 'submit'  onSubmit= {editStory}>  
                <textarea
                rows = '4'
                cols = '50'
                type = "text"
                name = "edit"
                 value = {edit.review}
                 placeholder ="edit-story"
                 onChange={e=> setEdit({...edit, review:e.target.value})}
                 
                 />
                 <button type = 'submit'>Enter</button>
                 </form>
    </div>
        

    )





}





export default EditForm