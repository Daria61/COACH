const fs =  require("fs")
const data = process.cwd() + "/data/web.json"

exports.get =(req, res)=>{
    fs.readFile(data, "utf-8", (err, data)=>{
        if(err){
            return res.json({status: false, message: err})
        }

        return res.json({status: true, result: JSON.parse(data)})
    })

}


exports.put=(req, res)=>{
    const {home, catalog} = req.body
     
    fs.readFile(data, "utf-8", (err, file)=>{
        if(err){
            res.json({status: false, message: err})
        }

        const pFile = file? JSON.parse(file):[]
        const newData = {...pFile, home: home, catalog: catalog}

        fs.writeFile(data, JSON.stringify(newData), (err)=>{
            if(err){
                return res.json({status: false, message: err})
            }
            return res.json({status: true, result: newData})
        })
    })

}