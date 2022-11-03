import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className='box'>
                <div className='introbox'>
                    <h3>Hello Everyone</h3>
                    <h3>I'am Shruti Sharma</h3>
                    <p>Every news picture must earn its space on the page. That means that it must tell the story clearly, without needing people to read the story first in order to understand what the picture is all about. In other words, every news picture must have meaning. A picture of a man pointing at a broken window means nothing.
</p>
                    <img src='about.jpg'alt='oh'width="180px;"height="300px"/>
                        <button class="button-1"type='WebDeveloper'>WebDeveloper</button>
                        <button class="button-2"type='Coder'>Coder</button>
                        <button class="button-3"type='Intern'>Intern</button>
                   
                </div>

            </div>    
        );
    }
}

export default About;