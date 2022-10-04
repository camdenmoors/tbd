export type Execution = {
    id: string;
    profileId: string;
    profileVersion: string;
    executionTime: Date;
    status: string;
    result: string;
    success?: boolean;
    error?: string;
}