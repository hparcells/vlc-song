#!/usr/bin/env node

import yargs from 'yargs';
import axios from 'axios';
import xml2js from 'xml2js';
import getDataFromMeta from './util/get-data-from-meta';

const argv = yargs.options({
  password: {
    alias: 'p',
    description: 'Password of the VLC interface.',
    required: true
  },
  port: {
    default: 8080,
    description: 'Port of the VLC interface.'
  }
}).argv;

axios
  .get(`http://:${argv.password}@localhost:${argv.port}/requests/status.xml`)
  .then((response) => {
    xml2js.parseString(response.data, (error, result) => {
      if (error) {
        console.log('An error occurred when parsing the XML data.');
        return;
      }

      const meta = result.root.information[0].category[0].info;

      const artist = getDataFromMeta(meta, 'artist');
      const title = getDataFromMeta(meta, 'title');
      const filename = getDataFromMeta(meta, 'filename');

      if (title) {
        console.log(`${artist ? `${artist} - ` : ''}${title}`);
        return;
      }
      console.log(filename);
    });
  });
