import styles from '../assets/css/Header.module.css'
import ToDoLogo from '../assets/img/logo-todo-list.svg'

export default function Header(){
    return (
        <header className={styles.header}>
            <img src={ToDoLogo} alt="Logo ToDo List" title="Logo ToDo List" className={styles.logo}/>
        </header>
    )
}