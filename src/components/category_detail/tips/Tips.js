import React from 'react';
import axios from 'axios';
import Tip from './Tip';

export default class Tips extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <h3>Tips</h3>
                        <hr/>
                        <Tip
                            title="A tip"
                            body="Lorem ipsum"/>

                        <Tip
                            title="Another tip"
                            body="Lorem ipsum"/>

                        <Tip
                            title="Third tip"
                            body="Lorem ipsum"/>

                        <Tip
                            title="Last tip"
                            body="Lorem ipsum"/>
                    </div>
                </div>
            </div>
        );
    }
}