import React from "react";
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import Search from '../../components/Search/Search';
import './style.css';

function EmployeeContainer(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 search">
                    <Search></Search>
                </div>
                <div className="col-md-12 table-responsive emp-table">
                    <EmployeeTable></EmployeeTable>
                </div>
            </div>
        </div>
    )
}

export default EmployeeContainer;