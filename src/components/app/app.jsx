import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmpoloyeesAddForm } from '../employees-add-form/empoyees-add-form';
import './app.css';

export default function App() {
    const data = [
        {name: 'John Smith', salary: 800, increase: false, id: 1},
        {name: 'Ann Murahovskaya', salary: 3000, increase: false, id: 2},
        {name: 'Kirill Murahovsky', salary: 5000, increase: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter /> 
            </div>

            <EmployeesList data={data}/>
            <EmpoloyeesAddForm />
        </div>
    );
}