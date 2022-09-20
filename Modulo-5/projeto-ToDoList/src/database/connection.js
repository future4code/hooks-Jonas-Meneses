"use strict";
exports.__esModule = true;
var knex_1 = require("knex");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var connection = (0, knex_1["default"])({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        multipleStatements: true
    }
});
exports["default"] = connection;
