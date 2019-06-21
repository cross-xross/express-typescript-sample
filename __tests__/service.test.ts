import { SampleService } from '../src/services/sample';
import { UserRepository } from '../src/repositories/user';
import { mocked } from 'ts-jest/utils'
jest.mock('../src/repositories/user');

describe('ビジネスロジックのテスト', (): void => {

    beforeEach(() => {
        mocked(UserRepository).mockClear();
    })

    let target: SampleService;

    test('Repositoryが10を返すところを1にしてみた', (): void => {
        mocked(UserRepository).mockImplementation((): any => {
            return {
                countUsers: jest.fn(() => { return 1 })
            }
        });        
        target = new SampleService();   
        expect(target.incrementNumber()).toBe(2)
    });
});