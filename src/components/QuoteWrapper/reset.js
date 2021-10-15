import { slimFontStyles, slimPositions } from "./state";
import { randomProperty } from "./core";

export function reset(update) {
  const baseReset = {
    image: (tags) => {
      update().tags(tags);
      update().hash(Math.floor(Math.random() * 100))
    },

    transforms: () => {
      update().boxShadow(.2);
      update().boxShadowColor('#000000');
      update().opacity(0.925);
      update().transformScaleX(1);
      update().transformScaleY(1);
      update().transformSkewX(0);
      update().transformSkewY(0);
      update().transformTranslateX(0);
      update().transformTranslateY(0);
      update().transformRotateFull(0);
    },

    perspective: () => {
      update().perspective(0);
      update().perspectiveOriginX(0);
      update().perspectiveOriginY(0);
      update().transformRotateX(0);
      update().transformRotateY(0);
    }
  }

  baseReset.initialTags = () => {
    update().tags('highres');
    baseReset.image('highres');
  }

  baseReset.all = (getQuote, random) => {
    const position = randomProperty(slimPositions);

    getQuote('fontSize');
    baseReset.initialTags();
    baseReset.transforms();
    baseReset.perspective();

    update().position(position);
    update().fontStyle(randomProperty(slimFontStyles).value);
    update().alignment('center');
    update().shapeSize(20)
    update().shapePosition(50)

    random().colorCodes();
    random().fontFamily();
    random().fullFilter();
    random().shape(position["label"]);
  }

  return baseReset;
}
