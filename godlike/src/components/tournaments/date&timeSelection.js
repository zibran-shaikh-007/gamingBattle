import React, { useState, useEffect, Fragment } from "react";

const DateTimeSelection = (props) => {
    const [data, setData] = useState([props]);
    const [dateSlots, setDateSlots] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);
    const [showTime, setShowTime] = useState(false)
    const [selectedDate, setSelectedDate] = useState([])
    const [selectedTime, setSelectedTime] = useState([])

    console.table("props", props.startDate)

    let startDate = new Date(props.startDate);
    let endDate = new Date(props.endDate);
    let startTime = new Date(props.startTime)
    let endTime = new Date(props.endTime)

    /* console.log("props in date and time", props) */
    /* console.log("start time and end time", startTime,endTime) */

   /*    var today = startDate;
      var year = today.getFullYear();
      var mes = today.getMonth() + 1;
      var dia = today.getDate();
      var startt = year + "-" + mes + "-" + dia;
     console.log("start", startt)
      var tomm = endDate;
      var year = tomm.getFullYear();
      var mes = tomm.getMonth() + 1;
      
      var dia = tomm.getDate();
      var endd = year + "/" + mes + "/" + dia;
 */
    let sTime = startTime.getHours();
    let eTime = endTime.getHours();

    console.log("starting time", sTime, eTime)

    var begin = startDate;
    var lastDate = endDate;

    console.log("BEGIN", begin);
    console.log("LAST", lastDate);
   
    for (; begin <= lastDate; begin.setDate(begin.getDate() + 1)) {

        if (dateSlots.length < 26) {
            dateSlots.push(begin.toString());
        }
        // allDates.push(begin);
    }
   

   /*  console.log(dateSlots, "Date Slots"); */
    // console.log(allDates, "All Date Slots");

    for (; sTime < eTime; sTime++) {
        //  console.log("time slots", sTime)
        if (timeSlots.length < 12) {
            timeSlots.push(sTime)
        }
    }
    /* console.log(timeSlots, "TIME Slots") */



    useEffect(() => {

    }, [])

    function handleDate(index) {

        let dates = dateSlots[index]
        setSelectedDate(dates)
        props.handleSelectedDate(dates)
        setShowTime(true)
    }
    const handleTime = (index) => {

        let time = timeSlots[index]
        setSelectedTime(time)
        props.handleSelectedTime(time)
    }

    /*   console.log("selected Date", selectedDate)
      console.log("selected Time", selectedTime) */

    return (
        <Fragment>

            <h3>Time Selection</h3>
            {dateSlots.map((dateItem, index) => {
                /* console.log("index", index) */
                return <div key={index} ><button onClick={() => handleDate(index)} type="button" className="btn btn-md btn-secondary m-2" >{dateItem.split('2020')[0]}</button><br />
                    {showTime && timeSlots.map((timeItem, index) => {
                        return (<Fragment><span key={index}><button type="button" onClick={() => handleTime(index)} className="btn btn-md m-2" style={{ background: "#f5c035" }}>{timeItem}-{timeItem + 1}</button></span></Fragment>
                        )
                    })}<br />
                </div>

            })}


            {/* <div
            className="form-group"
            style={{ backgroundColor: "#1a1a1a" }}
        >
          <div id="accordion" style={{ backgroundColor: "#1a1a1a" }}>
                <div
                    className="card"
                    style={{ backgroundColor: "#343434" }}
                >
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={{ color: "white" }}
                            >
                             
                          </button>
                        </h5>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            <ul
                                className="list-group list-group-flush"
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date1time1"
                                            name="date1time1"
                                            value="date1time1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time1"
                                        >
                                            10AM-11AM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time2"
                                            name="date1time2"
                                            value="date1time2"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time2"
                                        >
                                            11AM-12PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time3"
                                            name="date1time3"
                                            value="date1time3"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time3"
                                        >
                                            12PM-01PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time4"
                                            name="date1time4"
                                            value="date1time4"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time4"
                                        >
                                            01PM-02AM
                                </label>
                                    </div>
                                </li>

                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time5"
                                            name="date1time5"
                                            value="date1time5"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time5"
                                        >
                                            02PM-03AM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time6"
                                            name="date1time6"
                                            value="date1time6"
                                        />
                                        <label
                                            className="custom-control-label"
                                            ffor="date1time6"
                                        >
                                            03PM-04PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time7"
                                            name="date1time7"
                                            value="date1time7"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time7"
                                        >
                                            04PM-05PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time8"
                                            name="date1time8"
                                            value="date1time8"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time8"
                                        >
                                            05PM-06PM
                                </label>
                                    </div>
                                </li>

                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date1time9"
                                            name="date1time9"
                                            value="date1time9"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time9"
                                        >
                                            06PM-07PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time10"
                                            name="date1time10"
                                            value="date1time10"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time9"
                                        >
                                            10PM-08PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time11"
                                            name="date1time11"
                                            value="date1time11"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time11"
                                        >
                                            08PM-09PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time12"
                                            name="date1time12"
                                            value="date1time12"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time12"
                                        >
                                            09PM-10PM
                                </label>
                                    </div>
                                </li>
                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date1time13"
                                            name="date1time13"
                                            value="date1time13"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time13"
                                        >
                                            10PM-11PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date1time14"
                                            name="date1time14"
                                            value="date1time14"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date1time14"
                                        >
                                            11PM-12PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div
                    className="card"
                    style={{ backgroundColor: "#343434" }}
                >
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                style={{ color: "white" }}
                            >
                                21/09/2020
                          </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            <ul
                                className="list-group list-group-flush"
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date2time1"
                                            name="date2time1"
                                            value="date2time1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time1"
                                        >
                                            10AM-11AM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time2"
                                            name="date2time2"
                                            value="date2time2"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time2"
                                        >
                                            11AM-12PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time3"
                                            name="date2time3"
                                            value="date2time3"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time3"
                                        >
                                            12PM-01PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time4"
                                            name="date2time4"
                                            value="date2time4"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time4"
                                        >
                                            01PM-02AM
                                </label>
                                    </div>
                                </li>

                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time5"
                                            name="date2time5"
                                            value="date2time5"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time5"
                                        >
                                            02PM-03AM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time6"
                                            name="date2time6"
                                            value="date2time6"
                                        />
                                        <label
                                            className="custom-control-label"
                                            ffor="date2time6"
                                        >
                                            03PM-04PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time7"
                                            name="date2time7"
                                            value="date2time7"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time7"
                                        >
                                            04PM-05PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time8"
                                            name="date2time8"
                                            value="date2time8"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time8"
                                        >
                                            05PM-06PM
                                </label>
                                    </div>
                                </li>

                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date2time9"
                                            name="date2time9"
                                            value="date2time9"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time9"
                                        >
                                            06PM-07PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time10"
                                            name="date2time10"
                                            value="date2time10"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time10"
                                        >
                                            10PM-08PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time11"
                                            name="date2time11"
                                            value="date2time11"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time11"
                                        >
                                            08PM-09PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time12"
                                            name="date2time12"
                                            value="date2time12"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time12"
                                        >
                                            09PM-10PM
                                </label>
                                    </div>
                                </li>
                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date2time13"
                                            name="date2time13"
                                            value="date2time13"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time13"
                                        >
                                            10PM-11PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date2time14"
                                            name="date2time14"
                                            value="date2time14"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date2time14"
                                        >
                                            11PM-12PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="card"
                    style={{ backgroundColor: "#343434" }}
                >
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                style={{ color: "white" }}
                            >
                                22/09/2020
                          </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                    >
                        <div className="card-body">
                            <ul
                                className="list-group list-group-flush"
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date3time1"
                                            name="date3time1"
                                            value="date3time1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time1"
                                        >
                                            10AM-11AM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time2"
                                            name="date3time2"
                                            value="date3time2"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time2"
                                        >
                                            11AM-12PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time3"
                                            name="date3time3"
                                            value="date3time3"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time3"
                                        >
                                            12PM-01PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time4"
                                            name="date3time4"
                                            value="date3time4"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time4"
                                        >
                                            01PM-02AM
                                </label>
                                    </div>
                                </li>

                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time5"
                                            name="date3time5"
                                            value="date3time5"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time5"
                                        >
                                            02PM-03AM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time6"
                                            name="date3time6"
                                            value="date3time6"
                                        />
                                        <label
                                            className="custom-control-label"
                                            ffor="date3time6"
                                        >
                                            03PM-04PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time7"
                                            name="date3time7"
                                            value="date3time7"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time7"
                                        >
                                            04PM-05PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time8"
                                            name="date3time8"
                                            value="date3time8"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time8"
                                        >
                                            05PM-06PM
                                </label>
                                    </div>
                                </li>

                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date3time9"
                                            name="date3time9"
                                            value="date3time9"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time9"
                                        >
                                            06PM-07PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time10"
                                            name="date3time10"
                                            value="date3time10"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time10"
                                        >
                                            10PM-08PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time11"
                                            name="date3time11"
                                            value="date3time11"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time11"
                                        >
                                            08PM-09PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time12"
                                            name="date3time12"
                                            value="date3time12"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time12"
                                        >
                                            09PM-10PM
                                </label>
                                    </div>
                                </li>
                                <li
                                    className="list-group-item"
                                    style={{
                                        backgroundColor: "#343434",
                                        color: "white",
                                    }}
                                >
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="date3time13"
                                            name="date3time13"
                                            value="date3time13"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time13"
                                        >
                                            10PM-11PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="date3time14"
                                            name="date3time14"
                                            value="date3time14"
                                        />
                                        <label
                                            className="custom-control-label"
                                            for="date3time14"
                                        >
                                            11PM-12PM
                                </label>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              </div>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div> 
        </div> */}


        </Fragment>
    )
}
export default DateTimeSelection;