import React from 'react';
import axios from 'axios';
import {Tabs} from "./Tabs";

export default class CategoriesListPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">&nbsp;
                            <small></small>
                        </h1>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <Tabs/>
                </div>
            </div>
        )
    }
}
