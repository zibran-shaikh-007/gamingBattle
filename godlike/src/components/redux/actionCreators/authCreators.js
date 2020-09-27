import axios from "axios";
import {  NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export const postAuth =(userData)=> async dispatch =>{
    await axios.post('https://api.thegamingbattle.com/login',userData)
            .then(res => {
                console.log("res login", res.data.login)
                localStorage.setItem("User", JSON.stringify(res.data.login));
               dispatch({
                   type:"SET_LOGIN",
                   payload:res.data.login
               })
                NotificationManager.success(res.data.msg)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
           
}