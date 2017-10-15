import React from 'react';
import axios from 'axios';
import RankingItem from './RankingItem';

export default class Ranking extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <ul className="list-group">
                    <RankingItem/>
                    <RankingItem/>
                    <RankingItem/>
                    <RankingItem/>
                </ul>
            </div>
        )
    }
}
