import React from "react";
import TableBody from '../TableBody/TableBody';

function EmployeeTable() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <TableBody></TableBody>
        </table>
    );
}

export default EmployeeTable;