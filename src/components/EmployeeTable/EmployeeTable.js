import React from "react";
import TableBody from '../TableBody/TableBody';

function EmployeeTable() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <TableBody></TableBody>
        </table>
    );
}

export default EmployeeTable;