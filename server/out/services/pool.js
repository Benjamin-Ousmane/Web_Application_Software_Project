"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg = require("pg");
// TODO: A MODIFIER POUR VOTRE BD
const connectionConfig = {
    user: "postgres",
    database: "TP3",
    password: "baseDonnee",
    port: 5432,
    host: "127.0.0.1",
    keepAlive: true
};
exports.pool = new pg.Pool(connectionConfig);
exports.pool.connect((err, client) => __awaiter(this, void 0, void 0, function* () {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
    });
}));
//# sourceMappingURL=pool.js.map