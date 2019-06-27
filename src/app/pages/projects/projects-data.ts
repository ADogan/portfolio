import {Project } from './project';


export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'adogan',
        description: 'This should be the website you are on right now. Its made with Angular 7 and ng bootstrap version 4.',
        url: 'http://www.adogan.nl',
        tags: ['Angular 7', 'Typescript', 'Bootstrap 4', 'ng-bootstrap 4'],
        image: 'adogan'
    }, {
        id: 2,
        name: 'randomprint',
        description: 'Looking for a random word? This simple website gives you a random word following the pattern: '
                        + 'vowel - consonant - vowel - consonant etc.. ',
        url: 'https://www.randomprint.com',
        tags: ['Javascript', 'HTML', 'CSS'],
        image: 'randomprint'
    },
    {
        id: 3,
        name: 'verbruikskosten',
        description: 'Electricity cost of a device calculation page. (It\'s in Dutch at the moment.) '
            + 'Meant to quickly perform a simple task without much '
            + 'navigation or confusion for the user. Planned for expanding it with various items for sale on the internet.',
        url: 'https://verbruikskosten.nl',
        tags: [ 'Angular 7', 'Typescript', 'ng-bootstrap 4' ],
        image: 'verbruikskosten'
    },
    {
        id: 4,
        name: 'verkeertrainer',
        description: 'A site dedicated to training for the traffic rules in the Netherlands. Also in Dutch at the moment'
            + 'At this moment a limitles practice quiz on the traffic signs is present and functional. '
            + 'With limitless I mean that the quiz will keep asking you for new signs and not stop until you close or click away. Happy days :)',
        url: 'https://verkeertrainer.nl',
        tags: [ 'Angular 7', 'Typescript', 'Material Design', 'Gitlab Ci' ],
        image: 'verkeertrainer_2'
    }
];
