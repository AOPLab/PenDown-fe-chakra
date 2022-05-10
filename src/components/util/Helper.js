/* eslint-disable no-bitwise */
/* eslint-disable no-shadow */

export function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += (`00${value.toString(16)}`).substr(-2);
  }
  return color;
}

export function adjust(colorHex, amount) {
  return `${colorHex.replace(/../g, (colorHex) => (`0${Math.min(255, Math.max(0, parseInt(colorHex, 16) + amount)).toString(16)}`).substr(-2))}`;
}

export function userNameBG(str) {
  return (adjust(stringToColor(str), 90));
}

export function avatarSrc(str) {
  return `https://avatars.dicebear.com/api/open-peeps/:${str}.svg?background=%23${userNameBG(str)}`;
}

export function statFormatting(num) {
  if (num >= 1000000) {
    return new Intl.NumberFormat().format(Math.round(num / 100000) / 10).concat('M');
  }
  if (num >= 10000) {
    return new Intl.NumberFormat().format(Math.round(num / 100) / 10).concat('K');
  }
  return new Intl.NumberFormat().format(num);
}
