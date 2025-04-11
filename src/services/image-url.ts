/********** ********** ********** **********/
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-06
/********** ********** ********** **********/

import noImage from '../assets/no-photo-available.jpg';

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;