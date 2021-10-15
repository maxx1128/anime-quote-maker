import { startingFullFilters, slimFontFamilies, slimShapes, verticalShapes } from "./state";
import { randomProperty, randomColorCode } from "./core";

export function random(update) {
  const baseRandoms = {
    filters: () => {
      const randomRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      update().contrast(randomRange(60, 140));
      update().hueRotate(randomRange(0, 180));
      update().saturate(randomRange(85, 150));
      update().brightness(randomRange(100, 110));
      update().sepia(randomRange(0, 25));
      update().blur(0);
      update().invert(0);
    },

    fontSize: (quote) => {
      const quoteLength = quote.split('').length,
            decrease = Math.floor((quoteLength - 40) / 15),
            ceiling = 26 - decrease,
            bottom = 24 - decrease,
            floor = 21;

      const number = Math.floor(Math.random() * (ceiling - bottom) + bottom),
            weightedNumber = number > floor ? number : floor;
      update().size(weightedNumber);
    },

    fontFamily: () => {
      const randomFamily = randomProperty(slimFontFamilies);
      update().fontFamily(randomFamily);
    },

    colorCodes: () => {
      const lightColor  = randomColorCode(['F', 'E', 'D', 'C']),
            darkColor   = randomColorCode([0, 1, 2, 3]),
            hasDarkText = Math.random() >= 0.5;


      update().textColor(hasDarkText ? darkColor : lightColor);
      update().bgColor(hasDarkText ? lightColor : darkColor);
    },

    shape: (position) => {
      let shape = false;

      if (position === '3/4') {
         shape = randomProperty(verticalShapes)["value"];
      } else if (position === 'Spaced Bottom') {
         shape = randomProperty(slimShapes)["value"];
      } else {
         shape = 'none'
      }

      update().shape(shape);
    }
  }

  baseRandoms.fullFilter = () => {
    const useRandomFilters = Math.random() >= 0.75;

    if (useRandomFilters) {
      baseRandoms.filters();
    } else {
      update().fullFilter(randomProperty(startingFullFilters));
    }
  }

  return baseRandoms;
}
