var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header');
var MTDPanel = require('./panels/mtd');
var SponsorsPanel = require('./panels/sponsors');
var EventsPanel = require('./panels/events');
var WelcomePanel = require('./panels/welcome')

/**
 * Top-level dashboard component.
 */
var Dashboard = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="row row-primary">
                    <WelcomePanel />
                </div>
                <div className="row row-secondary">
                    <SponsorsPanel />
                    <MTDPanel />
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(Dashboard),
    document.getElementById('main')
);
