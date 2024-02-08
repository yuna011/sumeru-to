import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes:{
        float:{
          "0%":{transform: "translateY(0)"},
          "50%":{transform: "translateY(-15px)"},
          "100%":{transform: "translateY(0)"},
        },
        fadeIn:{
          "from":{opacity:"0", transform:"translateY(-20px)"},
          "to":{opacity:"1"}
        },
        zoomIn:{
          "from":{opacity:"0", transform:"scale(0.6)"},
          "to":{opacity:"1", transform:"scale(1)"}
        }
      },
      tokens:{
        animations:{
          float:{
            value:"float 3s infinite"
          },
          fadeIn:{
            value:"fadeIn 3s ease 0s 1 normal"
          },
          zoomIn:{
            value:"zoomIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards"
          }
        }
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
