/*import logo from './logo.svg';*/
import './App.css';
/*import { Fragment } from 'react';*/

function App() {
  return (
  <fragment>
      <nav className="navbar1">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">LAND OF ARCHITECTURE</a>
          </div>

          <div className="icon">
            <img src="office copy 2/ghana.png" alt='office copy' className="icon1" />
            <img src="office copy 2/united-states.png" alt="office copy" className="icon1" />
            <img src="office copy 2/south-korea.png" alt='office copy' className="icon1" />
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">ABOUT US</a></li>
          </ul>

        </div>
      </nav>

      <div className="container-fluid">
	<div className="row">
		<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src="office copy 2/office1.jpg" alt="office" style={{height:"500px", width: "100%"}}/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    <div className="item">
      <img src="office copy 2/office2.jpg" alt="office" style={{height:"500px", width: "100%"}}/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
   <div className="item">
      <img src="office copy 2/office3.jpg" alt="office" style={{height:"500px", width: "100%"}}/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
   ...
  </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
		
	</div>
	
</div>

<div className="container">
	<div className="row sk">
		<h3 className="text-center">PLANS</h3>

		<div className="col-md-3">
    <div className="thumbnail">
      <img src="office copy 2/office5.jpg" alt="office" className="img-responsive" style={{height: "175px", width: "100%;"}}/>
      <div className="caption">
        <h3>COUSTOMISED OFFICES</h3>
        <p>Our customised offices offer a great location for your business 
            and you office to suit your preferences.Also, you become a member of our community with
            benefits such as access to our meeting rooms. </p>
        
      </div>
    </div>
	</div>

	<div className="col-md-3">
    <div className="thumbnail bts">
      <img src="office copy 2/office4.jpg" alt="office" className="img-responsive" style={{height: "200px", width: "100%;"}} />
      <div className="caption">
        <h3>VIRTUAL OFFICES</h3>
        <p>Our virtual offices allow your business to get our location 
              address, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms. </p>
        
      </div>
    </div>
	</div>

	<div className="col-md-3">
    <div className="thumbnail">
      <img src="office copy 2/office6.jpg" alt="office" className="img-responsive" style={{height: "165px", width: "100%;"}}/>
      <div className="caption">
        <h3>SERVICED OFFICES</h3>
        <p>Our serviced offices offer a great location for your business and we provide services such as internet,utilities and others from our partners. Also you become a memeber of our community with benefits such as access to our meeting rooms.</p>
        
      </div>
    </div>
	</div>

	<div className="col-md-3">
    <div className="thumbnail">
      <img src="office copy 2/office7.jpg" alt="office" className="img-responsive" style={{height: "165px", width: "100%;"}}/>
      <div className="caption">
        <h3>MEETING ROOMS</h3>
        <p>Our meeting rooms offer a great location for your meeting with your clients or business partners We provide presentations equipments and coffee. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
        
      </div>
    </div>
</div>

</div>

</div>

      <div className="container-fluid">
        <div className="footer">
          <div className="row">

            <div className="col-md-12">
              <div className="col-md-4">
                <h4>VISIT US</h4>
                <h6>Accra,Ghana</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quo enim nihil, facere veniam iste
                </p>
              </div>
              <div className="col-md-4">
                <h4>CONTACT US</h4>
                <p>+233 24 309 1986<img src="office copy 2/ghana.png" alt="office copy"className="icon1" /></p>
                <p>+1 570 870 1234<img src="office copy 2/united-states.png" alt='office copy' className="icon1" /></p>
                <p>+82 424 678 9975 <img src="office copy 2/south-korea.png" alt='office copy' className="icon1" /></p>

              </div>
              <div className="col-md-4">
                <h4>VISIT OUR SOCIALS</h4>
                <p>LOAHT- FACEBOOK</p>
                <p>LOAHT@- INSTAGRAM</p>
                <p>LOAHT- TWITTER</p>

              </div>
            </div>

          </div>
        </div>
      </div>

      </fragment>

		
		
	
	

    
  );
}

export default App;
