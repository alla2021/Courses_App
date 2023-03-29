import { fetchToken } from './apiService';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

describe('fetchToken', () => {
    beforeAll(() => {
        fetchMock.mockResponseOnce(JSON.stringify({ token: 'some-token' }));
    });

    test('should return a token', async () => {
        const token = await fetchToken();
        expect(typeof token).toBe('string');
        expect(token.length).toBeGreaterThan(0);
    });
});

