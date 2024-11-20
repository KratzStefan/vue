Vue.createApp({
  data() {
    return {
      activeLetter: "A", // Startwert
      letters: ["A", "B", "C"], // Verfügbare Buchstaben
    };
  },
  methods: {
    setActiveLetter(letter) {
      this.activeLetter = letter;
    },
  },
}).mount("#app");
