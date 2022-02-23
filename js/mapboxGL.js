mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJ4b25zIiwiYSI6ImNrenpmZzdoaDAwYzIzaXFhcjQ2ZHUyaXgifQ.pjKWRrPgOshvqWd9rusdRg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [30.20358860492706, 55.16325468843495],
  zoom: 15,
});

const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  'Студия вышивки, г.Витебск, ул. Воинов-Интернационалистов, 1Д.'
);

const marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat([30.20358860492706, 55.16325468843495])
  .setPopup(popup)
  .addTo(map);

map.addControl(new mapboxgl.NavigationControl());
