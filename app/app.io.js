var React = require('react-native');

var Techniques = require('./techniques.io.js');
var Conversation = require('./conversation.io.js');


var techniques = [
    {title: "Technique 1", description: "How to hold a spoon"},
    {title: "Technique 2", description: "How to hold a spoon"},
];

var steps = ['TECHNIQUES', 'CONVERSATION', 'EVALUATION'];

var App = React.createClass({
    getInitialState: function () {
        return {step: steps[0]}
    },
    render: function () {
        switch(this.state.step) {
            case steps[0]:
                return (
                    <Techniques techniques={techniques} onFinished={this.nextStep}/>
                );
                break;
            case steps[1]:
                return (
                    <Conversation/>
                );
                break;
        }
    },
    nextStep: function(){
        var stepNumber = steps.indexOf(this.state.step);
        this.setState({
            step: steps[stepNumber + 1]
        });
    }
});

module.exports = App;
