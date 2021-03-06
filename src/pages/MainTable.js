/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Buttons from '../components/Buttons';

const MainTable = () => {

    const [employee, setEmployee] = useState([]);
    const [originalEmployee, setOriginalEmployee] = useState([]);
    const [search, setSearch] = useState("");
    useEffect ( () => {
        userDisplay();
    },[]);

    function userDisplay() {
        API.GetItems()
            .then(res => {
                setEmployee(res.data.results);
                setOriginalEmployee(res.data.results)
            })
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const {value} = event.target
        setSearch(value)
        const newEmployee = originalEmployee.filter(person => {
            return person.name.first.toLowerCase().includes(value.toLowerCase())
        })
        setEmployee(newEmployee)

    }

    function handleSubmit() {
       // alert("clicked")
        const sortedEmployee = employee.sort((a, b) => {
            return  a.name.first.localeCompare(b.name.first)
        })
         const newEmployee = sortedEmployee.filter(person => {
            return true
        })
        setEmployee(newEmployee)
    }

    return (
        <div style={{background:'#457b9d'}} >

            <input className="mt-5" onChange={ handleInputChange } value= {search} /> <Buttons handleSubmit={handleSubmit} />
            <table className="container table table-hover text-center" style={{color: 'fff'}}>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Last Name</th>
                    <th>First</th>
                    <th>Location</th>
                </tr>
            </thead>

            <tbody>
                {console.log(employee)}
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

