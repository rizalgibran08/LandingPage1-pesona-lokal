const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  const item = event.target.closest('.carousel__item');

  if (!item) return;

  update(item);
});

const update = function (newActive) {
  const newActivePos = parseInt(newActive.dataset.pos);

  elems.forEach((item) => {
    const itemPos = parseInt(item.dataset.pos);
    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(diff) > 2) {
    return -current;
  }

  return diff;
};

/* tombol */
document.querySelector('.next').addEventListener('click', () => {
  const next = elems.find((el) => el.dataset.pos == 1);
  update(next);
});

document.querySelector('.prev').addEventListener('click', () => {
  const prev = elems.find((el) => el.dataset.pos == -1);
  update(prev);
});
