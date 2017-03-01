var React = require('react');
var $ = require('jquery');
var classNames = require('classnames');

const ISSUES_INTERVAL_MS = 10 * 60 * 1000;
const githubURL = 'https://api.github.com/repos/IllinoisWCS/IllinoisWCS.github.io/issues';

/**
 * Github Issues panel.
 */
var IssuesPanel = React.createClass({
    getInitialState: function() {
        return {
            issues: []
        };
    },

    componentDidMount: function() {
        this.updateData();
        setInterval(this.updateData, ISSUES_INTERVAL_MS);
    },

    updateData: function() {
        $.getJSON(githubURL)
             .then((data) => {
                 this.setState({
                     issues: data
                 })
             });
    },
    
    getIssues: function() {
        var issues = this.state.issues;
        console.log(issues);
        if (issues.length === 0) {
            return <p>No issues!</p>;
        } else if (issues.length > 4) {
            issues = issues.splice(0,4);
        }

        return issues.map(function(issue) {
            return <div key={issue.id} className="githubissues-item">
                <div className="githubissues-number">
                    <img src="img/issue-opened.svg"/> {issue.number}
                </div>
                <div className="githubissues-title">
                    {issue.title}
                </div>
                <div className="githubissues-assignee">
                    Assigned To: {issue.assignee ? issue.assignee.login : "No one!"}
                </div>
            </div>;
        }.bind(this));
    },

    render: function() {
        var bodyClass = classNames({
            'panel-body': true,
            'githubissues-body-no-issues': this.state.issues.length == 0
        });

        return <div className="panel githubissues-panel">
            <div className="panel-heading">
                <h2>Github Issues</h2>
            </div>
            <div className={bodyClass}>
                {this.getIssues()}
            </div>
            <div className="githubissues-footer">
                Want to contribute or file an issue? Talk to Sujay.
            </div>
        </div>;
    }
});

module.exports = IssuesPanel;
