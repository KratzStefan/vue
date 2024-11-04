Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
  computed: {
    // Computed Property zum Formatieren der headline in ein gültiges ID-Format
    formattedHeadline() {
      return this.headline
        .toLowerCase() // Konvertiert den Text in Kleinbuchstaben
        .replace(/\s+/g, "-") // Ersetzt Leerzeichen durch Bindestriche
        .replace(/[^a-z0-9-_]/g, ""); // Entfernt ungültige Zeichen
    },
  },
}).mount("#app");
