import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: ' ',
            email: ' ',
            message: ' '
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id='contact' method='POST' >
                <h2>For any questions, comments, or concerns please fill out this form and we will get back with you.</h2><br /><br /><br /><br />
                <div>
                    <label for='name'>Name</label><br />
                    <input type='text' id='name' name='name' onChange={this.handleChange} />
                </div><br /><br /><br />
                <div>
                    <label for='inputEmail'>Email</label><br />
                    <input type='text' id='email' name='email' onChange={this.handleChange}></input>
                </div><br /><br /><br />
                <div>
                    <label for='message'>Message</label><br />
                    <textarea type='text' id='message' name='message' onChange={this.handleChange}></textarea>
                </div><br /><br />
                <button type='submit' className='btn'>Submit</button>
            </form>
        );
    }
}

export default Contact;