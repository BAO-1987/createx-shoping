import Cleave from 'cleave.js';


(function () {
  const elements = document.querySelectorAll("[data-format]");

  elements.forEach((element) => {
    const format = element.dataset.format;
    let blocks = element.dataset.blocks || '';
    let delimiter = element.dataset.delimiter || ' ';

    switch (format) {
      case "card":
        new Cleave(element, {
          creditCard: true,
          onCreditCardTypeChanged: function (type) {
            document.querySelector('.type').innerHTML = type;
          }
        });
        break;
      case "cvc":
        new Cleave(element, {
          numeral: true,
          numeralIntegerScale: 3
        });
        break;
      case "date":
        new Cleave(element, {
          date: true,
          datePattern: ["m", "y"]
        });
        break;
      case "date-long":
        new Cleave(element, {
          date: true,
          delimiter: "-",
          datePattern: ["Y", "m", "d"]
        });
        break;
      case "time":
        new Cleave(element, {
          time: true,
          datePattern: ["h", "m"]
        });
        break;
      case "custom":
        new Cleave(element, {
          delimiter: delimiter,
          blocks: blocks ? blocks.split(" ").map(Number) : ''
        });
        break;
      default:
        throw new Error(`Sorry, your format ${format} is not available. You can add it to the theme object method - inputFormatter in src/js/theme.js or choose one from the list of available formats: card, cvc, date, date-long, time, or custom.`);
    }
  });
})();
