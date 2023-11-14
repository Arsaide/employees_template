import { Component } from 'react';

import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmpoloyeesAddForm } from '../employees-add-form/empoyees-add-form';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            data: [
                {name: 'John Smith', salary: 800, increase: false, like: false,  id: 1},
                {name: 'Ann Murahovskaya', salary: 3000, increase: false, like: false, id: 2},
                {name: 'Kirill Murahovsky', salary: 5000, increase: false, like: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    
    render() {  
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const liked = this.state.data.filter(item => item.like).length;

        return (
            <div className="app">
                <AppInfo 
                    employees={employees}
                    increased={increased}
                    liked={liked}/>
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter /> 
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}    />
                <EmpoloyeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}