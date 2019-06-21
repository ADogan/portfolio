import {Project } from './project';


export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'adogan',
        description: 'This should be the website you are on right now. Its made with Angular 7 and ng bootstrap version 4.',
        url: 'http://www.adogan.nl',
        tags: ['Typescript', 'Angular 7', 'Bootstrap 4', 'ng-bootstrap 4']
    }, {
        id: 2,
        name: 'randomprint',
        description: 'Looking for a random word? This simple website gives you a random word following the pattern: '
                        + 'vowel - consonant - vowel - consonant etc.. ',
        url: 'https://www.randomprint.com',
        tags: [ 'HTML', 'CSS', 'Javascript' ]
    },
    {
        id: 3,
        name: 'verbruikskosten',
        description: 'Electricity cost of a device calculation page. (It\'s in Dutch at the moment.) '
            + 'Meant to quickly perform a simple task without much '
            + 'navigation or confusion for the user. Planned for expanding it with various items for sale on the internet.',
        url: 'https://verbruikskosten.nl',
        tags: [ 'Typescript', 'Angular 7', 'ng-bootstrap 4' ]

    }
];
