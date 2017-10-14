/**
 * Created by jhtan on 1/31/17.
 */

'use strict';

import React from 'react';
import axios from 'axios';
import app from '../../app';
import Slider from 'react-slick';
import io from 'socket.io-client'

let socket = io(app.ServerIP);

export default class ItemDetailPage extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      item: {
        name: 'Agency Twist-Front Top',
        price: '68.0',
        images: [
          'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_045_b?$a15-pdp-detail-shot$&hei=900&fit=constrain',
          'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_045_b2?$a15-pdp-detail-shot$&hei=900&fit=constrain',
          'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_045_b3?$a15-pdp-detail-shot$&hei=900&fit=constrain'
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
        details: [
          'Size: S, L',
          'Pullover styling',
          'USA',
          'Dimensions 28"L'
        ],
        grouping: 'asdf',
        color: 'sky'
      }
    };
    this.connectionToViZix = this.connectionToViZix.bind(this);
    this.connectionToViZixSuccessful = this.connectionToViZixSuccessful.bind(this);
    this.processBlinkResponse = this.processBlinkResponse.bind(this);
  }

  componentDidMount() {
    // Begins the connection to ViZix
    // this.connectionToViZix();

    // Socket io connection
    socket.on('dash',(data) =>{
      console.log(data);
      this.processBlinkResponse(data);
    });
  }

  connectionToViZix() {
    axios.post(app.ApiServices + 'user/login', {
      username: app.ApiServicesUsername,
      password: app.ApiServicesPassword
    })
      .then(this.connectionToViZixSuccessful)
      .catch(function (error) {
        console.log(error);
      });
  }

  connectionToViZixSuccessful(response) {
    app.LoginToken = response.data.token;
    console.log('Connection to ViZix successful.');
  }

  processBlinkResponse(data) {
    data.details = data.details.split('|');
    data.images = data.images.split('|');

    this.setState({
      item: data
    });
  }

  render() {

    let slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    };

    let slickSettingsYouMayAlsoLike = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.item.name}
              <small>  ${this.state.item.price}0</small>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 ">
            <Slider {...slickSettings}>
              <div><img className="main-image" src={this.state.item.images[0]} /></div>
              <div><img className="main-image" src={this.state.item.images[1]} /></div>
              <div><img className="main-image" src={this.state.item.images[2]} /></div>
            </Slider>
          </div>
          <div className="col-md-3">
            <h3>Description</h3>
            <p>{this.state.item.description}</p>
            <h3>Color: </h3>
            <p>{this.state.item.color}</p>
            {/*<button type="button" className="btn btn-default btn-circle"> </button>
            <button type="button" className="btn btn-primary btn-circle"> </button>
            <button type="button" className="btn btn-success btn-circle"> </button>
            <button type="button" className="btn btn-info btn-circle"> </button>
            <button type="button" className="btn btn-warning btn-circle"> </button>
            <button type="button" className="btn btn-danger btn-circle"> </button>*/}
            <h3>Details</h3>
            <ul>
              <li>{this.state.item.details[0]}</li>
              <li>{this.state.item.details[1]}</li>
              <li>{this.state.item.details[2]}</li>
              <li>{this.state.item.details[3]}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">You May Also Like</h3>
          </div>
          <div className="col-md-12 carousel-slick">
          <Slider {...slickSettingsYouMayAlsoLike}>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_001_b3?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_060_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_023_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_006_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_011_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_045_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_012_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_065_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_042_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
            <div className="col-sm-3 col-xs-6"><a href="#"><div><img className="carousel-image img-responsive portfolio-item" src={'https://images.anthropologie.com/is/image/Anthropologie/4112237032331_041_b?$a15-pdp-detail-shot$&hei=900&fit=constrain'} alt="" /></div></a></div>
          </Slider>
          </div>
        </div>
      </div>
    );
  }
}