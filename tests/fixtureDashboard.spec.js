"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseFixture_1 = require("../fixtures/baseFixture");
(0, baseFixture_1.test)('OrangeHRM dashboard test', async ({ pageManager, envData }) => {
    const admin = envData.get("adminUser");
    await pageManager.loginPage.login(admin.username, admin.password);
    await pageManager.dashboardPage.verifyDashboard();
});
//# sourceMappingURL=fixtureDashboard.spec.js.map