import './employees-add-form.css';

export const EmpoloyeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового сотрудника</h3>
            <form action="" className="add-form d-flex">
                <input 
                    type="text" 
                    className="form-control new-post-label" 
                    placeholder='Как его зовут?'/>
                <input 
                    type="number" 
                    className="form-control new-post-label" 
                    placeholder='З/П в $'/>   
                
                <button 
                    type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
};