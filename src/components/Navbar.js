import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/categories">Categorias</a></li>
                            <li><a href="/badges">Medallas</a></li>
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        )
    }
}