import { Company } from './company';
import { Base } from './base';

export class User extends Base {
    companyId: number;
    company: Company;
    employeeId: string;
}
