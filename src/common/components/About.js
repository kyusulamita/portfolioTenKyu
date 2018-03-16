import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p>I went to University of Michigan and while there I studied Spanish and Computer Science. After college I started teaching, first as an ESL(English as a Second Language) in the USA, and then as an EFL(English as a Foreign Language) teacher in Guatemala. My focus wasn't just on teaching students the material but in fostering a love for the learning process.</p>

            <p>Coming back to States I wanted to do Teach For America, but in an interesting twist of fate I ended up remotely attending a Web Development Bootcamp instead. After the Bootcamp was over, I was invited to join the program as a fellow, a mentor for new students. I got to combine two of my favorite things in life, teaching and programming! I worked as a fellow at Fullstack Academy for the duration of the contract and mentored students in how to use React, Redux, Webpack, Node, Sequelize, Firebase, and so much more.</p>

      	  	<p>While a fellow I was invited to be a part time instructor for some of the beginner JS courses that Fullstack Academy teaches, and I continue doing that even now! </p>
            <p>So then what am I doing when I'm not teaching? I'm learning, I'm currently trying to understand docker and hoping to use it for a small project. I'm also practicing what I've learned, I'm making a small Quickbooks clone that I hope to make into a phone app for others to use. Even more exciting I'm looking for a place to take my passion and dedication! Currently I'm on the job search, so if you like what you see please don't hesitate to contact me :) I promise I don't bite</p>

      	  	<h3>About This Site</h3>

      	  	<p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser) which has the advantage of initially rendering quicker and being indexed by search engines.</p>
      	  	<p>This small site was built to challenge things that I think I needed to work on a little more, like CSS and to put myself out there so people could take a look at my work</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/kyusulamita?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
          <h5> Hoping to make this bigger soon! </h5>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results.slice(0,6)} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
