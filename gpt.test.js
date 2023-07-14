// Importing the required modules
import { generateResponse } from './gpt.js';

describe('generateResponse', () => {
    // A test case for the generateResponse function
    it('generates a response', async () => {
        const inputText = 'Hello, how can I help you?';

        // Call the function with the test input
        const response = await generateResponse(inputText);

        // Check that the output is a string (since this function should return a string)
        expect(typeof response).toBe('string');
    });
});