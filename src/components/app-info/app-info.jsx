import './app-info.css';

export const AppInfo = ({increased, employees, liked}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Ann+Kirill</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
            <h2>Афигенные пользователи: {liked}</h2>
        </div>
    )
}