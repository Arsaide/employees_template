import './employees-list.css';
import { EmployeesListItem } from '../employees-list-item/employees-list-item';

export const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    )
};