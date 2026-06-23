import { Page, expect } from '@playwright/test';
import { PIMLocators } from '../locators/OrangeHRM_PIMLocators';

export class PIMPage {

    constructor(private page: Page) { }

    async goToPIM() {
        await this.page.getByRole('link', { name: 'PIM' }).click();
        await expect(this.page).toHaveURL(/pim/);
    }

    async addEmployee(firstName: string, lastName: string) {
        await this.page.locator(PIMLocators.AddButton).click();
        await this.page.locator(PIMLocators.FirstName).fill(firstName);
        await this.page.locator(PIMLocators.LastName).fill(lastName);
        await this.page.locator(PIMLocators.SaveButton).click();
    }
}