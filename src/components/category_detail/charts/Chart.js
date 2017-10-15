import React from 'react';
import axios from 'axios';

export default class Chart extends React.Component{

    chart(){
        let dps = []; // dataPoints
        let chart = new CanvasJS.Chart("chartContainer", {
            title :{
                text: "Dynamic Data"
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "line",
                dataPoints: dps
            }]
        });

        let xVal = 0;
        let yVal = 100;
        let updateInterval = 1000;
        let dataLength = 20; // number of dataPoints visible at any point

        let updateChart = function (count) {

            count = count || 1;

            for (let j = 0; j < count; j++) {
                yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
                dps.push({
                    x: xVal,
                    y: yVal
                });
                xVal++;
            }

            if (dps.length > dataLength) {
                dps.shift();
            }

            chart.render();
        };

        updateChart(dataLength);
        setInterval(function(){updateChart()}, updateInterval);
    }

    componentDidMount(){
        this.chart();
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h3>Grafica</h3>
                    <hr/>
                    <div id="chartContainer"></div>
                </div>
            </div>
        );
    }
}