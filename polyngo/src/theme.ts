import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bgGradient: "linear(to-b, pink.700, pink.900)",
        backgroundAttachment: "fixed",
        minHeight: "100dvh",
        width: "100%",
      },
    },
  },
  //   fonts: {
  //     heading: "var(--font-rubik)",
  //     body: "var(--font-rubik)",
  //   },
  colors: {
    common: {
      "50": "#f6f6f6",
      "100": "#e7e7e7",
      "200": "#d1d1d1",
      "300": "#b0b0b0",
      "400": "#888888",
      "500": "#6d6d6d",
      "600": "#464646",
      "700": "#353535",
      "800": "#252525",
      "900": "#121212",
      "950": "#050505",
    },

    pink: {
      "50": "#fff0f9",
      "100": "#ffe4f5",
      "200": "#ffc9ec",
      "300": "#ff9cdb",
      "400": "#ff5fc1",
      "500": "#ff30a6",
      "600": "#f50d83",
      "700": "#dd006a",
      "800": "#b00454",
      "900": "#920949",
      "950": "#5b0028",
      transparent: {
        "100": "#b0045433",
        "200": "#92094922",
        "300": "#5b002877",
      },
    },
  },
});
