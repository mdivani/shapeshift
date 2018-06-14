import React from 'react';
import moment from 'moment';

class CountDownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 9,
            seconds: 59,
            interval: 1000
        }
    }

    componentDidMount() {
        const currentTime = + new Date();
        const diffTime = this.props.timestamp - currentTime;
        let duration = moment.duration(diffTime, 'milliseconds');
        console.log(duration);
        this.setState({
            minutes: duration.minutes(),
            seconds: duration.seconds()
        });

        setInterval(() => {
            duration = moment.duration(duration - 1000, 'millisecond');
            this.setState({
                minutes: duration.minutes(),
                seconds: duration.seconds()
            });
        }, 1000);
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className='timer'>
                <label className='timer__label'>time remaining</label>
                <span className='timer__countdown'>
                   {`${this.state.minutes}:${this.state.seconds}`}
                </span>
            </div>
        );
    }
}

export default CountDownTimer;