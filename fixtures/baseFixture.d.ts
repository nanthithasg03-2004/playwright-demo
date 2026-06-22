import { PageManager } from '../pages/PageManager';
type MyFixture = {
    pageManager: PageManager;
    envData: {
        get: (key: string) => any;
    };
};
export declare const test: import("playwright/test").TestType<import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions & MyFixture, import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions>;
export {};
//# sourceMappingURL=baseFixture.d.ts.map