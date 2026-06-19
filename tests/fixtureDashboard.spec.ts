import { test } from '../fixtures/baseFixture';

test('OrangeHRM dashboard test', async ({ pageManager, envData }) => {

    const admin = envData.get("adminUser");

    await pageManager.loginPage.login(
        admin.username,
        admin.password
    );

    await pageManager.dashboardPage.verifyDashboard();

});