export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements || !targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, { ...defaultProps, ...animation });
  });
}
