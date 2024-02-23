const { contextBridge, ipcRenderer } = require('electron')
const {faker} = require('@faker-js/faker');

contextBridge.exposeInMainWorld('faker', {
    countries: () => {return faker.location.country()},
    cities: () => {return faker.location.city()},
    street: () => {return faker.location.street()},
    words: (lenght) => {return faker.word.noun(lenght)},
    word: () => {return faker.word.noun('any-length')},
    paragraph: () => {return faker.lorem.paragraph()},
    adjective: () => {return faker.word.adjective()},
    nameEmail: () => {return faker.internet.email()},
    domainEmail: (domain) => {return faker.internet.email({
        provider: domain
    })},
    userNameEmail: (name) => {return faker.internet.email({
        firstName: name
    })},
    names: (gender) => {return faker.person.firstName(gender)},
    surnames: () => {return faker.person.lastName()},
    fullnames: (gender) => {return faker.person.fullName({
        sex: gender
    })}

});
contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => ipcRenderer.send(channel, data),  
});


