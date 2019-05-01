import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
          {
            id: 'taz-records',
            title: 'Taz Records',
            city: 'Halifax',
            type: 'Retail',
            image:
              'http://newscotlandyard.ca/wp-content/uploads/2015/09/TAZlogo_blueyellow1.png',
            description:
              'Taz is a new and used record store. It has been running for 35 years.'
          },
          {
            id: 'good-robot',
            title: 'Good Robot Brewing',
            city: 'Halifax',
            type: 'Brew pub',
            image:
              'https://goodcheertrail.com/wp-content/uploads/2018/04/GRBC-Logo-2018.jpg',
            description:
              'Good Robot is a brewery in the north end of Halifax. Offering a wide selection of beer in a friendly and relaxed atmosphere.'
          },
          {
            id: 'trail-shop',
            title: 'The Trail Shop',
            city: 'Halifax',
            type: 'Shop',
            image:
              'https://pbs.twimg.com/profile_images/851392930501844992/xSziR2TA.jpg',
            description:
              'The Trail Shop is an outdoor and adventure shop in Halifax.'
          }
        ];
    }
});
