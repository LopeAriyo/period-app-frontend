import React from "react";

import "../../Page.css";
import "./Cycle.css";

import NavigationBar from "../../../components/primary/NavigationBar.js";

//TODO
//+ get the cycle start date
//+ get the cycle End Date
//+ calculate the cycle length = (sd - ed)
//+ create an array to represent the cycle
//+ each element is equal to a day, the total number of days in the cycle is equal to the cycle length
//+ for each element in the cycle array render a div to represent the cycle days
//+ each circle should display the cycle day number
//+ each circle also needs a degree so that it appears as a border around the main circle
class Cycle extends React.Component {
    state = {
        cycleStartDate: "02/01/2020",
        cycleEndDate: "03/02/2020",
        cycle: []
    };

    //Reminder
    //& cycleStartDate and cycleEndDate will come from props

    getCycleLength = () => {
        let startDate = new Date(this.state.cycleStartDate);
        let endDate = new Date(this.state.cycleEndDate);

        let cycleLength =
            (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

        return cycleLength;
    };

    createCycle = () => {
        let cycleLength = this.getCycleLength();
        let cycle = [];

        for (let i = 0; i <= cycleLength; i++) {
            cycle.push((i + 1).toString());
        }

        this.setState({ cycle: cycle });
    };

    componentDidMount() {
        this.createCycle();
    }

    render() {
        return (
            <div className="Page">
                <h3>Your Cycle</h3>
                <div className="CycleCircle">
                    {this.state.cycle.map((day, index) => (
                        <div className="CycleDay" key={index}>
                            {" "}
                            Day {day}{" "}
                        </div>
                    ))}
                </div>
                <NavigationBar />
            </div>
        );
    }
}

export default Cycle;
