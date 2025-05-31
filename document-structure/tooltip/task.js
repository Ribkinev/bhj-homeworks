let tooltipDiv = null;
let activeTooltip = {
  element: null,
  text: ''
};

function getOrCreateTooltip() {
  if (!tooltipDiv) {
    tooltipDiv = document.createElement('div');
    tooltipDiv.className = 'tooltip';
    document.body.appendChild(tooltipDiv);
  }
  return tooltipDiv;
}

document.querySelectorAll('.has-tooltip').forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const tooltip = getOrCreateTooltip();
    const titleText = element.getAttribute('title');

    const isSameTooltip = activeTooltip.element === element && activeTooltip.text === titleText;

    if (isSameTooltip) {
      tooltip.classList.toggle('tooltip_active');

      if (!tooltip.classList.contains('tooltip_active')) {
        document.removeEventListener('click', outsideClickListener);
        window.removeEventListener('scroll', hideTooltip);
        window.removeEventListener('resize', hideTooltip);
      }
      return; 
    }

    activeTooltip.element = element;
    activeTooltip.text = titleText;

    tooltip.textContent = titleText;

    const rect = element.getBoundingClientRect();

    const top = rect.bottom + window.scrollY - 45; 
    const left = rect.left + window.scrollX + rect.width / 2;

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.style.transform = 'translateX(-50%)';

    tooltip.classList.add('tooltip_active');

    function hideTooltip() {
      tooltip.classList.remove('tooltip_active');
      document.removeEventListener('click', outsideClickListener);
      window.removeEventListener('scroll', hideTooltip);
      window.removeEventListener('resize', hideTooltip);
      activeTooltip.element = null;
      activeTooltip.text = '';
    }

    function outsideClickListener(event) {
      if (!tooltip.contains(event.target) && !element.contains(event.target)) {
        hideTooltip();
      }
    }

    setTimeout(() => { 
      document.addEventListener('click', outsideClickListener);
      window.addEventListener('scroll', hideTooltip);
      window.addEventListener('resize', hideTooltip);
    }, 0);
  });
});