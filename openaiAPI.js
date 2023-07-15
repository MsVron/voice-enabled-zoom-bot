import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

const writeFile = util.promisify(fs.writeFile);

async function generateSpeech(text, outputFile) {
    const client = new textToSpeech.TextToSpeechClient();

    const request = {
        input: {text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
        // Select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    await writeFile(outputFile, response.audioContent, 'binary');
    console.log('Audio content written to file:', outputFile);
}

export { generateSpeech };