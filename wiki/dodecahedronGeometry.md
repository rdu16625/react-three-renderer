> [Wiki](Home) » [[Internal Components]] » [[Geometries]] » **dodecahedronGeometry**

# dodecahedronGeometry

Creates a [THREE.DodecahedronGeometry](http://threejs.org/docs/index.html#Reference/Extras.Geometries/DodecahedronGeometry)

## Attributes

### name
``` string ```: Name for this geometry.

**Default**: `''`

### vertices
``` array of THREE.Vector3 ```: See [THREE.Geometry#vertices](http://threejs.org/docs/#Reference/Core/Geometry.vertices).

**Default**: `[]`

### colors
``` array of THREE.Color ```: See [THREE.Geometry#colors](http://threejs.org/docs/#Reference/Core/Geometry.colors).

**Default**: `[]`

### faceVertexUvs
``` array of (array of (array of THREE.Vector2)) ```: See [THREE.Geometry#faceVertexUvs](http://threejs.org/docs/#Reference/Core/Geometry.faceVertexUvs).

**Default**: `[]`

### faces
``` array of THREE.Face3 ```: See [THREE.Geometry#faces](http://threejs.org/docs/#Reference/Core/Geometry.faces).

**Default**: `[]`

### dynamic
``` bool ```: See [THREE.Geometry#dynamic](http://threejs.org/docs/#Reference/Core/Geometry.dynamic).

Set to true if attribute buffers will need to change in runtime (using "dirty" flags).

Unless set to true internal typed arrays corresponding to buffers will be deleted
once sent to GPU.

**Default**: `false`

### radius
``` number ```: Radius of the dodecahedron.

**Default**: `1`

### detail
``` number ```: Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron.

**Default**: `0`

### resourceId
``` string ```: The resource id of this object, only used if it is placed into [[resources]].

**Default**: `''`

## Notes:

This component can be added into [&lt;resources/&gt;](resources)! See [[Resource Types]] for more information.

===

|**[View Source](../blob/master/src/lib/descriptors/Geometry/DodecahedronGeometryDescriptor.js)**|
 ---|
