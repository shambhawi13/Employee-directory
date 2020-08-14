import React from "react";
import TableBody from '../TableBody/TableBody';

function EmployeeTable({ data, sortTableEntity, sortOrder }) {
    // const AscOrder = {
    //     name: true,
    //     phone: true,
    //     email: true,
    //     job: true
    // };

    // function handleSortClick(entity,sortOrder){
    //     console.log(entity);
    //     AscOrder[entity] = !AscOrder[entity];

    // }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">
                        <span>Name</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('firstName','asc')} style={sortOrder.firstName?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('firstName','des')} style={sortOrder.firstName?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                    <th scope="col">
                        <span>Phone</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('phoneNumber','asc')} style={sortOrder.phoneNumber?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('phoneNumber','des')} style={sortOrder.phoneNumber?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                    <th scope="col">
                        <span>Email</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('emailAddress','asc')} style={sortOrder.emailAddress?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('emailAddress','des')} style={sortOrder.emailAddress?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                    <th scope="col">
                        <span>Job</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('jobTitle','asc')} style={sortOrder.jobTitle?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('jobTitle','des')} style={sortOrder.jobTitle?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                </tr>
            </thead>
            <TableBody data={data}></TableBody>
        </table>
    );
}

export default EmployeeTable;