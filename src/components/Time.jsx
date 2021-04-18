import React from 'react';
import { Apiurl } from '../services/apirest'
import '../assets/css/Time.css'
import axios from 'axios';

class Time extends React.Component {

    state = {
        form: {
            "time": "",
            "timezone": ""
        },
        response: {},
        status: false,
        error: false,
        errormsg: ""
    }

    manjadorSubmit = e => {
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    manejadorBoton = () => {
        let url = Apiurl + "time";
        axios.post(url, null, {
            params: {
                "time": this.state.form.time,
                "timezone": this.state.form.timezone
            }
        })
            .then(response => {
                this.setState({
                    response: response.data.response,
                    status: true,
                    error: false
                })
            }).catch(error => {
                this.setState({
                    errorMsg: "Error",
                    error: true
                })
            })
    }

    render() {
        return (
            <React.Fragment>



                <div className="container">

                    <div>
                        <label className="lbl">Ej Time: 00:00:00</label>
                        <label >Ej Timezone: -2</label>
                    </div>

                    <div id="formContent">
                        <form onSubmit={this.manjadorSubmit}>
                            <input type="text" className="" name="time" placeholder="Time" onChange={this.manejadorChange} />
                            <input type="text" className="" name="timezone" placeholder="Timezone" onChange={this.manejadorChange} />
                            <input type="submit" className="btn btn-secondary" value="Enviar" onClick={this.manejadorBoton} />
                        </form>
                    </div>



                    {this.state.status === true &&
                        <div className="form-group result">
                            <label >Time:</label>
                            <label >{this.state.response.time}</label>
                            <br />
                            <label >Timezone(UTC):</label>
                            <label >{this.state.response.timezone}</label>
                        </div>
                    }

                    {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                            {this.state.errorMsg}
                        </div>
                    }
                </div>

            </React.Fragment>
        );
    }
}

export default Time