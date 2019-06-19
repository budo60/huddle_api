/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import moment from 'moment';


require('moment/locale/fr');

// async function getData() {
//     try {
//       const response = await axios.get('http://163.172.141.214:8002/getdata');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }





export default class App extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        data: []
    }


    componentDidMount() {

        setInterval(function (param) {
            //console.log('callz');
            axios.get("http://163.172.141.214:8002/getdata")
                .then(res => {
                    let myData=[];
                    // handle success
                    //console.log('call')
                    Object.values(res.data).forEach(function(val) {
                        myData.push(val)
                    })
                    param.setState({ 'data': myData});
                })
                .catch(err => {
                    // handle error
                    console.log(err);
            });
        },1000,this)


    }

  render() {
    //console.log(this.state.data, ' render');
    const moveList = this.state.data.map((k,i) => {
        let day = moment(this.state.data[i].mouvement).format("DD/MM/YYYY");
        let hour = moment(this.state.data[i].mouvement).format("LTS");
        return (
          <View><Text key={i} style={styles.result}>Le capteur { this.state.data[i].sensorId } a detecté un mouvement le { day } a { hour }</Text></View>
        )
    })

    return (
      <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.welcome}>Detection de mouvement</Text>
                {moveList}
            </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
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
  result: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
