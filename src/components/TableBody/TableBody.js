import React from 'react';
import data from '../../Data/employee.json';

function TableBody() {
    return (
        <tbody>
            {
                data.map((emp) => (
                    <tr key={emp.employeeCode}>
                        <td><img src={process.env.PUBLIC_URL+"/Images/"+emp.image} alt={emp.image}></img></td>
                        <td>{emp.employeeCode}</td>
                        <td>{emp.firstName + ' ' + emp.lastName}</td>
                        <td>{emp.phoneNumber}</td>
                        <td>{emp.emailAddress}</td>
                    </tr>
                ))
        }
        </tbody>
    )
}

export default TableBody;