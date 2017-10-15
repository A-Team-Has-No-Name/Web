import React from 'react';
import axios from 'axios';

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
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="fa fa-tint fa-lg"></i> Agua
                        </li>

                        <li className="list-group-item">
                            <i className="fa fa-bolt fa-lg"></i> Luz
                        </li>

                        <li className="list-group-item">
                            <i className="fa fa-industry fa-lg"></i> Gas
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
