import './employees-list.css';
import { EmployeesListItem } from '../employees-list-item/employees-list-item';

export const EmployeesList = ({data}) => {
    return (
        <ul className="app-list list-group">
            {data.map((item) => {
                const {id, ...itemProps} = item;
                return(
                    <EmployeesListItem key={id} {...itemProps}/>
                )
            })}
        </ul>
    )
};