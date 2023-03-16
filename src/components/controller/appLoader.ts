import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/',  {
            apiKey: '1cacb2741d9e44c1afa969408c21f24c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
