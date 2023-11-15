import { Component } from 'react';

import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesList } from '../employees-list/employees-list';
import { EmpoloyeesAddForm } from '../employees-add-form/empoyees-add-form';
import './app.css';

export default class App extends Component {
    state= {
        data: [
            {name: 'John Smith', salary: 800, increase: false, like: false,  id: 1},
            {name: 'Ann Murahovskaya', salary: 3000, increase: false, like: false, id: 2},
            {name: 'Kirill Murahovsky', salary: 5000, increase: false, like: true, id: 3}
        ],
        term: '',
        filter: 'all'
    }
    maxId = 4;

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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
    
    filterPost = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {  
        const {data, term, filter} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const liked = this.state.data.filter(item => item.like).length;
        // const visibleData = this.searchEmp(data, term);
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                    employees={employees}
                    increased={increased}
                    liked={liked}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/> 
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}    />
                <EmpoloyeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}