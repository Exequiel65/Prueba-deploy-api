const db = require('../database/models')


let controller = {
    index : (req, res)=>{
        res.status(200).json({
            conected : true,
            session : req.session
        })
    }
}

module.exports = controller