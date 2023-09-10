
const summaries = document.querySelectorAll('summary');

summaries.forEach((summary) => {
  summary.addEventListener('click', () => {
    closeOpenedDetails(summary);
  });
});

function closeOpenedDetails(clickedSummary) {
  summaries.forEach((summary) => {
    const detail = summary.parentNode;
    if (detail !== clickedSummary.parentNode) {
      detail.removeAttribute('open');
    }
  });
}
