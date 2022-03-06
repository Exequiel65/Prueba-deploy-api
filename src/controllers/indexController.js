const db = require('../database/models')


let controller = {
    index : (req, res)=>{
        res.status(200).json({
            conected : true
        })
    }
}

module.exports = controller