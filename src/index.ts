#!/usr/bin/env node

import axios from 'axios';
import xml2js from 'xml2js';

axios.get('http://:password@localhost:8080/requests/status.xml').then((response) => {
  xml2js.parseString(response.data, (error, result) => {
    console.log(
      `${result.root.information[0].category[0].info[3]['_']} - ${result.root.information[0].category[0].info[5]['_']}`
    );
  });
});
