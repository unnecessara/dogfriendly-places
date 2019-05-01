export default function() {
  this.namespace = '/api';

  this.get('/places', function() {
    return {
      data: [
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
          id: 'taz-recordsssss',
          title: 'Some Records',
          city: 'Halifax',
          type: 'Retail',
          image:
            'https://globalgamejam.org/sites/default/files/styles/game_sidebar__normal/public/game/featured_image/promo_5.png?itok=9dymM8JD',
          description:
            'Taz is a new and used record store. It has been running for 35 years.'
        },
        {
          id: 'propeller',
          title: 'Propeller Brewery (North End)',
          city: 'Halifax',
          type: 'Bar',
          image:
            'http://static1.squarespace.com/static/56c2025145bf212423b024a2/t/5a4bcd7b53450a16cf11e2a5/1514917255360/PropellerLogo.jpg?format=1500w',
          description:
            'Propeller is a brewery in the north end of Halifax. Offering a wide selection of beer in a friendly and relaxed atmosphere.'
        },
        {
          id: 'trail-shop',
          title: 'The Trail Shop',
          city: 'Halifax',
          type: 'Retail',
          image:
            'https://pbs.twimg.com/profile_images/851392930501844992/xSziR2TA.jpg',
          description:
            'The Trail Shop is an outdoor and adventure shop in Halifax.'
        }
      ]
    };
  });
}
