import Sequelize from "sequelize";
import db from "../config/dbCong.js";

const popModel = db.define("pupulRecord", {
    name : {
        type: Sequelize.DataTypes.STRING
    },
    age : {
        type: Sequelize.DataTypes.INTEGER
    },
    stateOrigin: {
        type: Sequelize.DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default popModel;