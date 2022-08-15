import "isomorphic-unfetch";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: ".env.test" });

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();
