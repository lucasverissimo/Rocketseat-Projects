import { useState } from "react"
import { View, Image, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, FlatList } from "react-native"
import { PlusCircle } from "phosphor-react-native"
import { style } from "./style"

import { Task } from "../../components/Task"

const task_list = [];// [1, 2, 3, 4, 5];
export function Home(){
    const [isFocused, setIsFocused] = useState(false);

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
                    style={[style.input, isFocused && style.focusedTextInput]}
                />
                <TouchableOpacity style={style.btn_add}>
                    <PlusCircle size={30} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={style.status_tasks}>
                <View style={style.status_task_left}>
                    <Text style={style.status_task_title_1}>Criadas</Text>
                    <Text style={style.status_task_number}>5</Text>
                </View>
                <View style={style.status_task_right}>
                    <Text style={style.status_task_title_2}>Concluídas</Text>
                    <Text style={style.status_task_number}>2</Text>
                </View>                
            </View>
            <FlatList
                style={style.list_task_items}
                data={task_list}
                keyExtractor={ item => item } 
                renderItem={item => <Task key={item} />}
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