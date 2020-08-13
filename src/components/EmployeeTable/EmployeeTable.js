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
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('name','asc')} style={sortOrder.name?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('name','des')} style={sortOrder.name?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                    <th scope="col">
                        <span>Phone</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('phone','asc')} style={sortOrder.phone?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('phone','des')} style={sortOrder.phone?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                    <th scope="col">
                        <span>Email</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('email','asc')} style={sortOrder.email?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('email','des')} style={sortOrder.email?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                    <th scope="col">
                        <span>Job</span>
                        <i className="fa fa-caret-down" onClick={()=>sortTableEntity('job','asc')} style={sortOrder.job?{'visibility':'visible'}:{'visibility':'hidden'}}></i>
                        <i className="fa fa-caret-up" onClick={()=>sortTableEntity('job','des')} style={sortOrder.job?{'visibility':'hidden'}:{'visibility':'visible'}}></i>
                    </th>
                </tr>
            </thead>
            <TableBody data={data}></TableBody>
        </table>
    );
}

export default EmployeeTable;