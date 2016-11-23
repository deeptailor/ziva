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
            <li><img src="https://n4.sdlcdn.com/imgs/b/g/i/Kesar-Sarees-Green-Faux-Georgette-SDL879067026-1-f3854.jpg"></img></li>
            <li><img src="http://img4.utsavfashion.com/syc/syc4718/syc4718-enlarge.jpg"></img></li>
            <li><img src="http://im.rediff.com/fashion/2015/jan/pink-white-floral-designer-georgette-party-wear-saree-with-blouse-15901.jpg"></img></li>
            <li><img src="https://n4.sdlcdn.com/imgs/a/v/s/Shree-Ambey-Designer-Sarees-Faux-SDL401688101-1-5dfe7.jpg"></img></li>
            <li><img src="https://images.cbazaar.com/images/prd_img_b/beige-n-salmon-orange-net-lehenga-saree-sacvp5493-b.jpg"></img></li>
            <li><img src="http://img4.utsavfashion.com/syc/syc4718/syc4718-enlarge.jpg"></img></li>
            <li><img src="https://images.cbazaar.com/images/off-white-n-magenta-printed-half-n-half-saree-sacvi19920-pl.jpg"></img></li>
            <li><img src="https://s-media-cache-ak0.pinimg.com/originals/80/0b/b6/800bb6ff822913998adceccb1a1260aa.jpg"></img></li>
            <li><img src="http://static.indiarush.com/media/catalog/product/cache/1/small_image/350x350/9df78eab33525d08d6e5fb8d27136e95/r/v/rvcg01-07oct16.jpg"></img></li>
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
