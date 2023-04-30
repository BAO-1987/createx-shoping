    (function () {
      for (var e = document.querySelectorAll("[data-label]"), t = 0; t < e.length; t++)
        e[t].addEventListener("change", function () {
          var e = this.dataset.label;
          try {
            document.getElementById(e).textContent = this.value
          } catch (e) {
            e.message = "Cannot set property 'textContent' of null",
              console.error("Make sure the [data-label] matches with the id of the target element you want to change text of!")
          }
        });
    })();
