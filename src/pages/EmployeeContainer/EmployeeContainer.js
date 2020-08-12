import React from "react";
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

function EmployeeContainer(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 table-responsive">
                    <EmployeeTable></EmployeeTable>
                </div>
            </div>
        </div>
    )
}

export default EmployeeContainer;