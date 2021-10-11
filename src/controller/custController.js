const displayData = async(req, res, next) => {
    try{
        var db = req.con;
        let results = await db.query("select * from data", (err, rows) => {
            if(err){
                console.log("Error on query");
            } else {
                res.send({
                    status: 1,
                    message: "Successfully got data",
                    data: rows,
                })
            }
        })

    }catch(err){
        res.send({
            message: "Error"
        })
    }
}

const createData = async (req, res, next) => {
    try{
        var db = req.con;
        var id = Math.floor(Math.random()*100);
        var data = {
            id: id,
            Nome: req.body.Nome,
            Cognome: req.body.Cognome,
            email: req.body.email,
            Città: req.body.Città,
            Indirizzo: req.body.Indirizzo,
            image: req.file.filename,
            Note: req.body.Note
        };
        let results = await db.query("Insert into data set ?", [data], function(err, rows){
            if(err){
                res.send({
                    message: "An error occurred"
                })
            } else{
                res.send({
                    message: `Succesfully create data with id: ${id}`
                })
            }
        })

    }
    catch(error){
        console.log(erroe.message)
    }
}

module.exports = {displayData, createData}