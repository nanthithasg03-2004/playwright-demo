import { Page } from '@playwright/test';
export declare class LoginPage {
    private page;
    constructor(page: Page);
    openLoginPage(): Promise<void>;
    login(username: string, password: string): Promise<void>;
    getErrorMessage(): import("playwright-core").Locator;
}
//# sourceMappingURL=HerokuLoginPage.d.ts.map