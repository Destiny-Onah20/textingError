import sequelize from  "sequelize";
const db = new sequelize("populDB", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})
export default db;