import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import PortfolioIcon from '@material-ui/icons/';
import EmailIcon from '@material-ui/icons/EmailOutlined';

const About = () => (
    <div className='about-me'>
        {/* <img className='portfolio-image' src="app/assets/images/author-image.png" alt=""/> */}
        <div className='portfolio=links'>
            <ul>
                <li><LinkedInIcon /></li>
                <li><GithubIcon /></li>
                <li><EmailIcon />: KevinKusky@gmail.com</li>
             </ul>
        </div>
    </div>
);

export default About;