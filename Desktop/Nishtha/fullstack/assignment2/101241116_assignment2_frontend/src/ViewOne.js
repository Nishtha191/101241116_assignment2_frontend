import React, { Component } from 'react'
import axios from 'axios';
const url = '';

export default class ViewOne extends Component {

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

    onChangeFirstName = (employee) => {
        this.setState({
            firstName: employee.target.value
        })
    }

    onChangeLastName = (employee) => {
        this.setState({
            lastName: employee.target.value
        })
    }
    onChangeEmailid = (employee) => {
        this.setState({
            emailid: employee.target.value
        })
    }
    onSubmit = (employee) => {

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
                <h3>Employee Details</h3>
                <br />
                            <div className="col-6">

                                <div >
                                    <strong> First Name :</strong> {this.state.firstName}
                                </div>

                                <div >
                                    <strong>Last Name : </strong>{this.state.lastName}
                                </div>
                                <div >
                                    <strong> Email : </strong>{this.state.emailid}
                                </div>
                            </div>
                                                
                  
                <a href="/view"><button className="btn" >OK</button> </a>

           </div>
        )
    }
}