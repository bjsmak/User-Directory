/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const MainTable = () => {

    const [employee, setEmployee] = useState([]);

    useEffect ( () => {
        userDisplay();
    },[]);

    function userDisplay() {
        API.GetItems()
            .then(res => {
                setEmployee(res.data.results);
            })
            .catch(err => console.log(err));
    }


    return (
        <div >
            <table className="container text-center">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Last Name</th>
                    <th>First</th>
                    <th>Location</th>
                </tr>
            </thead>

            <tbody>
                { employee[0] !== undefined && employee[0].name !== undefined ? (
                        employee.map(({email,name,location}) => {
                            return (
                                <tr>
                                <td>{email}</td>
                                <td>{name.last}</td>
                                <td>{name.first}</td>
                                <td>{location.country}</td>
                            </tr>
                            ) 
                        })
                ) : (
                    <></>
                ) }       
            </tbody>
        </table>
        
        </div>
    )


};

export default MainTable;

