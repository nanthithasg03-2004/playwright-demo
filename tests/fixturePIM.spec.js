"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseFixture_1 = require("../fixtures/baseFixture");
baseFixture_1.test.beforeEach(async ({ pageManager, envData }) => {
    const admin = envData.get("adminUser");
    await pageManager.loginPage.login(admin.username, admin.password);
    await pageManager.dashboardPage.verifyDashboard();
});
(0, baseFixture_1.test)('Add employee - 1', async ({ pageManager, envData }) => {
    const employee = envData.get("employee1");
    await pageManager.pimPage.addEmployee(employee.firstName, employee.lastName);
});
(0, baseFixture_1.test)('Add employee - 2', async ({ pageManager, envData }) => {
    const employee = envData.get("employee2");
    await pageManager.pimPage.addEmployee(employee.firstName, employee.lastName);
});
(0, baseFixture_1.test)('Add employee - 3', async ({ pageManager, envData }) => {
    const employee = envData.get("employee3");
    await pageManager.pimPage.addEmployee(employee.firstName, employee.lastName);
});
//# sourceMappingURL=fixturePIM.spec.js.map