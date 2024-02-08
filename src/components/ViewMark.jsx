import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewMark = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3000/api/mark/viewall").then(
            (response) => {
                setData(response.data)

            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll no</th>
                                    <th scope="col">Total mark</th>
                                    <th scope="col">Grade</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.name}</td>
                                                <td>{value.rollno}</td>
                                                <td>{value.total_mark}</td>
                                                <td>{value.grade}</td>

                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMark
