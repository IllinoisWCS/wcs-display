var React = require('react');

var ClockPanel = require('./panels/clock');
var WeatherPanel = require('./panels/weather');

var Header = React.createClass({
    render: function() {
        return <div className="header-container">
            <div className="header-left">
                <img src="img/wcsLogo.png"
                    className="header-logo" />
            </div>
            <div className="header-right">
                <WeatherPanel />
                <ClockPanel />
            </div>
        </div>;
    }
});

module.exports = Header;
