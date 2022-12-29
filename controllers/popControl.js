import popModel from "../models/populModel.js";

export const createPop = async(req,res)=>{
    try{
        const name = req.body.name.length;
        const age = req.body.age.length;
        const state = req.body.stateOrigin.length;
        const newPop = await popModel.create(req.body);
        if(name < 2 ){
            res.status(400).json({
                message: "Sorry please fill your name correctly"
            })
        }else if(age < 1){
            res.status(400).json({
                message: "Sorry please fill your age correctly"
            })
        }else if(state < 2){
            res.status(400).json({
                message: "Sorry please fill your state correctly"
            })
        }
        else{
            res.status(201).json({
                message: "Created a new citizen",
                data: newPop
            })
        }
    }catch(err){
        res.status(400).send(err.message)
    }
};