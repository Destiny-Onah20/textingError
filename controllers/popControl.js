import popModel from "../models/populModel.js";

export const createPop = async(req,res)=>{
    try{
        const firstName = req.body.firstName.length;
        const lastName = req.body.lastName.length;
        const age = req.body.age;
        const state = req.body.stateOrigin.length;
       
        if(firstName < 2  || lastName < 2){
            res.status(400).json({
                message: "Sorry please fill your name correctly"
            })
        }else if(age < 13){
            res.status(400).json({
                message: "Sorry you are not up to the age"
            })
        }else if(state < 2){
            res.status(400).json({
                message: "Sorry please fill your state correctly"
            })
        }
        else{
            const newPop = await popModel.create({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                age : req.body.age,
                stateOrigin : req.body.stateOrigin,
                fullName : req.body.firstName + req.body.lastName,
                monthlyDue: req.body.monthlyDue,
                
           });
            console.log(newPop.firstName)
            // console.log(newPop)
            res.status(201).json({
                message: "Created a new citizen",
                data: newPop
            })
        }
    }catch(err){
        res.status(400).send(err.message)
    }
};

export const getAll = async(req,res)=>{
    try{
        const all = await popModel.findAll();
        res.status(200).json({
            message: "All citizens " + all.length,
            data: all
        });
    }catch(err){
        res.status(404).json({
            message: err.message
        })
    }
};

export const deleteRec = async(req,res)=>{
    try{
        const id = req.params.id
        const remove = await popModel.destroy({where: {id:id}});
        res.status(200).json({
            message: "Deleted successfully"
        })
    }catch(er){
        res.status(404).json({
            message: er.message
        })
    }
};
