import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        sent: false,
        buttonText: 'Send Message',

    }


    // handle inputs 

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    // end of handle inputs





    formSubmit = (e) => {
        e.preventDefault();



        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }




        axios.post('/api/form', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log('message not sent');

            })


    }

    // for reseting the form data
    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',

        })

        setTimeout(() => {
            this.setState({
                sent: false,



            })
        }, 3000)
    }




    render() {
        return (
            <div>
                <form id='contact' onSubmit={this.formSubmit}>
                    <h2>For any questions, comments, or special orders please fill out this form and we will get back with you.</h2><br /><br /><br /><br />
                    <div>
                        <input type='text'
                            id='name'
                            name='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleName}
                        />
                    </div><br /><br /><br />
                    <div>
                        <input type='text'
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleEmail}
                            required
                        />
                    </div><br /><br /><br />
                    <div>
                        <textarea type='text'
                            id='message'
                            name='message'
                            placeholder='Message'
                            value={this.state.message}
                            onChange={this.handleMessage}></textarea>
                    </div><br /><br />
                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}><h3>Message sent</h3></div><br />
                    <button type='submit' className='btn' >Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;