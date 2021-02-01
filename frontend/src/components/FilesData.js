import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class FilesData extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.Imagedata}</td>
                <td><Button variant="danger" delete-url={"/core/filedelete/"+ this.props.deleteid} onClick={this.props.OnhandleDelete}>Delete</Button></td>
            </tr>
        )
    }
}
