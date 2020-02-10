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
        cycleStartDate: null,
        cycleEndDate: null,
        cycleLength: null,
        cycle: []
    };

    getStartDate = () => {
        this.setState({ cycleStartDate: new Date("02/01/2020") });
    };

    getEndDate = () => {
        this.setState({ cycleEndDate: new Date("03/02/2020") });
    };

    getCycleLength = () => {

        let cycleLength =
            (this.state.cycleEndDate.getTime() -
                this.state.cycleStartDate.getTime()) /
            (1000 * 3600 * 24);
        this.setState({ cycleLength: cycleLength });
    };

    createCycle = () => {

        
        let cycle = new Array(this.state.cycleLength);

        for (var i = 0; i < this.state.cycleLength; i++) {
            cycle[i] = (i + 1).toString();
        }

        this.setState({ cycle: cycle });
    };

    componentDidMount(){
        this.getEndDate()
    }

    render() {
        return (
            <div className="Page">
                <h3>Your Cycle</h3>
                <div className="CycleCircle">
                    {this.state.cycle.map((day, index) => (
                        <div className="CycleDay" key={index}> Day {day} </div>
                    ))}
                </div>
                <NavigationBar />
            </div>
        );
    }
}

export default Cycle;
