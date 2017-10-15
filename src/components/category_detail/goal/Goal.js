import React from 'react';

export default class Goal extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h3>Meta</h3>
                    <hr/>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nueva meta" />
                        <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">Guardar</button>
                      </span>
                    </div>
                </div>
            </div>
        );
    }
}