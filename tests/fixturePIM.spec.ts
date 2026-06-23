import { test } from '../fixtures/baseFixture';

test('Add employee - 1', async ({ pageManager, envData }) => {

    const admin = envData.get("adminUser");
    const employee = envData.get("employee1");

    await pageManager.loginPage.login(admin.username, admin.password);
    await pageManager.dashboardPage.verifyDashboard();

    await pageManager.pimPage.goToPIM();

    await pageManager.pimPage.addEmployee(employee.firstName, employee.lastName);
});


test('Add employee - 2', async ({ pageManager, envData }) => {

    const admin = envData.get("adminUser");
    const employee = envData.get("employee2");

    await pageManager.loginPage.login(admin.username, admin.password);
    await pageManager.dashboardPage.verifyDashboard();

    await pageManager.pimPage.goToPIM();

    await pageManager.pimPage.addEmployee(employee.firstName, employee.lastName);
});


test('Add employee - 3', async ({ pageManager, envData }) => {

    const admin = envData.get("adminUser");
    const employee = envData.get("employee3");

    await pageManager.loginPage.login(admin.username, admin.password);
    await pageManager.dashboardPage.verifyDashboard();

    await pageManager.pimPage.goToPIM();

    await pageManager.pimPage.addEmployee(employee.firstName, employee.lastName);
});