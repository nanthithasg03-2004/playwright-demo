"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentData = void 0;
const dev_1 = require("./dev");
const qa_1 = require("./qa");
const stage_1 = require("./stage");
const prod_1 = require("./prod");
exports.environmentData = {
    dev: dev_1.devData,
    qa: qa_1.qaData,
    stage: stage_1.stageData,
    prod: prod_1.prodData
};
//# sourceMappingURL=environmentData.js.map