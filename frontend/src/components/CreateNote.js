import Axios from 'axios'
import Boton from '../component/button';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

    state = {
        users : [],
        userSelected : '',
        title : '',
        content : '',
        date : new Date()
    }

    async componentDidMount(){
        const res = await Axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.map(user => user.username)});
    }

    onSubmit = e => {
        e.preventDefault();
    }

    oninputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <h5 className="card-header">
                        Crear una Nota
                    </h5>
                
                <div className="card-body">
                        <div className="form-group">
                            <select className="form-control"
                            name="userSelected"
                            onChange={this.oninputChange}>
                                {
                                    this.state.users.map(user => 
                                    <option key={user} value={user}>
                                        {user}
                                    </option>)
                                }

                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="title" 
                                name="title" 
                                required
                                onChange={this.oninputChange}/>
                        </div>
                        <div className="form-group">
                            <textarea name="content" 
                                className="form-control" 
                                placeholder="content" 
                                required
                                onChange={this.oninputChange}>
                            </textarea>
                        </div>
                        <div className="form-group">
                            <DatePicker className="form-control"
                                selected={this.state.date}/>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <Boton value="Save" classAdd="btn btn-primary col-md"/>
                        </form>
                        
                </div>
                </div>

            </div>
        )
    }
}
