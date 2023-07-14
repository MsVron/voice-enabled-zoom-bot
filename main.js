// Importing modules using ES6 syntax
import dotenv from 'dotenv';
import { transcribeAudio } from './speechToText.js';
import { mockSpeechToText } from './mocks.js';

dotenv.config();

async function main() {
    const audioData = '...'; // Get the audio data from Zoom API

    // Use the real function once you've implemented it
    // const transcribedText = await transcribeAudio(audioData);

    // For now, use the mock function
    const transcribedText = mockSpeechToText(audioData);

    console.log(transcribedText);
}

main().catch(console.error);