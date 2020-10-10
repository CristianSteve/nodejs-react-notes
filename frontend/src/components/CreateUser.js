import React, { Component } from 'react'
import Boton from '../component/button';
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users: [],
        username: '',
        name: '',
        lastname: '',
        formOption : 'Save',
        formTitle : 'Crear Usuario'
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: response.data });
    }

    deleteUser = async (id) => {
        axios.delete(`http://localhost:4000/api/users/${id}`);
        this.getUsers();
    }

    onChangeUserName = (e) => {
        console.log(e)
        if (typeof e == "string")
            this.setState({ username: e });
        else
            this.setState({ username: e.target.value });
    }

    onChangeName = (e) => {
        if (typeof e == "string")
            this.setState({ name: e });
        else
            this.setState({ name: e.target.value });
    }

    onChangeLastName = (e) => {
        if (typeof e == "string")
            this.setState({ lastname: e });
        else
            this.setState({ lastname: e.target.value });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username,
            name: this.state.name,
            lastname: this.state.lastname
        }
        )
        this.setState({ username: '',name : '', lastname : '' });
        this.getUsers();

    }

    render() {
        return (
            <div className="row">
                <div className="col md-4">
                    <div className="card card-body">
                        <h3>{this.state.formTitle}</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUserName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.lastname}
                                    onChange={this.onChangeLastName}
                                />
                            </div>
                            <Boton value="Save" classAdd="btn btn-primary col-md"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(
                                user => <li className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={() => { this.deleteUser(user._id) }}
                                    onClick={() => {
                                        this.onChangeUserName(user.username)
                                        this.onChangeName(user.name)
                                        this.onChangeLastName(user.lastname)
                                        this.setState({formOption : 'Edit', formTitle : 'Editar Usuario'})
                                    }}
                                >
                                    {user.username}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
