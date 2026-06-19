import { devData } from './dev';
import { qaData } from './qa';
import { stageData } from './stage';
import { prodData } from './prod';

export const environmentData = {
    dev: devData,
    qa: qaData,
    stage: stageData,
    prod: prodData
} as const;

export type EnvironmentName = keyof typeof environmentData;
export type EnvironmentData = typeof environmentData[EnvironmentName];