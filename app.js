
const yargs=require('yargs')
const notes=require('./notes.js')
yargs.command({
    command:'add',
    handler(argv){
       notes.addNotes(argv.title,argv.body);
    }
})
yargs.command({
    command:'remove',
    description:'removing a note...',
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    description:'Lists note...',
    handler:function(){
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    description:'reads note...',
    handler(argv){
        notes.readNote(argv.title)
    }
})
console.log(yargs.argv)
// or
// yargs.parse()