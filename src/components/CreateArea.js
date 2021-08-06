import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import './CreateArea.css'

function CreateArea(props) {
    const [note,setNote] = useState({title:'',content:''});
    const [isExpanded,setExpanded] = useState(false);
    function handleChange(event){
        const {name,value} = event.target;
        
        setNote(prevState=>{
                return {...prevState,[name]:value} //A variable inside an object is referred as a key using array syntax
            
        })
        // console.log(note);
    }

function expand(){
    setExpanded(true);
    console.log(isExpanded);
}
    return (
        <div>
            <form className="create-note">
                {isExpanded&&<input className="inputText" name="title" placeholder="Title" onChange={handleChange} value={note.title}/>}
                
                <textarea onClick={expand} className="inputText" name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} onChange={handleChange} value={note.content}/>
                <Zoom in={isExpanded}>
                <button className="add-btn" onClick={(event)=>{
                    props.onAdd(note);
                    event.preventDefault();
                    setNote({title:'',content:''})
                }}><AddIcon/></button>
                </Zoom>
            </form>

        </div>
    )
}

export default CreateArea
