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
                    <Tabs/>
                </div>
            </div>
        )
    }
}
