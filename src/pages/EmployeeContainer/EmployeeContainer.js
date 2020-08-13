import React, { useReducer, useEffect, useState } from "react";
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import Search from '../../components/Search/Search';
import './style.css';
import data from '../../Data/employee.json';

function EmployeeContainer() {
    const [sortOrder,setSortOrder] = useState({
        name: true,
        phone: true,
        email: true,
        job: true
    });
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'loadData':
                return [...data];
            case 'update':
                return data.filter((emp) => {
                    return (emp.firstName.toLowerCase().includes(action.input.toLowerCase())
                        || emp.employeeCode.toLowerCase().includes(action.input.toLowerCase())
                        || emp.emailAddress.toLowerCase().includes(action.input.toLowerCase())
                        || emp.phoneNumber.toString().includes(action.input.toString())   
                        || emp.jobTitle.toLowerCase().includes(action.input.toLowerCase())
                        );
                });
            case 'sortByAsc':
                return state;
            case 'sortByDes':
                return state;               
            default:
                return state;
        }
    }, []);

    function filterEmployees(input) {
        console.log(input);
        dispatch({ type: 'update', input: input });
    }

    function sortTableEntity(entity,sortOrderInput){
        switch(entity){
            case 'name':
                setSortOrder({...sortOrder,name:!sortOrder.name});
                break;
            case 'phone':
                setSortOrder({...sortOrder,phone:!sortOrder.phone});
                break;
            case 'email':
                setSortOrder({...sortOrder,email:!sortOrder.email})
                break;
            case 'job':
                setSortOrder({...sortOrder,job:!sortOrder.job})
                break;
            default:
                break;
        }
        if(sortOrderInput.toLowerCase() === 'asc'){
            dispatch({ type: 'sortByAsc', input: entity });
        }
        else if(sortOrderInput.toLowerCase() === 'des'){
            dispatch({ type: 'sortByDes', input: entity });
        }
        
    }

    useEffect(() => {
        dispatch({ type: 'loadData' });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 search">
                    <Search filterEmployees={filterEmployees}></Search>
                </div>
                <div className="col-md-12 table-responsive emp-table">
                    <EmployeeTable data={state} sortTableEntity={sortTableEntity} sortOrder={sortOrder}></EmployeeTable>
                </div>
            </div>
        </div>
    )
}

export default EmployeeContainer;