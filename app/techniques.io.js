var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    } = React;
var Button = require('react-native-button');

var {width, height} = Dimensions.get('window');

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
    scrollView: {
        width: width,
        height: height
    }
});

var techniques = function(techniques) {
    return techniques.map(function(technique){
        return <Technique description={technique.description} title={technique.title}/>
    });
};

var Technique = React.createClass({
    render: function() {
        return (
            <View style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.welcome}>
                        <Text>{this.props.title}</Text>
                        <Text>{this.props.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
});

var Techniques = React.createClass({
    render: function () {
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                pagingEnabled={true}
                scrollEventThrottle={200}
                horizontal={true}
                style={styles.scrollView}
                >
                {techniques(this.props.techniques)}
                <View style={styles.scrollView}>
                    <View style={styles.container}>
                        <View style={styles.welcome}>
                            <Button onPress={this.props.onFinished}>Are you ready for this?!?!</Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
});

module.exports = Techniques;
