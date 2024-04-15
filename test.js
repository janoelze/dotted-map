const DottedMap = require('./index').default;
const fs = require('fs');

// The tests can only be ran after the lib has been built.

const map = new DottedMap({ height: 50, grid: 'diagonal' });

map.addPin({
  lat: 40.73061,
  lng: -73.935242,
  svgOptions: { color: '#d6ff79', radius: 0.4 },
});

map.getPin({ lat: 40.73061, lng: -73.935242 });

let shapeTypes = ['circle', 'square', 'hexagon'];

for (let i = 0; i < shapeTypes.length; i++) {
  let svgContents = map.getSVG({
    radius: 0.2,
    color: '#fff',
    shape: shapeTypes[i],
    backgroundColor: '#000',
  });
  fs.writeFileSync(`./test-${shapeTypes[i]}.svg`, svgContents);
}