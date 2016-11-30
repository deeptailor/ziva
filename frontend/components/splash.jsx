import React from 'react';
import $ from 'jquery';

class Splash extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let myLatLng = {lat: 41.899875, lng: -87.667639};
    const mapOptions = {
      center: myLatLng,
      zoom: 16
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });
  }

  urlPush(name){
    return (e) => (
      this.props.router.push(name)
    )
  }

  scrollTo(div){

    return () => {
      var divPosition = $(`.${div}`).offset();

      $('html, body').animate({scrollTop: divPosition.top}, "slow");
    }

  }

  render(){
    return (
      <div className="splash-main" style={{"backgroundColor":"#fdf3f4"}}>

        <div className="home-div">
          <div className="logo">
            <img className="logo-img" src="https://res.cloudinary.com/deeptailor/image/upload/v1479757035/logo-transparent_cx8wyr.png"/>
          </div>

          <div className="nav-bar">
            <ul>
              <li onClick={this.scrollTo('home-div')}>Home</li>
              <li onClick={this.urlPush('gallery')}>Gallery</li>
              <li onClick={this.scrollTo('about')}>About</li>
              <li onClick={this.scrollTo('contact')}>Contact</li>
            </ul>
          </div>

          <div className="icons">
            <a href="https://www.instagram.com/zivabridal/"><img src="https://res.cloudinary.com/deeptailor/image/upload/v1479839827/instagram_fpwbgc.png"/></a>
            <a href="https://www.facebook.com/ZivaBridalBoutique"><img src="https://res.cloudinary.com/deeptailor/image/upload/v1479839827/facebook_mlxyi5.png"/></a>
          </div>
        </div>

        <div className="about">
          <h1>About</h1>
          <div className="about-content">
            <img src='https://scontent.fsnc1-3.fna.fbcdn.net/v/t1.0-9/14955959_1253133534750825_8327740457325082201_n.jpg?oh=730d2a85dd67028440b7c3d256ba1f40&oe=58BD0177'></img>
            <div className="about-text">
              <p>
                Ziva is a South Asian bridal boutique that provides one-on-one appointments for quality designer clothing! Call or email us for your appointment!
              </p>
            </div>
          </div>
        </div>

        <div className="contact">
          <h1>Contact Us</h1>
          <div className='contact-content'>
            <div className="contact-text">
              <div className="appointments">
              <br/>
                <h1>To request an appointment date please fill out the form below:</h1>
                <br/>
                <form action="mailto:zivabridal@gmail.com?subject=ziva%20appointment" method="post" encType="text/plain">
                  Name:<br/>
                  <input type="text" name="name" required/><br/>
                  E-mail:<br/>
                  <input type="email" name="mail" required/><br/>
                  Phone:<br/>
                  <input type="number" name="phone-number" required/><br/>
                  Desired Appointment Date:<br/>
                  <input id="date" type="date" name="appointment-date"/><br/>
                  Additional Info:<br/>
                  <input type="text-box" name="additional-info" size="50"/><br/><br/>
                  <input type="submit" value="Send"/>
                  <input type="reset" value="Reset"/>
                </form>
                <br/>
                <ul>
                  <li>Phone: (847)893-9842</li>
                  <li>Email:&nbsp;<a href="mailto:zivabridal@gmail.com">zivabridal@gmail.com</a></li>
                </ul>
                <br/>
                <div className="location">
                  <h1>Our boutique is located at:</h1>
                  <div>
                    <h1>1604 W.Augusta Ave</h1>
                    <h1>Chicago, IL</h1>
                  </div>
                </div>
              </div>
              <br/>
            </div>
            <div className="map-container">
              <div id='map' ref={ map => this.mapNode = map }></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Splash;
