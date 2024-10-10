const devices= require('@playwright/test');


const config=
{
  testDir:'./tests', 
timeout: 4*10000,
expect:
{
  timeout:5000
},

reporter:'html',
use:

{
  browserName:'firefox',
  headless: false
},  

};
module.exports=config;