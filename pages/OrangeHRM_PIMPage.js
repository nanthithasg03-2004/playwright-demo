"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIMPage = void 0;
const OrangeHRM_PIMLocators_1 = require("../locators/OrangeHRM_PIMLocators");
class PIMPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async addEmployee(firstName, lastName) {
        await this.page.locator(OrangeHRM_PIMLocators_1.PIMLocators.PIMMenu).click();
        await this.page.locator(OrangeHRM_PIMLocators_1.PIMLocators.AddButton).click();
        await this.page.locator(OrangeHRM_PIMLocators_1.PIMLocators.FirstName).fill(firstName);
        await this.page.locator(OrangeHRM_PIMLocators_1.PIMLocators.LastName).fill(lastName);
        await this.page.locator(OrangeHRM_PIMLocators_1.PIMLocators.SaveButton).click();
    }
}
exports.PIMPage = PIMPage;
//# sourceMappingURL=OrangeHRM_PIMPage.js.map