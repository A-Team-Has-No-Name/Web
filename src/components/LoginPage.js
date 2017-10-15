import React from 'react';
import axios from 'axios';

export default class LoginPage extends React.Component {
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
                    <div className="col-md-4 col-md-offset-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputUsername">
                                    Nombre de usuario
                                </label>
                                <input type="text" className="form-control" placeholder="Nombre de usuario"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">
                                Iniciar Sesion
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
