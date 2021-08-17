import { ToDoEditIcon, ToDoDeleteIcon } from './Icons'

function ToDoList ({items, removeItem, editItem, handleChange}){
    
    const styleArticle ={
        opacity: '0.3'
        }
    return(
        <div className="to-do-list">
            <div className="to-do-list-items">
                {items.length !== 0?
                    
                    items.map((item)=>{
                    const {id, title, styleItem} = item
                    return(
                        <>
                        <div className="to-do-list-item">
                            <input  type="checkbox" checked={item.styleItem} onChange={() => handleChange(id)}  className="to-do-list-item-checkbox"/>
                            <article key={id} style={styleItem?styleArticle:null}>{title}</article>
                            <div id={id} className={styleItem?"to-do-list-item-btn":null}>
                                <button onClick={() => editItem(id)} disabled={item.styleItem}><ToDoEditIcon/></button>
                                <button onClick={() => removeItem(id)} disabled={item.styleItem}><ToDoDeleteIcon/></button>
                            </div> 
                        </div>
                        <hr />
                        </>
                        
                        )
                    }):<div className="empty">Empty List</div>}
            </div>
        </div>
    )
  }

export default ToDoList

//<a href="https://icons8.com/icon/86373/edit">Edit icon by Icons8</a>
//<a href="https://icons8.com/icon/83238/delete-bin">Delete Bin icon by Icons8</a>