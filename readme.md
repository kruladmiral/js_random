A ‘Random Stuff Generator’ is an application that generates random text strings that may be used for things, like creating test users lists.
It's built using the electron framework and the faker-js library.
To run the application:
 
1. Clone the repo:
`git clone https://github.com/kruladmiral/js_random.git1`
2. Open the project folder in your IDE.
3. Open a terminal in the project folder.
4. Run:
`npm install @faker-js/faker electron --save-dev`
To install the dependencies.
5. Use:
`npm start`
or
`npx electronmon. `
to run the project.
 
To run it in dev mode, comment line 4 and uncomment line 6 in the main.js file.
The application lets users generate random text strings, like passwords, names or email addresses. Currently, the following are implemented:
 
- Emails
The user has three options. 'Random email' will generate a random email address in the correct format. The user can use two text fields to enter their own input. Typing in the domain name in the "Use User's Domain Name" field and pressing the 'With user's domain name' button will generate a random email with the given domain. Similarly, typing in the name into the 'User's name' field and pressing the 'Use user's name' button will generate emails that start with the given name.
 
- Names
Here, the user can generate some names. By selecting gender, the user can switch between female and male names. The selection has no impact on surnames, but it does on full names.
 
- Places
The user can generate countries, cities, and random street names by clicking on the corresponding buttons.
 
- Words
Here, pressing the 'Word' button will generate a random word of random length. To generate more text, the user has to use the 'Paragraph' option. It will output a few sentences of gibberish that resemble real language. Clicking the 'Adjective' button returns a random adjective.
 
- Passwords
There are the following options to choose from while creating a password: Checking 'Has a special character', will ensure that the password generated will contain some special characters. Checking 'Has an uppercase letter' will generate a password with a capital letter at the start, and checking 'Has a number' will add a number at the end of the password. The user can use any combination of options.
To create a password, the user has to type in the desired password length in the provided input field. At the moment, the application supports passwords of length between 7 and 25 characters.
 
All generated items are outputted into the textbox at the bottom of the app's window. The user can then copy all of its content to their clipboard by clicking on the 'Copy All' button or selecting needed items and pressing ctrl+C. Clicking the 'Clear' button will clear the main textbox of all of its content.
 
Known issues:
- The input field becomes inaccessible after the alert is shown when the user tries to create a password with a number of characters out of range provided by the program. The solution is to unfocus the app window and focus again (click outside and inside). This is a known occurrence in the electron framework, and unfortunately, their team has no desire to fix it. 
- The program was tested only on Windows. Should work perfectly well on Linux and Mac machines. However, please keep in mind that nothing was optimized for running it on mobile devices.



