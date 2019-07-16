import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function LandingPage(){
React.useEffect(() => {
  document.body.classList.add("landing-page");
  document.body.classList.add("sidebar-collapse");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  };
});
  return (
    <>
      <html lang="en">
<head>
<meta charset="utf-8">
</meta>
<link href="../assets/img/apple-icon.png" rel="apple-touch-icon" sizes="76x76">
</link>
<link href="../assets/img/favicon.png" rel="icon" type="image/png">
</link>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
</meta>
<title>
 Now UI Kit by Creative Tim 
</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport">
</meta>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet">
</link>
<link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" rel="stylesheet">
</link>
<link href="../assets/css/bootstrap.min.css" rel="stylesheet">
</link>
<link href="../assets/css/now-ui-kit.css?v=1.3.0" rel="stylesheet">
</link>
<link href="../assets/demo/demo.css" rel="stylesheet">
</link>
</head>
<body className="landing-page sidebar-collapse">
<Navbar className="bg-primary fixed-top navbar-transparent" color-on-scroll="400" expand="lg">
<Container>
<UncontrolledDropdown className="button-dropdown">
<DropdownToggle caret color="default" data-toggle="dropdown" href="#pablo" id="navbarDropdown" onClick={e =>
 e.preventDefault()}>
<span className="button-bar">
</span>
<span className="button-bar">
</span>
<span className="button-bar">
</span>
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdown">
<DropdownItem header>
Dropdown header
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Another action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Something else here
</DropdownItem>
<DropdownItem divider>
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Separated link
</DropdownItem>
<DropdownItem divider>
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
One more separated link
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
<div className="navbar-translate">
<NavbarBrand data-placement="bottom" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="noopener noreferrer" target="_blank" title="Designed by Invision. Coded by Creative Tim">
 Now Ui Kit 
</NavbarBrand>
<button aria-controls="navigation-index" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler navbar-toggler" data-target="#navigation" data-toggle="collapse" id="navigation" type="button">
<span className="navbar-toggler-bar top-bar">
</span>
<span className="navbar-toggler-bar middle-bar">
</span>
<span className="navbar-toggler-bar bottom-bar">
</span>
</button>
</div>
<UncontrolledCollapse className="justify-content-end" data-nav-image="../assets/img/blurred-image-1.jpg" id="navigation" navbar toggler="#navigation">
<Nav navbar>
<NavItem>
<NavLink href="../index.html">
Back to Kit
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/now-ui-kit/issues">
Have an issue?
</NavLink>
</NavItem>
<NavItem>
<NavLink data-placement="bottom" href="https://twitter.com/CreativeTim" rel="noopener noreferrer" target="_blank" title="Follow us on Twitter">
<i className="fab fa-twitter">
</i>
<p className="d-lg-none d-xl-none">
Twitter
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-placement="bottom" href="https://www.facebook.com/CreativeTim" rel="noopener noreferrer" target="_blank" title="Like us on Facebook">
<i className="fab fa-facebook-square">
</i>
<p className="d-lg-none d-xl-none">
Facebook
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" rel="noopener noreferrer" target="_blank" title="Follow us on Instagram">
<i className="fab fa-instagram">
</i>
<p className="d-lg-none d-xl-none">
Instagram
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<div className="wrapper">
<div className="page-header page-header-small">
<div className="page-header-image" data-parallax={true} style={{backgroundImage: "url('../assets/img/bg6.jpg')",}}>
</div>
<div className="content-center">
<Container>
<h1 className="title">
This is our great company.
</h1>
<div className="text-center">
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-facebook-square">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-google-plus">
</i>
</Button>
</div>
</Container>
</div>
</div>
<div className="section section-about-us">
<Container>
<Row>
<Col className="ml-auto mr-auto text-center" md="8">
<h2 className="title">
Who we are?
</h2>
<h5 className="description">
According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.
</h5>
</Col>
</Row>
<div className="separator separator-primary">
</div>
<div className="section-story-overview">
<Row>
<Col md="6">
<div className="image-container image-left" style={{backgroundImage: "url('../assets/img/login.jpg')}}>
<p className="blockquote blockquote-primary">
"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly" <br>
</br>
<br>
</br>
<small>
-NOAA
</small>
</p>
</div>
<div className="image-container" style={{backgroundImage: "url('../assets/img/bg3.jpg')}}>
</div>
</Col>
<Col md="5">
<div className="image-container image-right" style={{backgroundImage: "url('../assets/img/bg1.jpg')}}>
</div>
<h3>
So what does the new record for the lowest level of winter ice actually mean
</h3>
<p>
The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice. 
</p>
<p>
 For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade. 
</p>
<p>
The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice. 
</p>
</Col>
</Row>
</div>
</Container>
</div>
<div className="section section-team text-center">
<Container>
<h2 className="title">
Here is our team
</h2>
<div className="team">
<Row>
<Col md="4">
<div className="team-player">
<img alt="..." className="rounded-circle img-fluid img-raised" src={require("assets/img/avatar.jpg")}>
</img>
<h4 className="title">
Romina Hadid
</h4>
<p className="category text-primary">
Model
</p>
<p className="description">
You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#pablo" onClick={e =>
 e.preventDefault()}>
links
</a>
 for people to be able to follow them outside the site.
</p>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-instagram">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-facebook-square">
</i>
</Button>
</div>
</Col>
<Col md="4">
<div className="team-player">
<img alt="..." className="rounded-circle img-fluid img-raised" src={require("assets/img/ryan.jpg")}>
</img>
<h4 className="title">
Ryan Tompson
</h4>
<p className="category text-primary">
Designer
</p>
<p className="description">
You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#pablo" onClick={e =>
 e.preventDefault()}>
links
</a>
 for people to be able to follow them outside the site.
</p>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-linkedin">
</i>
</Button>
</div>
</Col>
<Col md="4">
<div className="team-player">
<img alt="..." className="rounded-circle img-fluid img-raised" src={require("assets/img/eva.jpg")}>
</img>
<h4 className="title">
Eva Jenner
</h4>
<p className="category text-primary">
Fashion
</p>
<p className="description">
You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#pablo" onClick={e =>
 e.preventDefault()}>
links
</a>
 for people to be able to follow them outside the site.
</p>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-google-plus">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-youtube">
</i>
</Button>
<Button className="btn-icon btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
</Button>
</div>
</Col>
</Row>
</div>
</Container>
</div>
<div className="section section-contact-us text-center">
<Container>
<h2 className="title">
Want to work with us?
</h2>
<p className="description">
Your project is very important to us.
</p>
<Row>
<Col className="text-center ml-auto mr-auto" lg="6" md="8">
<InputGroup className="input-lg">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons users_circle-08">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="First Name..." type="text">
</Input>
</InputGroup>
<InputGroup className="input-lg">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons ui-1_email-85">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Email..." type="text">
</Input>
</InputGroup>
<div className="textarea-container">
<Input cols="80" name="name" placeholder="Type a message..." rows="4">
</Input>
</div>
<div className="send-button">
<Button block className="btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()} size="lg">
Send Message
</Button>
</div>
</Col>
</Row>
</Container>
</div>
<footer className="footer footer-default">
<Container>
<nav>
<ul>
<li>
<a href="https://www.creative-tim.com">
 Creative Tim 
</a>
</li>
<li>
<a href="http://presentation.creative-tim.com">
 About Us 
</a>
</li>
<li>
<a href="http://blog.creative-tim.com">
 Blog 
</a>
</li>
</ul>
</nav>
<div className="copyright" id="copyright">
 © <script>
 document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear())) 
</script>
, Designed by <a href="https://www.invisionapp.com" rel="noopener noreferrer" target="_blank">
Invision
</a>
. Coded by <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
Creative Tim
</a>
. 
</div>
</Container>
</footer>
</div>
<script src="../assets/js/core/jquery.min.js" type="text/javascript">
</script>
<script src="../assets/js/core/popper.min.js" type="text/javascript">
</script>
<script src="../assets/js/core/bootstrap.min.js" type="text/javascript">
</script>
<script src="../assets/js/plugins/bootstrap-switch.js">
</script>
<script src="../assets/js/plugins/nouislider.min.js" type="text/javascript">
</script>
<script src="../assets/js/plugins/bootstrap-datepicker.js" type="text/javascript">
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE">
</script>
<script src="../assets/js/now-ui-kit.js?v=1.3.0" type="text/javascript">
</script>
</body>
</html>

    </>
  );
}

export default LandingPage;