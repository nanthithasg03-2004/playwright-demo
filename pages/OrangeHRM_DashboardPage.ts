import { Page } from '@playwright/test';
import { OrangeHRM_DashboardLocator } from '../locators/OrangeHRM_DashboardLocators';

export class OrangeHRMDashboardPage {
    constructor(private page: Page) { }

    async verifyDashboard() {
        await this.page.locator(OrangeHRM_DashboardLocator.dashboardheader).isVisible();
    }
}
