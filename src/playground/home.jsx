import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import styles from './home.css';

export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    clickFun(id) {
        global.constants.currentGate = id;
        console.log('clickFun id:' + global.constants.currentGate);
        window.location = 'http://localhost:8080/#/' + id;
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
    };
    render() {
        return (
            <div className={styles.homePage}>
                <button onClick={() => this.clickFun('gate1')}>第一关</button>
                <button onClick={() => this.clickFun('gate2')}>第二关</button>
            </div>
        );
    };
}