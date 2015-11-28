var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    } = React;
var Button = require('react-native-button');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

var Conversation = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Let's have a conversation!
                </Text>
            </View>
        )
    }
});

module.exports = Conversation;
