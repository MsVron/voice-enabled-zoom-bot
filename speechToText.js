// Importing module using ES6 syntax
import speech from '@google-cloud/speech';

export async function transcribeAudio(audioData) {
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

    const [response] = await client.recognize(request);
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log(`Transcription: ${transcription}`);
}