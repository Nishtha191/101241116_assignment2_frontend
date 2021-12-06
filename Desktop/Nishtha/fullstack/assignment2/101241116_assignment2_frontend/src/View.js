import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const url = ''


const Employees = props => (



    <tbody>
        <tr>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.emailid}</td>
            <td>
                <Link to={"/update/" + props.employee._id} ><button >Update</button></Link>
                <Link to={"/view"}  >
                    <button  onClick={(e) => { props.deleteEmployee(props.employee._id) }}>Delete</button>
                </Link>
                <Link to={"/viewone/" + props.employee._id} ><button>View</button></Link>
            </td>

        </tr>
    </tbody>
)


export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = { employee: [] };
    }



    componentDidMount() {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch((error) => {
                console.log(error);
            })


    }
    employeesList() {
        return this.state.employee.map(emp => {
            return <Employees className="card-deck card" employee={emp} key={emp._id} deleteEmployee={this.deleteEmployee} />;
        })
    }


    deleteEmployee(id) {

        axios.delete(url + id)
            .then(response => { console.log(response.data) });

        window.location.reload(false);
    }



    render() {
        return (
            <div>

                <br /><br /><br />
                <h1>List of  Employee</h1>
                <br />
                <Link to={"/create"} ><button>Create</button></Link>
                <br /><br />
                            <div>

                                <table className="table table-striped">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {this.employeesList()}
                                </table >
                            </div>
                            <div className="col">
                            </div>
                        </div>
        )
    }
}