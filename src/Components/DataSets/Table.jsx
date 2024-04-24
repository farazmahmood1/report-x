import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {

    const [data, setData] = useState([])
    const [allData, setAllData] = useState([])

    const [pages, setPages] = useState(1);
    const [count, setCount] = useState('');
    const resultsPerPage = 50;

    // function for getting page next:
    const handleNextPage = () => {
        setPages((prevPage) => prevPage + 1);
    };
    // function for getting previous page:
    const handlePrevPage = () => {
        setPages((prevPage) => Math.max(prevPage - 1, 1));
    };
    const totalResults = count || 0;
    const startResult = (pages - 1) * resultsPerPage + 1;
    const endResult = Math.min(pages * resultsPerPage, totalResults);

    useEffect(() => {
        getData()
    }, [])

    const getData = (e, attr) => {

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 8|JE5SHg4ESU5vBkiwpdGp4Fzli7dpulcsrlLbfVPz18b952af");
        myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjI2ekFNNFlhVEZOSWlqazhoUUZpQ1E9PSIsInZhbHVlIjoiSklCdUpHTkUvUURnTDBwTmVkWi9obFpwQ202eUZwMFhmNFcyQkh0LzlFNnRJR1JmTk5UV1JvTE1VdlV5QmI5OUVMT1VsaFRVcU82V2lNMkI2dy9yTkY5WTVwaWZrUjd1ZkxBRDZaNmtrQ2IvY2FvUFFtaHJVVVNTQTdkV0VucVMiLCJtYWMiOiI2NGZhMmFmOTUyOGMwYWFjNjkzY2VlNDJiODBkNDljNmU0YTVlZDNmNDJhMWYxMGFmNDIwYWQ4OGFmZjMwMDE0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjRmL0pjbGh0K3JFaG1PeElDOTZqU3c9PSIsInZhbHVlIjoiYVk5TXRBUFF6RVdEeFhZN2VUWGxNeXphbWtlbjZFZWFIREp5Q05MOElpMFNrckMySUcwbGVxcFhWdmNZSmduUHJnWHh0R3ZoZXV0UXV2L1hNM1A1U3ZLWjZUaS90V2pyNFAwbXJCRldVeC9meDR4ODI1SHpqN1g4TWpBMFNLRWkiLCJtYWMiOiI4NDRjYjQ4ZDQ1YjE2NjM3ZDQ3OWQ2NzQyZjY5NDM0NTJlY2E0ZWE4NzM3N2YwMWJkZjk1Njk2Y2NlOTZiYjE3IiwidGFnIjoiIn0%3D");

        const formdata = new FormData();
        if (attr === "age") {
            formdata.append("age", e.target.value);
        }
        else if (attr === "country") {
            formdata.append("country", e.target.value);
        }
        else if (attr === "gender") {
            formdata.append("gender", e.target.value);
        }
        else if (attr === "goal") {
            formdata.append("goal", e.target.value);
        }
        else {

        }

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            body: formdata,
        };

        fetch(`https://apis.reportsxapis.com/api/get_general_data?page=${pages}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setData(result.data)
                setCount(result.total_count)
                // console.log(result)

            })
            .catch((error) => console.error(error));
    }

    const exportData = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 8|JE5SHg4ESU5vBkiwpdGp4Fzli7dpulcsrlLbfVPz18b952af");
        myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjI2ekFNNFlhVEZOSWlqazhoUUZpQ1E9PSIsInZhbHVlIjoiSklCdUpHTkUvUURnTDBwTmVkWi9obFpwQ202eUZwMFhmNFcyQkh0LzlFNnRJR1JmTk5UV1JvTE1VdlV5QmI5OUVMT1VsaFRVcU82V2lNMkI2dy9yTkY5WTVwaWZrUjd1ZkxBRDZaNmtrQ2IvY2FvUFFtaHJVVVNTQTdkV0VucVMiLCJtYWMiOiI2NGZhMmFmOTUyOGMwYWFjNjkzY2VlNDJiODBkNDljNmU0YTVlZDNmNDJhMWYxMGFmNDIwYWQ4OGFmZjMwMDE0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjRmL0pjbGh0K3JFaG1PeElDOTZqU3c9PSIsInZhbHVlIjoiYVk5TXRBUFF6RVdEeFhZN2VUWGxNeXphbWtlbjZFZWFIREp5Q05MOElpMFNrckMySUcwbGVxcFhWdmNZSmduUHJnWHh0R3ZoZXV0UXV2L1hNM1A1U3ZLWjZUaS90V2pyNFAwbXJCRldVeC9meDR4ODI1SHpqN1g4TWpBMFNLRWkiLCJtYWMiOiI4NDRjYjQ4ZDQ1YjE2NjM3ZDQ3OWQ2NzQyZjY5NDM0NTJlY2E0ZWE4NzM3N2YwMWJkZjk1Njk2Y2NlOTZiYjE3IiwidGFnIjoiIn0%3D");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(`https://apis.reportsxapis.com/api/get_general_data`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setAllData(result.data)
                exportCSV(result.data)
            })
            .catch((error) => console.error(error));
    }

    const exportCSV = (data) => {
        const filteredData = data.map(({ Idate, created_at, updated_at, ...rest }) => rest);
        const csvContent = "data:text/csv;charset=utf-8," +
            filteredData.map((item) => Object.values(item).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
    };


    return (
        <div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card m-lg-5">
                        <div className="card-body">
                            <h3 className="card-title">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <div className='d-flex justify-content-right'></div>
                            <a className="btn btn-outline-success mt-2 mb-3" onClick={exportData}>Export All CSVs</a>
                            <a className="btn btn-outline-success mt-2 mb-3 ms-2" onClick={exportData}>Export Filtered CSVs</a>

                            <div className='row '>
                                <div className='col-lg-3 p-0 m-0' >
                                    <input className='form-control' onChange={(e) => getData(e, "age")} placeholder='Enter Age' style={{ borderRadius: "15px" }} type="text" />
                                </div>
                                <div className='col-lg-3 p-0 m-0' >

                                    <select className="form-select" onChange={(e) => getData(e, "gender")} style={{ borderRadius: "15px" }} aria-label="Default select example">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>


                                    {/* <input className='form-control' onChange={(e) => getData(e, "gender")} placeholder='Enter Gender' style={{ borderRadius: "15px" }} type="text" /> */}
                                </div>
                                <div className='col-lg-3 p-0 m-0' >
                                    <input className='form-control' onChange={(e) => getData(e, "goal")} placeholder='Enter Goals' style={{ borderRadius: "15px" }} type="text" />
                                </div>

                                <div className='col-lg-3 p-0 m-0' >

                                    <select className="form-select" onChange={(e) => getData(e, "country")} style={{ borderRadius: "15px" }} aria-label="Default select example">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>

                                    {/* <input className='form-control' onChange={(e) => getData(e, "country")} placeholder='Enter Country' style={{ borderRadius: "15px" }} type="text" /> */}
                                </div>
                            </div>

                            <table class="table img-fluid">
                                <thead>
                                    <tr>
                                        <th># id</th>
                                        <th>Email</th>
                                        <th>Full Name</th>
                                        <th>Date of Birth</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Goal</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((items) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{items.id}</td>
                                                        <td>{items.email}</td>
                                                        <td>{items.name}</td>
                                                        <td>{items.dob}</td>
                                                        <td>{items.age}</td>
                                                        <td>{items.gender}</td>
                                                        <td>{items.goal}</td>
                                                        <td>{items.country}</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }


                                </tbody>
                                <tfoot>
                                    <div className="p-3">
                                        <button className="btn btn-outline-success btn-sm" onClick={handlePrevPage} disabled={pages === 1}>
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        &nbsp;&nbsp;
                                        <button className="btn btn-outline-success btn-sm" onClick={handleNextPage} disabled={totalResults <= endResult}>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                        <p >Showing {startResult} - {count}  results  -  total :&nbsp;&nbsp;{count}</p>
                                    </div>

                                </tfoot>
                            </table>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Table