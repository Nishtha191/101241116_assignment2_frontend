import React, { Component } from 'react'
import axios from 'axios';
import './App.css'

const url = ''

export default class Update extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailid: '',
            employee: []
        }
    }


    componentDidMount = () => {
        axios.get(url + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailid: response.data.emailid
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(url)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        employee: response.data.map(employee => employee.firstName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    changeFirstName = (employee) => {
        this.setState({
            firstName: employee.target.value
        })
    }

    changeLastName = (employee) => {
        this.setState({
            lastName: employee.target.value
        })
    }
    changeEmailid = (employee) => {
        this.setState({
            emailid: employee.target.value
        })
    }
    submit = (employee) => {

        const employeeName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailid: this.state.emailid
        }

        console.log(employeeName);

        axios.put(url + this.props.match.params.id, employeeName)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <div className="col-6">
                            <h1>Create Employee Detail</h1>
                                <form onSubmit={this.submit} action="/view">
                                    <div className="form-group">
                                        <label>First Name </label>
                                        <input
                                            type="text"
                                            required
                                            value={this.state.firstName}
                                            onChange={this.changeFirstName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name </label>
                                        <input
                                            type="text"
                                            required
                                            value={this.state.lastName}
                                            onChange={this.changeLastName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email </label>
                                        <input type="text"
                                            required
                                            value={this.state.emailid}
                                            onChange={this.changeEmailid}
                                        />
                                    </div>
                                        <input type="submit" value="Submit" className="btn" />
                                        <a href="/view"><button className="btn" >Cancel</button> </a>
                                </form>                          

                            </div>
                        </div>
                
        )
    }
}