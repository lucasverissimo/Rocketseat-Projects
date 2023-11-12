import { useState } from "react"

import Header from "./components/Header"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks"

import styles from "./assets/css/App.module.css"
import { TaskProps } from "./interfaces/Tasks"

function App() {

  const [listTasks, setListTasks] = useState<Array<TaskProps>>();

  function createListTasks(description: string) {

    if(listTasks === undefined){
      setListTasks([{
        id: 1,
        description: description,
        finished: false,
      }]);
    }else{
      setListTasks([...listTasks!, {
        id: listTasks.length + 1,
        description: description,
        finished: false,
      }]);
    }
    
  }
  
 

  function changeTaskStatus (id: number){

    const newListTasks = listTasks!.map((task) => {
      console.log(task);
      if(task.id === id){
        task.finished = !task.finished;
      }
      
      return task;
    });

    const falseFirst = newListTasks.sort((a, b) => Number(a.finished) - Number(b.finished));

    setListTasks(falseFirst);
  }

  function getListFinishedTasks(): number{
    if(listTasks !== undefined){
      const finished = listTasks?.filter(task => task.finished == true);
      return finished?.length;
    }else{
      return 0;
    }    
  }

  function deleteTask (id: number) {
    const newListTask = listTasks?.filter(task => task.id != id);
    setListTasks(newListTask);
  }

  return (
    <main>
      <Header />
      <div className={styles.container}>
        <CreateTask onCreateListTask={createListTasks} />
        <header className={styles.top_list}>
          <div className={styles.info_top_list}>
            <strong className={styles.color_created_tasks}>Tarefas criadas</strong>
            <span>{listTasks === undefined ? 0 : listTasks.length}</span>
          </div>
          <div className={styles.info_top_list}>
            <strong className={styles.color_done_tasks}>Concluídas</strong>
            <span>{getListFinishedTasks()}</span>
          </div>
        </header>

        <ListTasks listTasks={listTasks} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask} />

      </div>      
    </main>
  )
}

export default App
