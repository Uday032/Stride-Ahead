import React, { Component } from 'react'

import {Form, Button, Col} from 'react-bootstrap'

import instance from '../axios'

export default class uploadfileform extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            file: null,
            success: '',
            error: ''
        }
    }

    onChangeHandler = event => {
        this.setState({
            file: event.target.files[0]
        })
        // console.log(event.target.files[0]);
        // console.log(this.state.file);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log("submitted", e);
        const formData = new FormData();
        formData.append('attachment', this.state.file);
        
        instance.post('/core/fileupload/', formData)
            .then(res => {
                console.log(res);
                if(res.data.message==="File created"){
                    this.setState({
                        success: "File Created.  Please Reload the Page to check"
                    })
                }
            })
    }


    render() {
        return (
            <Form className="mt-4" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Upload File:</Form.File.Label>
                    <Form.File.Input onChange={this.onChangeHandler} required/>
                    </Form.File>
                </Form.Group>
                <Button type="submit" className="ml-2">
                    Submit
                </Button>

                <Form.Row className="mt-2">
                    <Col xs="auto">
                        <span className="text-success">{this.state.success}</span>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
