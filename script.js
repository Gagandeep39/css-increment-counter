const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    // Fetch max value speicifed in HTML DOM
    const target = +counter.getAttribute('data-target');
    // console.log(typeof target, target);
    // Fetch current valy eof ciunter
    const c = +counter.innerText;

    const increment = target / 200;

    console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      // Call the method with delay
      setTimeout(updateCounter, 1);
    }
  };
  // Initial call
  updateCounter();
});
