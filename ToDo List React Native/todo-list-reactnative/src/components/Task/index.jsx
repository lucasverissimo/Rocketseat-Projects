import { style } from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import { Trash, Check } from "phosphor-react-native";

export function Task(){
    return (
        <View>
            <TouchableOpacity>
                <Check size={16} color={'#fff'} />
            </TouchableOpacity>
            <Text>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
            <TouchableOpacity>
                <Trash size={16} color={'#808080'} />
            </TouchableOpacity>
        </View>
    )
}