import React from 'react';
import $ from 'jquery';

class Splash extends React.Component{
  constructor(props){
    super(props)
  }

  urlPush(name){
    return (e) => (
      this.props.router.push(name)
    )
  }

  render(){
    return (
      <div className="splash-main" style={{"backgroundColor":"#fdf3f4"}}>
        <div className="logo">
          <img className="logo-img" src="https://res.cloudinary.com/deeptailor/image/upload/v1479757035/logo-transparent_cx8wyr.png"/>
        </div>
        <div className="nav-bar">
          <ul>
            <li onClick={this.urlPush('gallery')}>Gallery</li>
            <li onClick={this.urlPush('about')}>About</li>
            <li onClick={this.urlPush('contact')}>Contact</li>
          </ul>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/zivabridal/"><img src="https://res.cloudinary.com/deeptailor/image/upload/v1479839827/instagram_fpwbgc.png"/></a>
          <a href="https://www.facebook.com/ZivaBridalBoutique"><img src="https://res.cloudinary.com/deeptailor/image/upload/v1479839827/facebook_mlxyi5.png"/></a>
        </div>
      </div>
    );
  }
}

export default Splash;
