import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
   fullyParallel: true,
   reporter: 'html',
  
  
  use: {
    baseURL: 'https://rahulshettyacademy.com',
    trace: 'on-first-retry',
    headless: !!process.env.CI,
    browserName:'chromium',
   
  },
  projects:[
{
name:'setup',
testMatch:'**/loginAuth.ts'
},
{
  name:'Chromium',
  use:{
     ...devices['Desktop Chrome'],
storageState:'auth/userAuth.json'
  },
  dependencies:['setup']
}





  ]

 });
