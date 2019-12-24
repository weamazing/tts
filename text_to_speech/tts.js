/**
 * Copyright 2016-2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TJBot = require('tjbot');
var config = require('./config');

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['speaker'];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    }, speak: {language: 'en-US', speakerDeviceId: 'plughw:1,0', voice: 'en-US_MichaelVoice'}
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

// listen for speech
tj.speak('Good evening, I am tj bot!');
