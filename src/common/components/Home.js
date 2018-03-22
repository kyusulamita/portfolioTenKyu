import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h2 className="post-title">I aspire to build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> code where ever life may take me.</h2>


			</div>

		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>Semantic-UI</em></li>
						<li><em><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>SQL</em></li>
            <li><em>GraphQl</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
								<li><em>Sequelize</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Jasmine</em></li>
						<li><em>Chai</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Heroku</em></li>
					</ul>
				</div>
        </div>


        <div className="post clearfix">
        <h2>Other Interests: </h2>

        <div className="skill-item clearfix">
          <h4>Game Development</h4>
          <ul className="clearfix">
            <li><em>C++</em></li>
            <li><em>C#</em></li>
            <li><em>Unity</em></li>
          </ul>
        </div>

        <div className="skill-item clearfix">
          <h4>In process</h4>
          <ul className="clearfix">
            <li><em>Angular</em></li>
            <li><em>Docker</em></li>
          </ul>
        </div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/kyusulamita/portfolioTenKyu">github repo here</a>.</em><br/>
				</div>

  			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;
