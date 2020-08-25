import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortfolioIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/EmailOutlined';

class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 'kevinkusky@gmail.com',
            copied: false
        };
    }

    // componentDidMount(){ 
    //     this.copyText();
    // }

    // copyText(){
    //     let email = document.getElementsByClassName('about-email')[0].value;

    //     email.select();
    //     document.execCommand('copy');
    // }

    render(){
        const emailText = () =>(
            this.state.copied ? 'copied-email' : 'about-email'
        );
        return(
            <div className='about-me'>
                <div className='about-top'>
                    <div className='portfolio-image'>
                        <img className='portfolio-image' src={window.heroURL}/>
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
                        <div className='about-link-item'>
                            <CopyToClipboard 
                                text={this.state.value}
                                onCopy={()=> this.setState({copied: true})}
                            >
                                <button className='copy-button'>
                                    <EmailIcon className='about-icon' />
                                </button>
                            </CopyToClipboard>
                            <input type='text' value={this.state.value} className={emailText()}></input>
                        </div>
                    </div>
                </div>
                <div className='about-bottom'>
                    <p className='about-paragraph'>
                        My Name is Kevin - I'm a Software Engineer and recent graduate of App Academy.
                        <br />  
                        Prior to becoming a Software Engineer, I graduated with a bachelors in Math and spent 6 years in the operations and compliance worlds of Finance.
                        <br /> 
                        I hope you are enjoying your visit to the clone I made, as well as the videos that have been uploaded to the site.
                        <br /> 
                        Please feel free to contact me or to view my portfolio.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;