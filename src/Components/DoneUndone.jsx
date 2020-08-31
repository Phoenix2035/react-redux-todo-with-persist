import React from 'react';
import DoneBtn from "./DoneBtn";
import UndoneBtn from "./UndoneBtn";
import {connect} from "react-redux";
import {doneToggle} from "../Redux/ToDo/todo.action";

function DoneUndone({item, doneToggle}) {
    return (
        <>
            {!item.done
                ?
                <DoneBtn done={() => doneToggle(item.id)} item={item}/>
                :
                <UndoneBtn done={() => doneToggle(item.id)} item={item}/>
            }
        </>
    );
}

export default connect(null, {doneToggle})(DoneUndone)
