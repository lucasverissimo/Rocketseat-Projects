import { ChangeEvent, FormEvent, useState } from 'react'

import style from '../assets/css/CreateTask.module.css'
import plusIcon from '../assets/img/plus-icon.svg';


export default function CreateTask({onCreateListTask}: any){

    const [task, setTask] = useState('')

    const field_task_empty = task.length === 0;

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateListTask(task);
        setTask('');
    }

    function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setTask(event.target.value);
    }

    return(
        <section className={style.bloco_form}>
            <form action="">
                <input type="text" name="task" onChange={handleCreateNewTaskChange} className={style.input_form} placeholder="Adicione uma nova tarefa" value={task} />
                <button type="submit" onClick={handleCreateNewTask} className={style.btn_form} disabled={field_task_empty}>
                    Criar
                    <img src={plusIcon} alt="Criar tarefa" title="Criar tarefa" />
                </button>
            </form>
        </section>
    )
}