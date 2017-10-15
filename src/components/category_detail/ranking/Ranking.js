import React from 'react';
import axios from 'axios';
import {RankingItem} from './RankingItem';
import app from '../../../app.js';

export default class Ranking extends React.Component {
    constructor(props){
        super(props);
    }

    success(){
        console.log("success");
    }

    failure(){
        console.log("failure");
    }

    connect(){
        const whereParams = "thingTypeCode='Ranking'";
        axios.get(app.baseUrl, {
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Api_key': app.token
            },
            params: {
                where: whereParams
            }
        }).then(this.success())
            .catch(this.failure())
    }

    componentWillMount(){
        const me = this;
        me.connect();
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h3>Ranking</h3>
                    <hr/>
                    <ul className="list-group">
                        <RankingItem
                            score={100}
                            arrowIcon='up'
                            categoryIcon="tint"
                            username="Veuge"/>

                        <RankingItem
                            score={200}
                            arrowIcon='down'
                            categoryIcon="bolt"
                            username="Juan Perez"/>

                        <RankingItem
                            score={300}
                            arrowIcon='down'
                            categoryIcon="industry"
                            username="John Smith"/>

                        <RankingItem
                            score={50}
                            arrowIcon='up'
                            categoryIcon="industry"
                            username="John Lennon"/>
                    </ul>
                </div>
            </div>
        )
    }
}
