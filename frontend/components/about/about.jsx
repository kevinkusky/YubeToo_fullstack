import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortfolioIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/EmailOutlined';

const About = () => (
    <div className='about-me'>
        <div className='about-top'>
            <div className='portfolio-image'>
                <img 
                    src={window.heroURL}
                />
            </div>
            <div className='portfoliolinks'>
                <div className='about-link-item'>
                    <a target='_blank' href="https://kevinkusky.github.io/"><PortfolioIcon className='about-icon'/></a>
                </div>
                <div className='about-link-item'>
                    <a target='_blank' href="https://www.linkedin.com/in/kevinkusky/"><LinkedInIcon className='about-icon'/></a>
                </div>
                <div className='about-link-item'>
                    <a target='_blank' href="https://github.com/kevinkusky"><GithubIcon className='about-icon'/></a>
                </div>
                <div className='about-link-item'><EmailIcon className='about-icon'/><span>: KevinKusky@gmail.com</span></div>
            </div>
        </div>
        <div className='about-bottom'>
            <p className='about-paragraph'>Hello, I am a bio that will be filled out shortly with words - such very cool,
                awesome, persuasive words that will make you hire me.
            </p>
        </div>
    </div>
);

export default About;