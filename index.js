// Use our Watson library.
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// Require our config variables.
var config = require('./config');

// The text that we want to analyze the tone of.
var text =  "been movin' calm, don't start no trouble with me.\"Tryna keep it peaceful is a struggle for me.\"Don’t pull up at 6 AM to cuddle with me.\"You know how I like it when you lovin' on me.\"I don’t wanna die for them to miss me.\"Yes I see the things that they wishin' on me.\"Hope I got some brothers that outlive me.\"They gon' tell the story, shit was different with me.";

// Turn our text into valid json.
var input = { "text": text };

// The format that the tone analyzer needs. 
var params = 
        {
        'tone_input': input,
        'content_type': 'application/json'
        };

// Initialize the Tone Analyzer by giving it our credentials.
var tone_analyzer = new ToneAnalyzerV3(
        {
        username: config.username,
        password: config.password,
        version_date: '2017-09-21'
        });

// Use our Tone Analyzer variable to analyze the tone.
tone_analyzer.tone(params, function(error, response) 
        {
        // There's an error.
        if (error)
                {
                console.log('Error:', error);
                }
        // No error, we got our tone result.
        else
                {
                // The tone of the text, as determined by watson.
                var tone = JSON.stringify(response, null, 2)
                
                // Output Watson's tone analysis to the console.
                console.log("The tone analysis for \'" + text + "\' is:\n");
                console.log(tone);
                }
        });
