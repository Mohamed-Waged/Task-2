const fs = require("fs")

const addPerson = (id ,fname , lname , age , city ) => {
    const allData = loadData()
        const duplicatedData = allData.filter((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)
        if (duplicatedData.length == 0) {
            allData.push ({
                id : id,
                fname : fname,
                lname,
                age : age ,
                city : city
            })
            console.log("New Person Added")
            saveAllData(allData)
        } else {
            console.log("Error Duplicate ID")
        }
}
///////////////////////////////////////////////////////
const loadData = () => {
    try {
        const dataJson = fs.readFileSync ("data.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }
}
///////////////////////////////////////////////////////
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("data.json" , saveAllDataJson)
}
///////////////////////////////////////////////////////
const deleteData = () => {
    const allData = loadData()
    const keepData = allData.filter((obj) => {
        return obj.id != 4 && obj.id != 6   
    })
    console.log("Item Deleted Successfully ");
    saveAllData(keepData)
}
///////////////////////////////////////////////////////
const listData = () => {
    const allData = loadData()
    allData.forEach ((ele) => {
        console.log(`fname =  ${ele.fname}  &&  lname =  ${ele.lname}  &&  city =  ${ele.city}`)
    })
}
///////////////////////////////////////////////////////
const readData = () => {
    const allData = loadData()
    const DataNeeded = allData.find((obj) => {
        return obj.id == 5  
    })
    console.log(DataNeeded)
}

module.exports={
    addPerson,
    deleteData,
    listData,
    readData
}