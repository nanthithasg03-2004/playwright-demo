import { test } from '../fixtures/baseFixture';

test.beforeEach(async ({ pageManager, envData }) => {

    const admin = envData.get("adminUser");

    await pageManager.loginPage.login(
        admin.username,
        admin.password
    );

    await pageManager.dashboardPage.verifyDashboard();
});


test('Add employee - 1', async ({ pageManager, envData }) => {

    const employee = envData.get("employee1");

    await pageManager.pimPage.addEmployee(
        employee.firstName,
        employee.lastName
    );
});


test('Add employee - 2', async ({ pageManager, envData }) => {

    const employee = envData.get("employee2");

    await pageManager.pimPage.addEmployee(
        employee.firstName,
        employee.lastName
    );
});


test('Add employee - 3', async ({ pageManager, envData }) => {

    const employee = envData.get("employee3");

    await pageManager.pimPage.addEmployee(
        employee.firstName,
        employee.lastName
    );
});