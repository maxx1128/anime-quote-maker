export function toggle(update, state) {
  return {
    colorCodes: () => {
      update().textColor(state.bgColor);
      update().bgColor(state.textColor);
    },

    verticalMode: () => {
      const isNowVertical = !state.vertical,
            width = isNowVertical ? 1024 : 700,
            height = isNowVertical ? 300 : 700;

      update().vertical(isNowVertical);
      update().width(width);
      update().height(height);
    }
  }
}
