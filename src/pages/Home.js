import React, { Component } from 'react';
import './App.css';
import TodoStore from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'
import $ from 'jquery';
import images from '../images/ImagesHomepage.js';
import './bootstrap/css/bootstrap.min.css';
import './device-mockups/device-mockups.min.css';
import './css/new-age.min.css';
import './simple-line-icons/css/simple-line-icons.css';
import './Home.css';
import AtvImg from 'react-atv-img';







class Home extends Component {
  constructor(){
    super();
  }

componentDidMount(){
  //manage animations for the homepage
  //#0 is first background photo, #1 first foreground text
  //#2 is the second background photo, #3 is the second foreground text

  $("#2").removeClass("homepagevideoAnimated");
  $("#2").addClass("homepagevideoAnimatedDelay");//delayed animation


 $("#0").on("animationend",()=>{
    console.log("Works first")
  });

 $("#2").on("animationend",()=>{
    console.log("Works second");

  $("#0").removeClass("homepagevideoAnimated");
  $("#1").removeClass("homepagevideoAnimated");
  $("#2").removeClass("homepagevideoAnimatedDelay");

  void $("#0").outerWidth();
  void $("#1").outerWidth();
  void $("#2").outerWidth();

  $("#0").addClass("homepagevideoAnimated");
  $("#1").addClass("homepagevideoAnimated");
  $("#2").addClass("homepagevideoAnimatedDelay");    
});

 

 

}




  render() {
//console.log("IMGAESSSSSSS", images)

    return (
<div id="page-top">
    <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top" style={{color:'grey'}}>Start Bootstrap</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="#download">Download</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#features">Features</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header className="mainHeader">
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>We convert your text articles into videos in a matter of seconds</h1>
                            <a href="#download" className="btn btn-outline btn-xl page-scroll">Start Now for Free!</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                            <div className="device" style={{top:'-10%'}}>
                                <div className="screen">
                                    
                                    <AtvImg className="homepagevideoAnimated" layers={[ images.car, images.front,'http://interfacelift.com/wallpaper/previews/04077_monuments_672x420.jpg']} staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg" isStatic={false} className={'thisIsOptional'} style={{ width: 375, height: 260,position:'absolute',top:'20%',left:'4%'}} />
                                    <img src={images.skeletonScreen} className="img-responsive" alt=""/>
                                </div>
                                <div className="button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="download" className="download bg-primary text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h2 className="section-heading">Discover what all the buzz is about!</h2>
                    <p>We use artificial intelligence to help you create your perfect video summary!</p>
                    <div className="badges">
                        {/*<a className="badge-link" href="#"><img src={images.google_play_badge} alt=""/></a>
                        <a className="badge-link" href="#"><img src={images.app_store_badge} alt=""/></a>*/}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features" className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-heading">
                        <h2>Unlimited Features, Unlimited Fun</h2>
                        <p className="text-muted">Check out what you can do with our web application!</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                            <div className="device">
                                <div className="screen">
                                    <img src={images.skeletonScreen} className="img-responsive" alt=""/> </div>
                                <div className="button">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-screen-smartphone text-primary"></i>
                                    <h3>Video is the future of Mobile</h3>
                                    <p className="text-muted">Creation of videos has never been easier!</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-camera text-primary"></i>
                                    <h3>Flexible Use</h3>
                                    <p className="text-muted">Put an image, video, text, or anything else in the screen!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-present text-primary"></i>
                                    <h3>Free to Use</h3>
                                    <p className="text-muted">During the closed-beta phase we give our software totaly for free!</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-lock-open text-primary"></i>
                                    <h3>Creative Commons license</h3>
                                    <p className="text-muted">We have huge collection of images and videos that you can use even commercially!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>

    <section className="cta">
        <div className="cta-content">
            <div className="container">
                <h2>Stop waiting.<br/>Start building.</h2>
                <a href="#contact" className="btn btn-outline btn-xl page-scroll">Let's Get Started!</a>
            </div>
        </div>
        <div className="overlay"></div>
    </section>

    <section id="contact" className="contact bg-primary">
        <div className="container">
            <h2>We <i className="fa fa-heart"></i> new friends!</h2>
            <ul className="list-inline list-social">
                <li className="social-twitter">
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li className="social-facebook">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                </li>
                <li className="social-google-plus">
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                </li>
            </ul>
        </div>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2017 BA47. All Rights Reserved.</p>
            <ul className="list-inline">
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </div>
    </footer>
</div>

    );
  }
} 

export default Home;
