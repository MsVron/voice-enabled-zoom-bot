import { OpenAIApi, OpenAIApiModels } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// Instantiate the OpenAI API client
let openai = new OpenAIApi(process.env.apiKey);

// Helper function to sleep for a specified amount of time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// This function generates a response based on the provided prompt
// using the OpenAI API. It implements exponential backoff for handling rate limit errors.
export async function generateResponse(prompt) {
    // Define a max tokens limit for the response. This is the maximum length of the text that the model will generate.
    const maxTokens = 60;

    // Create a request payload
    const promptRequest = {
        model: 'text-davinci-002',
        prompt,
        max_tokens: maxTokens
    };

    // Define the initial delay and maximum number of retries
    let delay = 500; // Start with a delay of 500ms
    const maxRetries = 5; // Don't try more than 5 times

    // Loop to implement exponential backoff
    for (let i = 0; i < maxRetries; i++) {
        try {
            // Make a completion.create request to OpenAI API
            const response = await openai.createCompletion(promptRequest);

            // Extract the generated text from the response
            return response.data.choices[0].text.trim();
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // If it's a rate limit error, wait for the delay then try again
                console.log(`Rate limit hit, retrying in ${delay}ms...`);
                await sleep(delay);
                delay *= 2; // Double the delay each time
            } else {
                // If it's not a rate limit error, re-throw it
                console.error('Error generating response:', error.message ? error.message : error);
                throw error;
            }
        }
    }

    // If we've exhausted all retries, throw an error
    throw new Error('Maximum number of retries reached');
}