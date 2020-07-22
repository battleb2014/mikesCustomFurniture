import React from 'react';

const Contact = () => {
    return (
        <form id='contact' method='POST'>
            <h2>For any questions, comments, or concerns please fill out this form and we will get back with you.</h2><br /><br /><br /><br />
            <div>
                <label for='name'>Name</label><br />
                <input type='text' id='name'></input>
            </div><br /><br /><br />
            <div>
                <label for='inputEmail'>Email</label><br />
                <input type='text' id='email'></input>
            </div><br /><br /><br />
            <div>
                <label for='message'>Message</label><br />
                <textarea type='text' id='message'></textarea>
            </div><br /><br />
            <button type='submit' className='btn'>Submit</button>
        </form>
    );
}

export default Contact;