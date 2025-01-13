const youtubeDl = require('youtube-dl-exec');
const fs = require('fs');

async function getTranscript(videoUrl) {
    try {
        // Fetch the transcript in VTT format
        await youtubeDl(videoUrl, {
            skipDownload: true,
            writeAutoSub: true,
            subFormat: 'vtt',
            output: 'transcript'
        });

        // Read the generated VTT file
        const vttContent = fs.readFileSync('transcript.en.vtt', 'utf8');

        // Parse the VTT content to extract only the text
        const transcript = vttContent
            .split('\n') // Split into lines
            .filter(line => !line.match(/^\d{2}:/) && !line.match(/^WEBVTT/) && !line.match(/^NOTE/) && !line.includes('-->') && line.trim() !== '') // Filter out timestamps, headers, and empty lines
            .map(line => line.replace(/<[^>]+>/g, '')) // Remove all HTML-like tags (e.g., <c>, </c>)
            .join(' ') // Join lines into a single string
            .replace(/\s+/g, ' ') // Remove extra spaces
            .trim(); // Trim leading/trailing spaces

        // Clean up the file
        fs.unlinkSync('transcript.en.vtt');

        return transcript;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Example usage
const videoUrl = 'https://www.youtube.com/watch?v=0o42SDjiS0Q';
getTranscript(videoUrl)
    .then(transcript => {
        if (transcript) {
            console.log('Transcript:');
            console.log(transcript);
        } else {
            console.log('Failed to get transcript');
        }
    });