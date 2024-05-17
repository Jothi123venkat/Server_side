//   we need mongoose

const mongoose = require("mongoose");

const dataschema = mongoose.Schema({
    Title :{
        require:true,
        type:"string",
    },
    year:{
        require:true,
        type:"number"
    },
    runtime:{
        require:true,
        type:"number"
    },
    director:{
        require:true,
        type:"string"
    },
    hero:{
        require:true,
        type:"string"
    },
    heroine:{
        require:true,
        type:"string"
    },
    music:{
        require:true,
        type:"string"
    },

})

module.exports = mongoose.model("data",dataschema)