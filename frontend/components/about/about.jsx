import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import PortfolioIcon from '@material-ui/icons/';
import EmailIcon from '@material-ui/icons/EmailOutlined';

const About = () => (
    <div className='about-me'>
        <div className='about-top'>
            <div className='portfolio-image'>
                <img 
                    // src={process.env.PUBLIC_URL + '/author-image.png'} 
                    alt=""
                />
            </div>
            <div className='portfoliolinks'>
                <ul>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/in/kevinkusky/"><LinkedInIcon /></a>
                    </li>
                    <li><GithubIcon /></li>
                    <li><EmailIcon />: KevinKusky@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='about-bottom'>
            <p></p>
        </div>
    </div>
);

export default About;