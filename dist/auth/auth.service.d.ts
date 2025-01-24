import { StaffService } from 'src/staff/staff.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private staffService;
    private jwtService;
    constructor(staffService: StaffService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<any>;
}
