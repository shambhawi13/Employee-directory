import React, { useReducer, useEffect, useState } from "react";
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import Search from '../../components/Search/Search';
import './style.css';
import data from '../../Data/employee.json';

function EmployeeContainer() {
    const [sortOrder,setSortOrder] = useState({
        firstName: true,
        phoneNumber: true,
        emailAddress: true,
        jobTitle: true
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
                //sortByAscOrder(state,action.input);
                return sortByAscOrder(state,action.input);
            case 'sortByDes':
                //sortByDesOrder(state,action.input); 
                return sortByDesOrder(state,action.input);          
            default:
                return state;
        }
    }, []);

    function sortByDesOrder(employees,criteria){
        employees.sort((a, b) => {
            let fa = a[criteria].toLowerCase(),
                fb = b[criteria].toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return employees;
    }

    function sortByAscOrder(employees,criteria){
        employees.sort((a, b) => {
            let fa = a[criteria].toLowerCase(),
                fb = b[criteria].toLowerCase();
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });
        console.log(employees,criteria);
        return employees;
    }

    function filterEmployees(input) {
        console.log(input);
        dispatch({ type: 'update', input: input });
    }

    function sortTableEntity(entity,sortOrderInput){
        setSortOrder({...sortOrder,[entity]:!sortOrder[entity]});
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