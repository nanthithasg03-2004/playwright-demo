"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageManager = void 0;
const OrangeHRM_LoginPage_1 = require("../pages/OrangeHRM_LoginPage");
const OrangeHRM_DashboardPage_1 = require("../pages/OrangeHRM_DashboardPage");
const OrangeHRM_PIMPage_1 = require("../pages/OrangeHRM_PIMPage");
class PageManager {
    page;
    loginPage;
    dashboardPage;
    pimPage;
    constructor(page) {
        this.page = page;
        this.loginPage = new OrangeHRM_LoginPage_1.OrangeHRMLoginPage(page);
        this.dashboardPage = new OrangeHRM_DashboardPage_1.OrangeHRMDashboardPage(page);
        this.pimPage = new OrangeHRM_PIMPage_1.PIMPage(page);
    }
}
exports.PageManager = PageManager;
//# sourceMappingURL=PageManager.js.map