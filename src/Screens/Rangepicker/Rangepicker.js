import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

class Rangepicker extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    handleChangeStartDate = date => {
        this.setState({
            startDate: date
        }, () => this.props.dateChange(this.state));
    };

    handleChangeEndDate = date => {
        this.setState({
            endDate: date
        }, () => this.props.dateChange(this.state));
    }

    render() {
        const { startDate, endDate } = this.state;
        return (
            <>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">From Date</span>
                    </div>
                    <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={startDate}
                        onChange={this.handleChangeStartDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">To Date</span>
                    </div>
                    <DatePicker
                        dateFormat="yyyy/MM/dd"
                        selected={endDate}
                        onChange={this.handleChangeEndDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />

                </div>
            </>
        );
    }
}

export default Rangepicker;