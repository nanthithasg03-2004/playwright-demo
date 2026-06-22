"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseFixture_1 = require("../fixtures/baseFixture");
(0, baseFixture_1.test)('OrangeHRM login test', async ({ pageManager, envData }) => {
    const admin = envData.get("adminUser");
    await pageManager.loginPage.login(admin.username, admin.password);
    await pageManager.dashboardPage.verifyDashboard();
});
//# sourceMappingURL=fixtureLogin.spec.js.map