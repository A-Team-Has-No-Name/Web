import React from 'react';
import axios from 'axios';
import app from '../app';

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
                    <div className="col-md-5 col-md-offset-1">
                        <h4>Categorias en las que participas</h4>
                        <hr/>
                        <ul className="list-group">
                            <a href="/categories/1">
                                <li className="list-group-item">
                                    <i className="fa fa-tint fa-lg"></i> Agua
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h4>Categorias disponibles</h4>
                        <hr/>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <i className="fa fa-bolt fa-lg"></i> Luz
                            </li>

                            <li className="list-group-item">
                                <i className="fa fa-industry fa-lg"></i> Gas
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
