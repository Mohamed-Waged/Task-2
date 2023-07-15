const  fs = require ("fs")
const yargs = require("yargs")
const data = require ("./data")

yargs.command({
    command : "add",
    describe: "to add Person",
    builder: {
        id : {
            describe: "add id ",
            demandOption: true,
            type: "string"
        },
        fname : {
            describe: "add first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "add last name ",
            demandOption: true,
            type: "string"
        },
        age : {
            describe: "add age ",
            demandOption: true,
            type: "string"
        },
        city : {
            describe: "add city ",
            demandOption: true,
            type: "string"
        },
    },
    handler: (person)=> {
        data.addPerson(person.id , person.fname , person.lname , person.age , person.city )
    }
})

yargs.command({
    command : "delete",
    describe: "to delete person",
    handler: ()=> {
        data.deleteData()
    }
})

yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data.listData()
    }
})

yargs.command ({
    command : "read",
    describe : "read data",
    handler : ()=> {
        data.readData ()
    }
})

yargs.parse()