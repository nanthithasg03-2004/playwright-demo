"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrangeHRMDashboardPage = void 0;
const OrangeHRM_DashboardLocators_1 = require("../locators/OrangeHRM_DashboardLocators");
class OrangeHRMDashboardPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async verifyDashboard() {
        await this.page.locator(OrangeHRM_DashboardLocators_1.OrangeHRM_DashboardLocator.dashboardheader).isVisible();
    }
}
exports.OrangeHRMDashboardPage = OrangeHRMDashboardPage;
//# sourceMappingURL=OrangeHRM_DashboardPage.js.map