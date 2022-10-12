const COUNT_MIN = 8;
const COUNT_MAX = 12;

module.exports = {
  putin: [
    "хуйло",
    "залупа",
    "курва",
    "гімно",
    "уйобок",
    "карлик",
    "лисийхуй",
    "гандон",
    "вилупок",
    "козел",
    "урод",
    "тупийчленосос",
    "кончеглот",
    "хуєсос",
    "гавножуй",
    "кінчений",
    "висерок",
    "вишкребок",
    "плюгавий",
    "покидьок",
    "погань",
    "курва",
    "наволоч",
    "стерво",
    "мудило",
    "дристун",
    "дідько",
    "йолоп",
    "шльондра"
  ],
  randomize(length = this.randomCount()) {
    let array = this.putin;
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = this.randomNumber(currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array.slice(0, length);
  },
  randomNumber(num) {
    return Math.floor(Math.random() * num);
  },
  randomCount() {
    return this.randomNumber(COUNT_MAX - COUNT_MIN) + COUNT_MIN;
  },
};
