"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var cw1_data_js_1 = require("./cw1-data.js");
var fileContent = (0, node_fs_1.readFileSync)("./dane.txt", "utf-8");
console.log(fileContent);
(0, node_fs_1.writeFileSync)("output", cw1_data_js_1.data.join("/n"));
