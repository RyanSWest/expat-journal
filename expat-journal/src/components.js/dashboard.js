import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './nav';

const Dashboard = ()=> {
    const userId = localStorage.getItem('USERID')

    const[place, setPlace]= useState({
        city: '',
        country:'',
        user_id:userId
    })

 
    const handleInput = (e)=> {
        setPlace({...place,
        [e.target.name]: e.target.value})
    }

    const onSubmit= (e)=> {
        e.preventDefault();
        axios.post("https://bw-expat-journal2.herokuapp.com/api/places",place)
        .then((res)=> {
            console.log("PLACE REZ", res.data.json)
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Nav/>

            <form className = 'place-form'
              type = 'submit'
              onSubmit=  {onSubmit}>

                <input
                type = 'text'
                name = "city"
                onChange = {handleInput}
                value = {place.city} 
                placeholder = 'city'
                
                
                
                />
                <input
                type = 'text'
                name = "country"
                onChange = {handleInput}
                value = {place.country} 
                placeholder = 'country'
                
                
                
                />
                 <input
                type = 'text'
                name = "photo_url"
                onChange = {handleInput}
                value = {place.photo_url} 
                placeholder = 'photo_url'
                
                
                
                />

                <button type = 'submit'>Enter</button>
              



            </form>





        </div>
    )




}

export default Dashboard