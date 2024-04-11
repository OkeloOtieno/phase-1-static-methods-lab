class Formatter {
  
  static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
      return str.replace(/[^a-zA-Z0-9\s'-]/g, '');
  }

  static titleize(str) {
      const wordsToIgnore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      return str.split(' ')
              .map((word, index) => {
                    if (index === 0 || !wordsToIgnore.includes(word.toLowerCase())) {
                        return Formatter.capitalize(word);
                    }
                    return word;
              })
              .join(' ');
  }
}
