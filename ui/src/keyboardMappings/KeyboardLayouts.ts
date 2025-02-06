import {keysUKApple, charsUKApple, modifiersUKApple } from './layouts/uk_apple';
import {keysUS, charsUS, modifiersUS } from './layouts/us';
import {keysNBNO, charsNBNO, modifiersNBNO } from './layouts/nb_no'; // Norwegian Bokmål

export function getKeyboardMappings(layout: string) {
  switch (layout) {
    case "uk_apple":
      return {
        keys: keysUKApple,
        chars: charsUKApple,
        modifiers: modifiersUKApple,
      };
    case "nb_NO":
      return {
        keys: keysNBNO,
        chars: charsNBNO,
        modifiers: modifiersNBNO,
      };
    case "us":
      default:
        return {
          keys: keysUS,
          chars: charsUS,
          modifiers: modifiersUS,
        };
    }
}