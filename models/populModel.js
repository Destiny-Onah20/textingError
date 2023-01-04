import Sequelize from "sequelize";
import db from "../config/dbCong.js";

const popModel = db.define("pupulRecord", {
    firstName : {
        type: Sequelize.DataTypes.STRING
    },
    lastName : {
        type: Sequelize.DataTypes.STRING
    },
    age : {
        type: Sequelize.DataTypes.INTEGER
    },
    stateOrigin: {
        type: Sequelize.DataTypes.STRING
    },
    fullName: {
        type: Sequelize.DataTypes.STRING
    },
    monthyDue : {
        type: Sequelize.DataTypes.DOUBLE
    },
    paid : {
        type: Sequelize.DataTypes.DOUBLE
    }, 
    balance: {
        type: Sequelize.DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

export default popModel;