import React,{useEffect} from 'react' 

function ToDoAlert({msg,color, removeAlert, list}){
    const alertStyle ={
        color : color
    }
    useEffect(() => {
        const timeout = setTimeout(() =>{
            removeAlert()
        },3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [list])
    return(
        <div className="to-do-alert" style={alertStyle}>
            {msg}
        </div>
    )
}

export default ToDoAlert