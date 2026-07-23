const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.18,
    },
  );

  for (const element of revealElements) {
    observer.observe(element);
  }
} else {
  for (const element of revealElements) {
    element.classList.add('is-visible');
  }
}
