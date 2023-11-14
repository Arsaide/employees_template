import './app-filter.css';

export const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'Сотрудники на повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ]

    return (
        <div className="btn-group">
            {buttonsData.map(({name, label}) => {
                const active = props.filter === name;
                const clazz = active ? 'btn-light' : 'btn-outline-light'
                    
                return (
                    <button 
                        className={`btn ${clazz}`}
                        type="button"
                        key={name}
                        onClick={() => props.onFilterSelect(name)}>
                            {label}
                    </button>
                )
            })}
        </div>
    )
};