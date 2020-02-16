import { Company } from './company';
import { Base } from './base';

export class Employee extends Base {
    companyId: number;
    company: Company;
    employeeId: string;
}
