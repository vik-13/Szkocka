angular
    .module('app', [
        //inject here angular modules
        'ui.router',

        'auth',
        'layouts',
        'shared',

        //inject here your components

        'about',
        'account',
        'home',
        'news',
        'projects',

        'templates'
    ]);