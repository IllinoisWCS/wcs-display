var React = require('react');
var $ = require('jquery');
var moment = require('moment');
var classNames = require('classnames');

var time = require('../utils/time');

var eventsUrl = 'https://script.google.com/macros/s/AKfycbysZFMo4SZfZCtl9swTqD3M1PvyhLBD71qcrHheuoziX9FpJtpZ/exec';
var EVENTS_INTERVAL_MS = 10 * 60 * 1000;

/**
 * Events panel.
 */
var EventsPanel = React.createClass({
    getInitialState: function() {
        return {
            events: []
        };
    },

    updateEvents: function() {
        $.get(eventsUrl, function(data) {
            var events = data.slice(0, 5);
            this.setState({events: events});
        }.bind(this));
    },

    componentDidMount: function() {
        this.updateEvents();
        setInterval(this.updateEvents, EVENTS_INTERVAL_MS);
    },

    formatDate: function(date, isEndDate, showDate, isAllDay) {
        var dateComponents = [];
        if (showDate) {
            dateComponents.push(date.format('dddd, MMM D'));
        }
        if (!isAllDay) {
            dateComponents.push(time.formatTime(date.toDate()));
        }
        return dateComponents.join(' ');
    },

    isSingleDay: function(isAllDay, start, end) {
        return isAllDay && start.diff(end.subtract(1, 'day'), 'days') == 0;
    },

    formatEventTime: function(event) {
        start = moment(event.startTime);
        end = moment(event.endTime);
        var startDateStr = this.formatDate(start, false, true, event.isAllDay);
        if (this.isSingleDay(event.isAllDay, start, end)) {
            return startDateStr;
        }
        var isSameDay = !start.isSame(end, 'day');
        var endDateStr = this.formatDate(end, true, isSameDay, event.isAllDay);
        return startDateStr +  ' \u2013 ' + endDateStr;
    },

    getEvents: function() {
        var events = this.state.events;
        if (events.length === 0) {
            return <p>No upcoming events</p>;
        }
        return events.map(function(event) {
            return <div key={event.id} className="event-item">
                <div className="event-summary">{event.title}</div>
                <div>{this.formatEventTime(event)}</div>
                <div>{event.location}</div>
            </div>;
        }.bind(this));
    },

    render: function() {
        var bodyClass = classNames({
            'panel-body': true,
            'events-body-no-events': this.state.events.length == 0
        });

        return <div className="panel events-panel">
            <div className="panel-heading">
                <h2>Events</h2>
            </div>
            <div className={bodyClass}>
                {this.getEvents()}
            </div>
        </div>;
    }
});

module.exports = EventsPanel;
