export type Staff = any;
export declare class StaffService {
    private readonly users;
    findOne(username: string): Promise<Staff | undefined>;
}
