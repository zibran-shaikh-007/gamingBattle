import axios from "axios";
import {  NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const postData = (data)=> async (dispatch)=>{
    await axios.post('https://api.thegamingbattle.com/registration', data)
    .then(res => {
        dispatch({
            type:"POST_DATA",
            payload:res.data.form
        })
        console.log("form data send succesfuly", res.data.form)
        NotificationManager.success(res.data.msg)
       /*  window.location.reload()
 */
    })
    .catch(err => {
        console.log(`err in sending form data ${err}`)
    })


}