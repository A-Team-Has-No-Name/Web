import React from 'react';
import axios from 'axios';
import Ranking from './ranking/Ranking';
import Tips from './tips/Tips';
import Goal from './goal/Goal';
import Chart from './charts/Chart';

export const Tabs = props => {
    return (
        <div className="container">
            <div className="row">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li role="presentation" className="active"><a href="#ranking" aria-controls="ranking" role="tab" data-toggle="tab">Ranking</a></li>
                    <li role="presentation"><a href="#grafica" aria-controls="grafica" role="tab" data-toggle="tab">Grafica</a></li>
                    <li role="presentation"><a href="#tips" aria-controls="tips" role="tab" data-toggle="tab">Tips</a></li>
                    <li role="presentation"><a href="#meta" aria-controls="meta" role="tab" data-toggle="tab">Meta</a></li>
                </ul>
            </div>
            <div className="row">
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="ranking">
                        <Ranking/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="grafica">
                        <Chart/>
                    </div>

                    <div role="tabpanel" className="tab-pane" id="tips">
                        <Tips/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="meta">
                        <Goal/>
                    </div>
                </div>
            </div>
        </div>
    )
}