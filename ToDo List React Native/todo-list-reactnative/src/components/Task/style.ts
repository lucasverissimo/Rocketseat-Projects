import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container_task:{
        padding: 15,
        backgroundColor: '#333',
        borderColor: '#808080',
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 10,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 0,        
    },
    btn_finished_task:{
        width: 18,
        height: 18,
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 14,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_unfinished_task: {
        width: 18,
        height: 18,
        borderColor: '#4EA8DE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 14,
        marginRight: 10,
    },
    description_task:{
        flex: 1,
        color: '#fff',
    },
    description_task_finished: {
        color: '#808080',
        flex: 1,  
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'      
    },
    btn_delete_task:{
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});