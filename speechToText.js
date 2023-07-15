// Importing module using ES6 syntax
import speech from '@google-cloud/speech';

// This function converts audio data into text using Google's Speech-to-Text API
export async function transcribeAudio(audioData) {
    // Instantiate the Google Speech-to-Text client
    const client = new speech.SpeechClient();

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };

    const audio = {
        content: audioData,
    };

    const request = {
        config: config,
        audio: audio,
    };

    // Transcribe the audio
    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);
}