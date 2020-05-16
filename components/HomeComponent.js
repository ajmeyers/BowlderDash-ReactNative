import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View style={styles.container}>
                <Card
                    featuredTitle="Bowling"
                    image={require('./images/bowling_1.jpg')}>
                    <Text style={{ margin: 10, textAlign: 'center' }}>
                        Bowling Description
                </Text>
                </Card>
                <Card
                    featuredTitle="Arcades"
                    image={require('./images/bowling_2.jpg')}>
                    <Text style={{ margin: 10, textAlign: 'center'}}>
                        Arcade Description
                </Text>
                </Card>
                <Card
                    featuredTitle="Parties"
                    image={require('./images/bowling_3.jpg')}>
                    <Text style={{ margin: 10, textAlign: 'center'}}>
                        Party Description
                </Text>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Home;