import { helper } from '@ember/component/helper';

const barPlaceTypes = ['Bar', 'Pub', 'Drinking Establishment', 'Club', 'Brew pub',  'Gastropub'];
const retailPlaceTypes = ['Shop', 'Store', 'Retail'];
export function placesType([type]) {
  if (barPlaceTypes.includes(type)) {
    return 'Bar';
  } else if (retailPlaceTypes.includes(type)) {
    return 'Retail';
  }

  return 'Random';
}

export default helper(placesType);
