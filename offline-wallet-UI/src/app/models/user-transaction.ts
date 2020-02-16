import { User } from './user';
import { Vendor } from './vendor';
import { Base } from './base';

export class UserTransaction extends Base {
    userId: number;
    user: User;
    vendorId: number;
    vendor: Vendor;
    amount: number;
    transactionType: string;
}
