import React, { Component } from 'react'
import {Table, Image} from 'react-bootstrap'
import FilesData from './FilesData'
//AXIOS
import instance from '../axios'

export default class ShowFiles extends Component {
    constructor(){
        super();

        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            Imagedata: [],
            deletestatus: ''
        }
    }
    
    handleDelete(e){
        e.preventDefault();
        let deleteurl = e.target.getAttribute('delete-url')

        instance.post(deleteurl)
        .then((res)=> {
            console.log(res.data);
            if(res.data.message === "File Deleted"){
                this.setState({
                    deletestatus: "File Deleted. Please Reload the Page to check"
                })
            }
        })
    }
    componentDidMount() {
        instance.get('/core/fileupload/')
            .then(res => {
                console.log(res);
                this.setState({
                    Imagedata: res.data
                })
            })
    }

    render() {
        return (
            <>
                <Table className="mt-4" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.Imagedata.map((list) => { 
                                return list.attachment.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|)$/) ?
                                    <FilesData 
                                        key={list.id}
                                        Imagedata= {<Image src={"http://localhost:8000"+list.attachment} height="100px" width="auto" />}
                                        deleteid = {list.id}
                                        OnhandleDelete = {this.handleDelete}
                                    />
                                    :
                                    <FilesData 
                                        key={list.id}
                                        Imagedata= {<a href={"http://localhost:8000"+list.attachment}>{list.attachment}</a>}
                                        deleteid = {list.id}
                                        OnhandleDelete = {this.handleDelete}
                                    />
                                }
                            )
                        }
                    </tbody>
                </Table>
                <div>
                    <span className="text-success">{this.state.deletestatus}</span>
                </div>
            </>
        )
    }
}
