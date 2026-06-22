"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_1 = require("@playwright/test");
const PageManager_1 = require("../pages/PageManager");
const environmentData_1 = require("../config/environmentData");
exports.test = test_1.test.extend({
    envData: async ({}, use) => {
        const env = (process.env.ENV || 'dev').trim();
        const rawData = environmentData_1.environmentData[env];
        const envData = {
            get: (key) => {
                return rawData[key];
            }
        };
        await use(envData);
    },
    pageManager: async ({ page }, use) => {
        const pm = new PageManager_1.PageManager(page);
        await use(pm);
    }
});
//# sourceMappingURL=baseFixture.js.map