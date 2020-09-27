import React, { Fragment, Component } from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer } from 'react-notifications';
import {postAuth} from "../redux/actionCreators/authCreators"



class Login extends Component {

    state = {
        googleId: "",
        imageUrl: "",
        email: "",
        name: ""
    }

    responseGoogle =  (response) => {

        /* console.log(response.profileObj); */
        let googleId = response.profileObj.googleId
        let imageUrl = response.profileObj.imageUrl
        let email = response.profileObj.email
        let name = response.profileObj.name
        const userData = {googleId,imageUrl,email,name}
        /* await axios.post('https://api.thegamingbattle.com/login',userData)
            .then(res => {
                console.log("res login", res.data.login)
                localStorage.setItem("User", JSON.stringify(res.data.login));
                this.props.setLogin(JSON.stringify(res.data.login));
                NotificationManager.success(res.data.msg)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
            */
        this.props.postAuth(userData)

    };
   

   
  
render(){
    console.log("google id", this.state.googleId)
    return (
        <Fragment>
            <div className="container mx-auto "><NotificationContainer /></div> 
            <div className="modal nk-modal fade login " id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-md">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h4 className="modal-title nk-title" id="mySmallModalLabel">Welcome!</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="ion-android-close" />
                            </button>
                        </div>
                        <div className="modal-body m-auto">
                            <GoogleLogin
                                clientId="67567539338-u5ijr70c9487nsfd73psttqpjt5b1etn.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={"single_host_origin"}
                                className="btn gbtn"
                                textColor="green"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}
}

/* const mapDispatchToProps = dispatch => {
    return {
        setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
    };
}; */
export default connect(null, {postAuth})(Login)
