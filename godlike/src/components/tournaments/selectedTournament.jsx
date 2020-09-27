import React, { Component, Fragment } from 'react';
import "bs-stepper/dist/css/bs-stepper.min.css";
import DateTimeSelection from "./date&timeSelection"
import Stepper from "bs-stepper";
import "./Reg.css";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import {connect} from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {postData} from "../redux/actionCreators/registerCreator"

class SelectedTournament extends Component {
    componentDidMount() {

        this.stepper = new Stepper(document.querySelector("#stepper1"), {
            linear: false,
            animation: true,
        });


    }
    state = {
        tournaments: [],
        youtube: '',
        name: "",
        age: "",
        mobile: "",
        email: "",
        address: "",
        id1: "",
        name1: "",
        id2: "",
        name2: "",
        id3: "",
        name3: "",
        id4: "",
        name4: "",
        id5: "",
        name5: "",
        id6: "",
        name6: "",
        selectedDate: '',
        selectedTime: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value],
        });
    };
    handleFile = e => {
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    }
   /*  componentWillMount = async () => {
        await axios.get(`https://api.thegamingbattle.com/tournament`)
            .then(res => {

                const tournaments = [...this.state.tournaments]
                this.setState({ tournaments: res.data.tournaments })
            })

            .catch(err => {
                console.log(`err in getting tournemants ${err}`)
            })
    } */

    onSubmit =  (e) => {
        console.log("click")
        const { youtube, name, age, mobile, email, address, id1, name1, id2, name2, id3, name3, id4, name4, id5, name5, id6, name6, selectedDate, selectedTime } = this.state;

        e.preventDefault();
        let fd = new FormData();
        fd.append('youtube', youtube)
        fd.append('name', name)
        fd.append('age', age)
        fd.append('mobile', mobile)
        fd.append('email', email)
        fd.append('address', address)
        fd.append('playerId1', id1)
        fd.append('playerName1', name1)
        fd.append('playerId2', id2)
        fd.append('playerName2', name2)
        fd.append('playerId3', id3)
        fd.append('playerName3', name3)
        fd.append('playerId4', id4)
        fd.append('playerName4', name4)
        fd.append('playerId5', id5)
        fd.append('playerName5', name5)
        fd.append('playerId6', id6)
        fd.append('playerName6', name6)
        fd.append('selectedDate', selectedDate)
        fd.append("selectedTime", selectedTime)


        console.log("data", fd)

       /*  await axios.post('https://api.thegamingbattle.com/registration', fd)
            .then(res => {
                console.log("form data send succesfuly", res.data.form)
                NotificationManager.success(res.data.msg)
                window.location.reload()

            })
            .catch(err => {
                console.log(`err in sending form data ${err}`)
            }) */
            this.props.postData(fd)
    }

    onDate = date => {
        /*  console.log("ondates", date) */

        this.setState({ [this.state.selectedDate]: date })
    }
    onTime = time => {
        /*  console.log("ontime", time) */

        this.setState({ [this.state.selectedTime]: time })

    }



    render() {
        const {  selectedDate, selectedTime } = this.state;
        const {tournaments} = this.props
        /* console.log("tournaments", tournaments) */
        /* console.log("selected date", selectedDate, "selected Time", selectedTime) */
        const matchesToBePlayed = tournaments.map(tour => { return (tour.totalParticipant / 20) })
        /*  console.log('matchesToBePlayed', matchesToBePlayed) */
        const startTime = tournaments.map(tour => { return (new Date(tour.startTime).getTime()/* .toString() */) })
        const startTimeSlot = tournaments.map(tour => { return (new Date(tour.startTime)/* .toString() */) })
        const endTime = tournaments.map(tour => { return (new Date(tour.endTime).getTime()/* .toString() */) })
        const endtimeSlot = tournaments.map(tour => { return (new Date(tour.endTime)/* .toString() */) })
        const startDate = tournaments.map(tour => { return (new Date(tour.startDate)/* .toString() */) })
        const start = startDate[0]
       /*  console.log("startDate", start ) */

        const sTime = startTimeSlot[0]
        const eTime = endtimeSlot[0]

        /*  console.log("startTime", startTime)
         console.log("endTime", endTime)
         console.log("endtimeslot", endtimeSlot) */
        const s = startTime;
        const e = endTime
        let d = e.map((e, index) => { return e - s[index] });
        
        var diff =d.map((d, index) => { return d/1000 });
       /*  console.log("diff", diff) */
        let hours =diff.map((d, index) => { return d/= (60 * 60)});
       /*  console.log("hours", hours)  */
        let hourDiff =hours.map(hours=>{return Math.abs(Math.round(hours))});
       /*  console.log("hourdiff", hourDiff) */
        const match = matchesToBePlayed
        /* console.log("match", match) */
        const numberOfDaysMatchesToBePlayed = match.map((match, index) => { return match/hourDiff[index] });
       /*  console.log("no of days matches played", numberOfDaysMatchesToBePlayed) */

        const preEndDate = tournaments.map(tour => { return (new Date(new Date(tour.startDate).setDate(new Date(tour.startDate).getDate() + 25 /* numberOfDaysMatchesToBePlayed */))) })
        const preEnd = preEndDate[0]
        /*  console.log("start date", startDate)
         console.log("prequalifier end date", preEndDate) */

        /* console.log(preEnd, "preened") */
        /*  const dayWhenPreWillEnd = startDate.setDate(numberOfDaysMatchesToBePlayed);
         console.log("day the pre will end", dayWhenPreWillEnd) */

        return (
            <Fragment>
                <div className="container mx-auto"><NotificationContainer /></div>
                <div className="modal nk-modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title nk-title" id="myLargeModalLabel">Register Yourself For Tournament.</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="ion-android-close" />
                                </button>
                            </div>
                            <div className="modal-body">

                                <div id="stepper1" className="bs-stepper ">
                                    <div className="bs-stepper-header">
                                        <div className="row">
                                            <div className="col-2 col-md-6 col-sm-6 col-xs-6" >
                                                <div className="step" data-target="#test-l-1">
                                                    <button className="step-trigger" disabled>
                                                        <span className="bs-stepper-circle">1</span>
                                                        <span className="bs-stepper-label">
                                                            Youtube Subscription
                                    </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-2 col-md-6 col-sm-6 col-xs-6">
                                                <div className="line"></div>
                                                <div className="step" data-target="#test-l-2">
                                                    <button className="step-trigger" disabled>
                                                        <span className="bs-stepper-circle">2</span>
                                                        <span className="bs-stepper-label">
                                                            Personal Information</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-2 col-md-6 col-sm-6 col-xs-6">
                                                <div className="line"></div>
                                                <div className="step" data-target="#test-l-3">
                                                    <button className="step-trigger" disabled>
                                                        <span className="bs-stepper-circle">3</span>
                                                        <span className="bs-stepper-label">
                                                            Game's Information
                                    </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-2 col-md-6 col-sm-6 col-xs-6">

                                                <div className="line"></div>
                                                <div className="step" data-target="#test-l-4">
                                                    <button className="step-trigger" disabled>
                                                        <span className="bs-stepper-circle">4</span>
                                                        <span className="bs-stepper-label">Date & Time Selection</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-stepper-content">
                                        <form /* onSubmit={this.onSubmit} */>
                                            <div
                                                id="test-l-1"
                                                className="content"
                                                style={{ color: "white" }}
                                            >
                                                <h3>Youtube channel subscription</h3>
                                                <div className="form-group">
                                                    <div className="form-row mt-4">
                                                        <div className="col-md-4">
                                                            <a
                                                                title="Subscribe"
                                                                target="_blank"
                                                                href="https://www.youtube.com/c/TheGamingBattles"
                                                            >
                                                                <img
                                                                    src="https://res.cloudinary.com/uploadfiles/image/upload/v1600266649/subscribe_3_zjl4gv.png"
                                                                    height="105px"
                                                                    width="140px"
                                                                    style={{
                                                                        borderRadius: "5%",

                                                                    }}
                                                                ></img>
                                                            </a>
                                                        </div>

                                                        <div className="col-md-8">
                                                            Disclaimer: Kindly subscribe to out
                                                            youtube channel and send us the
                                                            screenshot of the same below else your
                                                            registration for the tournament will
                                                            be cancelled.
                                        </div>

                                                    </div>

                                                    <div className="form-row mt-4">
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                type="file"
                                                                className="form-control-file"
                                                                id="exampleFormControlFile1"
                                                                required
                                                                name="youtube"
                                                                onChange={this.handleFile}
                                                                required
                                                            ></input>

                                                            <label
                                                                for="exampleFormControlFile1"
                                                            /* style={{ marginLeft: "-230px" }} */
                                                            >
                                                                Upload Screenshot of Subscription
                                          </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    className="btn"
                                                    type="button"
                                                    onClick={() => this.stepper.next()}
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: "#202020",
                                                        float: "right",
                                                    }}
                                                    disabled={
                                                        this.state.youtube
                                                            ? ""
                                                            : "disabled"
                                                    }
                                                >
                                                    Next
                                    </button>
                                            </div>
                                            <div
                                                id="test-l-2"
                                                className="content"
                                                style={{ color: "white" }}
                                            >
                                                <h3> Personal Information</h3>
                                                <div className="form-group">
                                                    <div className="form-row mt-4">
                                                        <div className="col-12 col-sm-6">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="Full Name"
                                                                name="name"
                                                                onChange={this.onChange}
                                                                value={this.state.name}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="Age"
                                                                name="age"
                                                                onChange={this.onChange}
                                                                value={this.state.age}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-row mt-4">
                                                        <div className="col-12 col-sm-6">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="Mobile Number"
                                                                name="mobile"
                                                                onChange={this.onChange}
                                                                value={this.state.mobile}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="email"
                                                                placeholder="Email"
                                                                name="email"
                                                                onChange={this.onChange}
                                                                value={this.state.email}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-row mt-4">
                                                        <div className="col">
                                                            <textarea
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="Address"
                                                                name="address"
                                                                onChange={this.onChange}
                                                                value={this.state.address}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                                <button
                                                    className="btn"
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: '#202020',
                                                        float: "left",
                                                    }}
                                                    type="button"
                                                    onClick={() => this.stepper.previous()}
                                                >
                                                    Prev
                                    </button>

                                                <button
                                                    className="btn "
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: "#202020",
                                                        float: "right",
                                                    }}
                                                    type="button"
                                                    disabled={
                                                        this.state.name.length &&
                                                            this.state.age.length &&
                                                            this.state.mobile.length &&
                                                            this.state.address.length &&
                                                            this.state.email.length
                                                            ? ""
                                                            : "disabled"
                                                    }
                                                    onClick={() => this.stepper.next()}
                                                >
                                                    Next
                                    </button>
                                            </div>
                                            <div
                                                id="test-l-3"
                                                className="content text-center"
                                                style={{
                                                    color: "white",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <h3>Game's Information</h3>
                                                <div className="form-group">
                                                    Player 1 IGL(IN Game Leader)
                                      <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="PUBG ID"
                                                                name="id1"
                                                                onChange={this.onChange}
                                                                value={this.state.id1}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="PUBG Name"
                                                                name="name1"
                                                                onChange={this.onChange}
                                                                value={this.state.name1}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                      Player 2
                                      <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="PUBG ID"
                                                                name="id2"
                                                                onChange={this.onChange}
                                                                value={this.state.id2}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="PUBG Name"
                                                                name="name2"
                                                                onChange={this.onChange}
                                                                value={this.state.name2}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                      Player 3
                                      <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="PUBG ID"
                                                                name="id3"
                                                                onChange={this.onChange}
                                                                value={this.state.id3}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="PUBG Name"
                                                                name="name3"
                                                                onChange={this.onChange}
                                                                value={this.state.name3}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                      Player 4
                                      <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="PUBG ID"
                                                                name="id4"
                                                                onChange={this.onChange}
                                                                value={this.state.id4}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="PUBG Name"
                                                                name="name4"
                                                                onChange={this.onChange}
                                                                value={this.state.name4}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                      Player 5 (Substitute)
                                      <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="PUBG ID"
                                                                name="id5"
                                                                onChange={this.onChange}
                                                                value={this.state.id5}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="PUBG Name"
                                                                name="name5"
                                                                onChange={this.onChange}
                                                                value={this.state.name5}
                                                            />
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                      Player 6 (Substitute)
                                      <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8 mt-4 mt-sm-0">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="number"
                                                                placeholder="PUBG ID"
                                                                name="id6"
                                                                onChange={this.onChange}
                                                                value={this.state.id6}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="form-row mt-4"
                                                        style={{ marginLeft: "23%" }}
                                                    >
                                                        <div className="col-12 col-sm-8">
                                                            <input
                                                                className="multisteps-form__input form-control"
                                                                type="text"
                                                                placeholder="PUBG Name"
                                                                name="name6"
                                                                onChange={this.onChange}
                                                                value={this.state.name6}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn"
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: "#202020",

                                                        marginTop: "50px",
                                                        float: "left"
                                                    }}
                                                    type="button"
                                                    onClick={() => this.stepper.previous()}
                                                >
                                                    Prev
                                    </button>

                                                <button
                                                    type="button"
                                                    className="btn"
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: "#202020",
                                                        float: "right",
                                                        marginTop: "50px",

                                                    }}

                                                    onClick={() => this.stepper.next()}
                                                    disabled={
                                                        this.state.id1.length &&
                                                            this.state.id2.length &&
                                                            this.state.id3.length &&
                                                            this.state.id4.length &&
                                                            this.state.id5.length &&
                                                            this.state.id6.length &&
                                                            this.state.name1.length &&
                                                            this.state.name2.length &&
                                                            this.state.name3.length &&
                                                            this.state.name4.length &&
                                                            this.state.name5.length &&
                                                            this.state.name6.length
                                                            ? ""
                                                            : "disabled"
                                                    }
                                                >
                                                    Next
                                      </button>

                                            </div>
                                            <div
                                                id="test-l-4"
                                                className="content"
                                                style={{
                                                    color: "white",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <DateTimeSelection startDate={start}
                                                    endDate={preEnd} startTime={sTime}
                                                    endTime={eTime}
                                                    handleSelectedDate={(date) => this.onDate(date)}
                                                    handleSelectedTime={(time) => this.onTime(time)}
                                                />
                                                <button
                                                    className="btn"
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: "#202020",
                                                        float: "left",
                                                    }}
                                                    onClick={() => this.stepper.previous()}
                                                >
                                                    Prev
                                                 </button>
                                                {/* <div className="close" data-dismiss="modal"> */}
                                                <button

                                                    className="btn"
                                                    onClick={this.onSubmit}
                                                    style={{
                                                        backgroundColor: "#f5c035",
                                                        color: "#202020",
                                                        float: "right",

                                                    }}
                                                /*  disabled={
                                                     this.state.selectedDate &&
                                                       this.state.selectedTime
                                                       ? ""
                                                       : "disabled"
                                                   } */
                                                >
                                                    Submit
                  </button>
                                                {/*  </div> */}

                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}
const mapStateToProps = state=>{
    return{
        tournaments : state.tour.tournament
    }
}
export default connect(mapStateToProps, {postData})(SelectedTournament);