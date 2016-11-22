import React from 'react';
import $ from 'jquery';

class Splash extends React.Component{
  constructor(props){
    super(props)
    this.state = {menu_visible: true}

    this.show_menu = this.show_menu.bind(this);
  }

  show_menu(e){
    console.log(this.state.menu_visible)
    if(this.state.menu_visible){
      $(".menu-popup").toggle();
      this.setState({menu_visible: false});
    }else{
      $(".menu-popup").toggle();
      this.setState({menu_visible:true});
    }
  }

  render(){
    return (
      <div className="splash-main" style={{"backgroundColor":"#fdf3f4"}}>
        <div className="logo">
          <img className="logo-img" src="https://res.cloudinary.com/deeptailor/image/upload/v1479757035/logo-transparent_cx8wyr.png"/>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/zivabridal/"><img src="https://res.cloudinary.com/deeptailor/image/upload/v1479839827/instagram_fpwbgc.png"/></a>
          <a><img src="https://res.cloudinary.com/deeptailor/image/upload/v1479839827/facebook_mlxyi5.png"/></a>
        </div>
      </div>
    );
  }
}

export default Splash;
