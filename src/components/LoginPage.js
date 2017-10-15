import React from 'react';
import axios from 'axios';
import app from '../app';

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        const me = this;
        me.state = {
            userName: '',
            password: ''
        };
        me.handleChange = me.handleChange.bind(me);
        me.submitLogin = me.submitLogin.bind(me);
    }

    failure(){
        console.log("failure");
    }

    handleChange(event){
        const me = this;
        const target = event.target;
        const name = target.name;
        me.setState(
            { [name]: target.value }
        )
    }

    submitLogin(event){
        const me = this;
        const whereParams = "thingTypeCode='Usuario'&serialNumber='" + me.state.userName + "'";
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
            if(me.state.password === response.data.results["0"]["Contraseña"]){
                console.log("login success");
                window.location.replace('/categories');
            }
            else {
                console.log("login failure");
            }
        }).catch(me.failure);
    }


    render(){
        const me = this;
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
                                <input
                                    name="userName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de usuario"
                                    value={me.state.userName}
                                    onChange={me.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={me.state.password}
                                    onChange={me.handleChange}/>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                onClick={me.submitLogin}
                            >
                                Iniciar Sesion
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
