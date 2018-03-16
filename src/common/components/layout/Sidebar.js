import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">
      <div className="sidebar-item sidebar-footer">

        <p>
          Travel to different parts of the website.
        </p>

      </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Portfolio</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				Visit <a href="https://github.com/kyusulamita">My GitHub Repo</a><br/>
				Visit <a href="https://www.linkedin.com/in/sulamita">My Linkedin</a><br/>
				That's all the social media I have! Feel free to share your twitter handle with me though.
		    </p>
          <small>This site with Redux and React! You can get the <a href="https://github.com/kyusulamita/portfolioTenKyu">source code here.</a></small>
		    <p>

		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;
