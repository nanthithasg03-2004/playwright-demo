import { Page } from 'playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRM_LoginPage';
import { OrangeHRMDashboardPage } from '../pages/OrangeHRM_DashboardPage';
import { PIMPage } from '../pages/OrangeHRM_PIMPage';
export declare class PageManager {
    private page;
    readonly loginPage: OrangeHRMLoginPage;
    readonly dashboardPage: OrangeHRMDashboardPage;
    readonly pimPage: PIMPage;
    constructor(page: Page);
}
//# sourceMappingURL=PageManager.d.ts.map