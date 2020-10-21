var appService = {};

// Mock Data
const books = [
    {
            '_id' : 1,
            'title' : 'Angular 2 Cookbook',
            'description' : 'All the code in the book is explicitly written out, and every piece of code shown is a step towards building a simple working example Who This Book Is For This book is for developers who are competent with JavaScript and are looking to dive headfirst into the TypeScript edition of Angular 2.',
            'category' : 'JavaScript Framework',
            'author' : 'Matt Frisbie',
            'publisher' : 'Packt Publishing Limited',
            'price' : 1129,
            'isbn' : '978-1785881923',
            'language' : 'English',
            'pages' : 464,
            'avg_user_rating' : 3.5
    },
    {
            '_id' : 2,
            'title' : 'Pro Angular',
            'description' : 'Get the most from Angular 2, the leading framework for building dynamic JavaScript applications. Best-selling author Adam Freeman           begins by describing the MVC pattern and the benefits it can offer and then shows you how to use Angular in your projects, starting from the nuts-and-bolts and building up to the most advanced and sophisticated features, going in-depth to give you the knowledge you need.',
            'category' : 'JavaScript Framework',
            'author' : 'Adam Freeman',
            'publisher' : 'Apress',
            'price' : 2575,
            'isbn' : '978-1484223062',
            'language' : 'English',
            'pages' : 778,
            'avg_user_rating' : 3.9
    },
    {
            '_id' : 3,
            'title' : 'Learning React',
            'description' : 'A hands-on guide to building maintainable, high-performing web application user interfaces using the React JavaScript library',
            'category' : 'JavaScript Framework',
            'author' : 'Kirupa Chinnathambi',
            'publisher' : 'Addison Wesley',
            'price' : 1665,
            'isbn' : '978-0134546315',
            'language' : 'English',
            'pages' : 240,
            'avg_user_rating' : 3
    },
    {
            '_id' : 4,
            'title' : 'Eloquent JavaScript 2e',
            'description' : 'Eloquent JavaScript, 2nd Edition dives deep into the JavaScript language to show you how to write beautiful, effective code. Author Marijn Haverbeke immerses you in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing  your own programs.',
            'category' : 'JavaScript',
            'author' : 'Marijm Haverbeke',
            'publisher' : 'OReilly',
            'price' : 1796,
            'isbn' : '978-1593275846',
            'language' : 'English',
            'pages' : 472,
            'avg_user_rating' : 5
    },
    {
            '_id' : 5,
            'title' : 'You Dont Know JS: ES6 & Beyond',
            'description' : 'You Don/’t Know JS: ES6 & Beyond dives into trickier parts of the language that many JavaScript programmers either avoid or know nothing about. Armed with this knowledge, you can achieve true JavaScript mastery.',
            'category' : 'JavaScript',
            'author' : 'Kyle Simpson',
            'publisher' : 'OReilly',
            'price' : 600,
            'isbn' : '978-9352134199',
            'language' : 'English',
            'pages' : 280,
            'avg_user_rating' : 3.2
    },
    {
            '_id' : 6,
            'title' : 'Pro TypeScript: Application-Scale JavaScript Development',
            'description' : 'TypeScript is an innovative open source language from Microsoft that combines powerful language features and enhanced tooling support with the key attractions of JavaScript as a flexible, dynamic language that can run in any browser and on any operating system. Pro TypeScript tells you everything you need to know about this exciting new language and how to use it in your applications.',
            'category' : 'JavaScript',
            'author' : 'Steve Fenton',
            'publisher' : 'Apress',
            'price' : 2334,
            'isbn' : '978-1430267911',
            'language' : 'English',
            'pages' : 248,
            'avg_user_rating' : 4
    },
    {
            '_id' : 7,
            'title' : 'Understanding ECMAScript 6',
            'description' : 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript. Every chapter is packed with example code that works in any JavaScript environment so you will be able to see new features in action.',
            'category' : 'JavaScript',
            'author' : 'Nicholas Zakus',
            'publisher' : 'No Starch Press',
            'price' : 1690,
            'isbn' : '978-1593277574',
            'language' : 'English',
            'pages' : 352,
            'avg_user_rating' :4.3
    },
    {
            '_id' : 8,
            'title' : 'Pro Spring Boot',
            'description' : 'Pro Spring Boot is your authoritative hands-on practical guide for increasing your Spring Framework-based enterprise Java and cloud application productivity while decreasing development time using the Spring Boot productivity suite of tools. It\'s a no nonsense guide with case studies of increasing complexity throughout the book.',
            'category' : 'Java',
            'author' : 'Felipe Gutierrez',
            'publisher' : 'Apress',
            'price' : 2499,
            'isbn' : '978-1484214329',
            'language' : 'English',
            'pages' : 365,
            'avg_user_rating' : 4.1
    },
    {
            '_id' : 9,
            'title' : 'Java: The Complete Reference',
            'description' : 'Fully updated for Java SE 8: covers new features, includes modules and lambda expressions.',
            'category' : 'Java',
            'author' : 'Herbert Schildt',
            'publisher' : 'McGraw Hill Education',
            'price' : 681,
            'isbn' : '978-9339212094',
            'language' : 'English',
            'pages' : 1312,
            'avg_user_rating' : 4.7
    }
]


appService.getBooks2 = function() {
    return books;
}


export default appService;