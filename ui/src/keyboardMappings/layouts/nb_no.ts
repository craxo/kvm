import { charsUS, keysUS, modifiersUS } from "./us";

// Extend US Keys with nb-NO changes
export const keysNBNO = {
    ...keysUS,
} as Record<string, number>;
  
// Extend US Chars with nb-NO changes
export const charsNBNO = {
    ...charsUS,
    
    // Norwegian special characters
    "ø": { key: "Semicolon", shift: false },
    "Ø": { key: "Semicolon", shift: true },
    "æ": { key: "Quote", shift: false },
    "Æ": { key: "Quote", shift: true },
    "å": { key: "BracketLeft", shift: false },
    "Å": { key: "BracketLeft", shift: true },

    // AltGr characters
    "|": { key: "IntlBackslash", shift: false, altRight: true },
    "@": { key: "Digit2", shift: false, altRight: true },
    "#": { key: "Digit3", shift: false, altRight: true },
    "€": { key: "KeyE", shift: false, altRight: true },
    "{": { key: "Digit7", shift: false, altRight: true },
    "[": { key: "Digit8", shift: false, altRight: true },
    "]": { key: "Digit9", shift: false, altRight: true },
    "}": { key: "Digit0", shift: false, altRight: true },
    "\\": { key: "Equal", shift: false, altRight: true },

    // Characters for '<' and '>'
    "<": { key: "IntlBackslash", shift: false },  // Left of Z key on Norwegian keyboards
    ">": { key: "IntlBackslash", shift: true },
} as Record<string, { key: string; shift: boolean; altLeft?: boolean; altRight?: boolean }>;

// Modifiers are typically the same between nb-NO and US layouts
export const modifiersNBNO = {
    ...modifiersUS,
} as Record<string, number>;