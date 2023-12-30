import { useState } from "react"
import { View, Image, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { PlusCircle } from "phosphor-react-native"
import { style } from "./style"

import { Task } from "../../components/Task"
import { TaskInterface } from "../../interfaces/TaskInterface"

const task_list = [
    {id: 1, description: 'Finalizar App ToDo List', finished: false,},
    {id: 2, description: 'Finalizar App Coffe Delivery', finished: true,}
];
export function Home(){
    const [isFocused, setIsFocused] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const [listTask, setListTask] = useState<TaskInterface[]>(task_list);
    const finishedTasks = listTask.filter(task => task.finished === true);

    function handleCreate(){
        if(inputTask.length < 3){
            Alert.alert('Erro ao cadastrar', 'Preencha o campo corretamente.');
        }
        const timestamp = new Date().getTime();

        setListTask( prevState => [...prevState, {id: timestamp, description: inputTask, finished: false}])
        setInputTask('')
    }

    function handleDelete(id: number){
        Alert.alert('Exluir tarefa', 'Deseja mesmo fazer isto? Esta ação não poderá ser desfeita.', [
            {
                text: 'Sim',
                onPress: () => {
                    setListTask(prevState => prevState.filter(item => item.id !== id))
                }
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }

    function handleFinished(id: number){
        setListTask(prevState => prevState.map((item) => {
            if(item.id === id){
                item.finished = !item.finished;
            }
            return item;
        }))
    }

    return(
        <SafeAreaView style={style.main}>
            <View style={style.header}>
                <Image source={require('../../assets/logo-todo-list.png')} />
            </View>

            <View style={style.bloco_form}>
                <TextInput 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={inputTask}
                    onChangeText={(text)=>setInputTask(text)}
                    style={[style.input, isFocused && style.focusedTextInput]}
                />
                <TouchableOpacity style={style.btn_add} onPress={handleCreate}>
                    <PlusCircle size={30} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={style.status_tasks}>
                <View style={style.status_task_left}>
                    <Text style={style.status_task_title_1}>Criadas</Text>
                    <Text style={style.status_task_number}>{listTask.length}</Text>
                </View>
                <View style={style.status_task_right}>
                    <Text style={style.status_task_title_2}>Concluídas</Text>
                    <Text style={style.status_task_number}>{finishedTasks.length}</Text>
                </View>                
            </View>
            <FlatList
                style={style.list_task_items}
                data={listTask}
                keyExtractor={ (item: any) => item.id } 
                renderItem={({ item }: any) => (<Task item={item} key={item.id} onRemove={handleDelete} onFinished={handleFinished} />)}
                ListEmptyComponent={ () => (
                    <View style={style.bloco_empty_list}>
                        <Image source={require('../../assets/Clipboard.png')} />
                        <Text style={style.texto_empty_list_1}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={style.texto_empty_list_2}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
            <StatusBar barStyle={"light-content"} />
        </SafeAreaView>
    )
}