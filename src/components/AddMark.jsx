import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddMark = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "rollno": "",
            "total_mark": "",
            "grade": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3000/api/mark/add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Sucessfully added")
                    setInput(
                        {
                            "name": "",
                            "rollno": "",
                            "total_mark": "",
                            "grade": ""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll no</label>
                                <input type="text" className="form-control" name='rollno' value={input.rollno} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total mark</label>
                                <input type="text" className="form-control" name='total_mark' value={input.total_mark} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Grade</label>
                                <input type="text" className="form-control" name='grade' value={input.grade} onChange={inputHandler} />
                            </div>
                            
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddMark