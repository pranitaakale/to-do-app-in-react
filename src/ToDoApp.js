import React from 'react'
import './ToDoApp.css'
import ToDoInput from './Components/ToDoInput'
import {ToDoIcon} from './Components/Icons';

class ToDoApp extends React.Component{
    render(){

        return(
            <div className="to-do-main-app">
                <div className="to-do-main-app-icon">
                    <ToDoIcon />
                </div>              
                <ToDoInput />
                
            </div>
        )
    }
}

export default ToDoApp

//<a href="https://icons8.com/icon/61031/to-do">To Do icon by Icons8</a>