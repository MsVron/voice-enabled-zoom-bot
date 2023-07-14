require('dotenv').config()

// Importing modules using ES6 syntax
import dotenv from 'dotenv';
import { transcribeAudio } from './speechToText.js';
import { mockSpeechToText, mockTextToAudio } from './mocks.js';
import { generateResponse } from "./gpt.js";


dotenv.config();

async function main() {
    const audioData = '...'; // Get the audio data from Zoom API

    // Use the real function once you've implemented it
    // const transcribedText = await transcribeAudio(audioData);

    // For now, use the mock function
    const transcribedText = mockSpeechToText(audioData);

    const responseText = await generateResponse(transcribedText);
    console.log(`Response from GPT-3: ${responseText}`);

    // Convert the response text to audio
    const audioDataResponse = mockTextToAudio(responseText);
    console.log(audioDataResponse);
}

main().catch(console.error);