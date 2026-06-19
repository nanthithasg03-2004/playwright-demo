import { test as base } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

import {
    environmentData,
    EnvironmentName
} from '../config/environmentData';

type MyFixture = {
    pageManager: PageManager;
    envData: {
        get: (key: string) => any;
    };
};

export const test = base.extend<MyFixture>({

    envData: async ({ }, use) => {

        const env = (process.env.ENV || 'dev').trim() as EnvironmentName;

        const rawData = environmentData[env];

        const envData = {
            get: (key: string) => {
                return (rawData as any)[key];
            }
        };

        await use(envData);
    },

    pageManager: async ({ page }, use) => {

        const pm = new PageManager(page);

        await use(pm);
    }
});