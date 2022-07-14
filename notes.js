const fs=require("fs")
const getNotes=()=>{
    return "i am notes... from importing functions section"
}


const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>{
    return note.title===title
    })
    if(duplicateNotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New Note added")
    }else{
        console.log("Duplicate note found")
    }
    
    // console.log("i AM FROM LOADNOTES"+notes)
}


const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes=()=>{
    // without try catch it fails if no file with taht name is present;
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString();
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

const removeNote=(title)=>{
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=>{
        // return true ifwant to keep this in new array else false
        return note.title!==title
    })
    if(notes.length>notesToKeep.length)
    {
        console.log("Removed Successfully!")
        saveNotes(notesToKeep);
    }
    else console.log("No Record Found!")
}
const listNotes=()=>{
    const notes=loadNotes();
    notes.forEach((note) => {
       console.log(note.title) 
    });
}
const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find((note)=>note.title===title)
    if(note){
        console.log(note.title);
        console.log(note.body);
    }else{
        console.log("Note not found!")
    }
}
module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}