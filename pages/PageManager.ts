import { Page } from 'playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { OrangeHRMDashboardPage } from '../pages/OrangeHRM_DashboardPage';
import { PIMPage } from '../pages/OrangeHRM_PIMPage';

export class PageManager {
    readonly loginPage: OrangeHRMLoginPage
    readonly dashboardPage: OrangeHRMDashboardPage
    readonly pimPage: PIMPage

    constructor(private page: Page) {
        this.loginPage = new OrangeHRMLoginPage(page);
        this.dashboardPage = new OrangeHRMDashboardPage(page);
        this.pimPage = new PIMPage(page);
    }
}