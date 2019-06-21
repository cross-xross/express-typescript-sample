import { UserRepository } from '../repositories/user';

export class SampleService {

    constructor(private userRepo = new UserRepository()) {};

    incrementNumber(): number {
        return this.userRepo.countUsers() + 1;
    }
}