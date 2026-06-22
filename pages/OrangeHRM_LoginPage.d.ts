import { Page } from '@playwright/test';
export declare class OrangeHRMLoginPage {
    private page;
    constructor(page: Page);
    login(username: string, password: string): Promise<void>;
    verifyErrorMessage(): Promise<void>;
}
//# sourceMappingURL=OrangeHRM_LoginPage.d.ts.map