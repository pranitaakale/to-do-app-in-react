import React, {useState} from 'react' 
import ToDoAlert from './ToDoAlert'
import ToDoList from './ToDoList'
import { ToDoListIcon, ToDoCheckedIcon, ToDoUnCheckedIcon, ToDoAddIcon, ToDoClearAllIcon} from './Icons'
function ToDoInput(){
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [btnValue, setBtnValue] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({show:false, msg:'',color:''})
    const [itemBtn, setItemBtn] = useState(true)
    const [count, setCount] = useState(0)
    const [lengthList, setLengthList] = useState(0)

    const formSubmit = (e) => {
        e.preventDefault()
        if(!name){
            showAlert(true, 'Please fill in the Empty Field!','yellow')
        }
        else if(name && btnValue){
            setList(list.map((item) => {
                if(item.id === editId){
                    return {...item, title: name}
                }
                return item
            }))
            setName('')
            setEditId(null)
            setBtnValue(false)
            showAlert(true, 'Succesfully Edited', 'lightgreen')
            setItemBtn(true)
        }
        else{
            showAlert(true,'Item Added!','lightgreen')
            const newItem = {id: new Date().getTime().toString(), title: name, styleItem:false}
            setList([newItem,...list])
            setName('')
            setItemBtn(!itemBtn)
            setLengthList(list.length+1)
        }
    }

    const showAlert = (show=false,  msg='',color='') => {
        setAlert({show, msg, color})
    }
    const clearList = () =>{
        showAlert(true,'Empty List','red')
        setList([])
        setLengthList(0)
        setCount(0)
    }
    const removeItem = (id) => {
        setList(list.map((item) => {
            if(item.id === id){
                if(item.styleItem === true){
                    setCount(count-1)
                }
            }
            return item
        }))
        showAlert(true, 'Item Deleted!','red')
        setList(list.filter((item) => item.id !== id))
        setLengthList(list.length-1)
    }
    const editItem = (id) =>{
        const returnItem = list.find((item) => item.id ===id)
        setBtnValue(true)
        setEditId(id)
        setName(returnItem.title)
        setItemBtn(false)
    }
    const handleClick = () => {
        setItemBtn(!itemBtn)
    }
  
    const handleChange = (itemId) => {
        const finding = list.find((item)=>itemId === item.id)
            finding.styleItem=!finding.styleItem
            showAlert(true, '','none')
            if(lengthList !== 0){
                if(finding.styleItem === true){
                    setCount(count+1)
                }
                else{
                    setCount(count-1)
                }
            }
           }
    return(
        <>
        <div className="to-do-main-app-header">
                    <p>Tasks</p>
                    <div className="to-do-task-details">
                        <ul>
                            <li><ToDoListIcon/>{lengthList}</li>
                            <li><ToDoCheckedIcon/>{count}</li>
                            <li><ToDoUnCheckedIcon/>{lengthList-count}</li>
                        </ul>
                    </div>
                    {alert.show && <ToDoAlert 
                                        {...alert} removeAlert={showAlert} 
                                        list={list} 
                                    />}
                </div>
            <div className="to-do-input">
                {itemBtn?
                <button onClick={handleClick}><ToDoAddIcon/></button>:
                <form className="to-do-input-form">
                    
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <button type="submit" onClick={formSubmit} >
                        {btnValue? 'Edit': 'Add'}
                    </button>
                </form>
}
            </div>
            <ToDoList 
                items={list} 
                removeItem={removeItem} 
                editItem={editItem} 
                handleChange={handleChange}
            />
            {
                list.length > 0 ?
                <div className="clear">
                <button onClick={clearList}><ToDoClearAllIcon/></button>
                </div>
                 : null
            }
            
        </>
    )
}

export default ToDoInput

//<a href="https://icons8.com/icon/24717/add">Add icon by Icons8</a>
//<a href="https://icons8.com/icon/83310/unchecked-checkbox">Unchecked Checkbox icon by Icons8</a>
//<a href="https://icons8.com/icon/83319/checked-checkbox">Checked Checkbox icon by Icons8</a>
//<a href="https://icons8.com/icon/88608/list">List icon by Icons8</a>
//<a href="https://icons8.com/icon/11997/delete">Delete icon by Icons8</a>