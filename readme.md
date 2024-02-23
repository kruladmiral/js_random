Random generator is an application that generates some random stuff.
It's build using electron framework and uses faker-js library. 
To run the application:

1. Fork the repo:
`git clone https://github.com/kruladmiral/js_random.git1`
2. Open the project folder in your IDE.
3. Open a terminal in the project folder.
4. Run:
`npm i electron faker@5.5.3`
To install the dependencies.
5. Use:
`npm start`
or 
`npx electronmon . `
to run the project.

To run it in dev mode comment line 4 and uncomment line 6 in main.js.
The application let user generate some random stuff. Currently there are implemented:

- Emails
    The user has 3 options. 'Random email' will generate random email address in correct format. User can use two text fields to use their own input. Typing in domain name in "Use User's domain name" field and pressing 'With user's domain name' button will generate a random email with given domain. Similarly typing in name into 'User's name' field and pressing 'Use user's name' button will generate email that start with given name.

- Names
    Here user can generate some names. By selecting gender the user can switch between female and male names. The selection has no impact on surnames, but it does on full names.

- Places
    The user can generate countries, cities and random street names by clicking on corresponding buttons.

-Words
    Here pressing the 'Word' button will generate random word of random length. To generate more text user has to use 'Paragraph' option. It will output few sentences of giberish that resemble a real language. Clicking 'Adjective' button returns a random adjective. 

-Passwords
    There are following options to choose while creating password. Checking 'Has a special character', will ensure that password generated will contain some special characters. Checking 'Has an uppercase letter' will generate password with a capital letter at the start and checking 'Has a number' will add a number at the end of password. User can use any combination of options. 
    To create a password user has to type in desired password length in provided input field. At the moment application supports passwords of length between 7 and 25 characters. 

All generated items are outputted into the textbox at the bottom of the app's window. User can than copy all of it's content to their clipboard by clicking on 'Copy All' button or selecting needed items and pressing ctrl+C. Clicking 'Clear' button will clear main textbox of all of it's content. 




