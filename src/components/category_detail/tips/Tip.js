import React from 'react';
import axios from 'axios';

export default class Tip extends React.Component{
    render(){
        const me = this;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{me.props.title}</div>
                <div className="panel-body">
                    {me.props.body}
                </div>
            </div>
        );
    }
}