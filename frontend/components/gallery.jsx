import React from 'react';
import $ from 'jquery';

class Gallery extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  urlPush(name){
    return (e) => (
      this.props.router.push(name)
    )
  }

  render(){
    return (
      <div className="gallery-main" >

        <div className="nav-bar-gallery">
          <ul>
            <li onClick={this.urlPush('/')}>Home</li>
            <li onClick={this.urlPush('about')}>About</li>
            <li onClick={this.urlPush('contact')}>Contact</li>
          </ul>
        </div>

        <div className="logo-gallery">
          <img className="logo-img" src="https://res.cloudinary.com/deeptailor/image/upload/v1479757035/logo-transparent_cx8wyr.png"/>
          <h3>Bridal Gallery</h3>
        </div>

        <div className="multiple-photos">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Gallery;
