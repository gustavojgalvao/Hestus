/*=========== numeros subindo ==========*/

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-card__num");

  counters.forEach(counter => {
    const target = +counter.textContent;
    counter.textContent = "0";

    const duration = 4000;
    const steps = 240;
    const increment = target / steps;
    let current = 0;
    let count = 0;

    const updateCounter = () => {
      current += increment;
      count++;
      if (count < steps) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    requestAnimationFrame(updateCounter);
  });
});


