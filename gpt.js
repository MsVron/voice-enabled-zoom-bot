import { OpenAIApi, OpenAIApiModels } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// Instantiate the OpenAI API client
let openai = new OpenAIApi(process.env.OPENAI_API_KEY);

export async function generateResponse(prompt) {
    // Define a max tokens limit for the response. This is the maximum length of the text that the model will generate.
    const maxTokens = 60;

    // Create a request payload
    const promptRequest = {
        model: 'text-davinci-002',
        prompt,
        max_tokens: maxTokens
    };

    try {
        // Make a completion.create request to OpenAI API
        const response = await openai.createCompletion(promptRequest);

        // Extract the generated text from the response
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating response:', error);
        throw error; // re-throw the error so it can be caught and handled by the calling function
    }
}
