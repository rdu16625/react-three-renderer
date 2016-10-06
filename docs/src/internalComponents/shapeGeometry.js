import DocInfo from '../DocInfo';

class shapeGeometry extends DocInfo {
  getDescription() {
    return '';
  }

  getAttributesText() {
    return {
      ...super.getAttributesText(),

      shapes: 'Array of shapes, or a single shape THREE.Shape',
      curveSegments: 'Default is 12 (not used in three.js at the moment)',
      material: 'Index of the material in a material list',
      UVGenerator: 'A UV generator, defaults to ExtrudeGeometry\'s WorldUVGenerator',
    };
  }
}

module.exports = shapeGeometry;
