import React from 'react';
import axios from 'axios';
import {RankingItem} from './RankingItem';
import app from '../../../app.js';

export default class Ranking extends React.Component {
    constructor(props){
        super(props);
        const me = this;
        me.state = {
            userNames: [],
            currentUser: '',
            registers: []
        };

        this.getRegisters = this.getRegisters.bind(this);
    }

    failure(){
        console.log("failure");
    }

    getRegisters(){
        const me = this;
        const whereParams = "thingTypeCode='Registro'";
        axios.get(app.baseUrl, {
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Api_key': app.token
            },
            params: {
                where: whereParams
            }
        }).then(response => {
            this.getRegistersSuccess(response);
        }).catch(me.failure);
    }

    getRegistersSuccess(response){
        let users = [];
        let userNames = [];
        response.data.results.forEach((current) => {
            users.push(current.UserSerial);
        });
        this.setState({
            users: users,
            registers: response.data.results
        });

        console.log("USERS", users);
        users.forEach((item, index) => {


        });
    }

    getUsername(userId){
        let whereParams = "thingTypeCode='Usuario'&name='" + userId + "'";
        axios.get(app.baseUrl, {
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Api_key': app.token
            },
            params: {
                where: whereParams
            }
        }).then(response => {
            this.getUserSuccess(response);
        }).catch(this.failure);
    }

    getUserSuccess(response){
        console.log("response! response!", response);
        let user = response.data.results[0].Nombres + ' ' + response.data.results[0].Apellidos;
        this.setState({
            currentUser: response.data.results[0].Nombres + ' ' + response.data.results[0].Apellidos
        });
        return user;
    }

    componentWillMount(){
        const me = this;
        me.getRegisters();
    }

    render(){
        const me = this;
        console.log("Ranking", me.state.registers);
        return(
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h3>Ranking</h3>
                    <hr/>
                    <ul className="list-group">
                        {
                            me.state.registers && me.state.registers.map((item, index) => {
                                return (
                                    <RankingItem
                                        key={index}
                                        score={item.sqn}
                                        arrowIcon='up'
                                        categoryIcon="tint"
                                        username={'Username ' + index} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
