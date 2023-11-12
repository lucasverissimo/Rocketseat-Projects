import Task from './Task';

import style from "../assets/css/ListTasks.module.css";
import IconEmptyList from '../assets/img/empty-list-tasks-icon.svg';

import { TaskProps } from '../interfaces/Tasks';

interface ListTaskProps {
    listTasks?: TaskProps[],
    changeTaskStatus: (id: number) => void,
    deleteTask: (id: number) => void
}

export default function ListTasks({listTasks, changeTaskStatus, deleteTask}:ListTaskProps) {
      
    console.log('list tasks list', listTasks);
    if(listTasks === undefined || listTasks.length == 0){
        return (
            <div className={style.empty_list}>
                <img src={IconEmptyList} alt="Sua lista esta vazia" title="Sua lista esta vazia" />
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong><br/>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        )
    }else{
        return (
            <div className={style.list_tasks}>
                {listTasks.map((task: TaskProps) => {
                    return (
                        <Task
                            key={task.id+task.description}
                            task={task}
                            changeTaskStatus={changeTaskStatus}
                            deleteTask={deleteTask}
                        />
                    )
                })}                
            </div>
        )
    }

}