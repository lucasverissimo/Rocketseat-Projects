import { style } from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import { Trash, Check } from "phosphor-react-native";
import { useState } from "react";
import { TaskInterface } from "../../interfaces/TaskInterface";

type TaskComponent = {
    item: TaskInterface,
    onRemove: (id: number) => void,
    onFinished: (id: number) => void,
}

export function Task(props: TaskComponent){

    const { item } = props;
    return (
        <View style={style.container_task}>
            <TouchableOpacity style={item.finished ? style.btn_finished_task : style.btn_unfinished_task} onPress={ ()=> props.onFinished(item.id) }>
                {item.finished ? (<Check size={12} color={'#fff'} />) : ('')}
            </TouchableOpacity>
            <Text style={item.finished ? style.description_task_finished : style.description_task}>
                {item.description}
            </Text>
            <TouchableOpacity style={style.btn_delete_task} onPress={ ()=> props.onRemove(item.id) }>
                <Trash size={16} color={'#808080'} />
            </TouchableOpacity>
        </View>
    )
}