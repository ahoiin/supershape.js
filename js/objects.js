function lineObject(b, a) {
    this.rotX = b;
    this.rotY = a;
    this.scene = new THREE.Object3D();
    this.createLineObject()
}
lineObject.prototype.getScene = function () {
    return this.scene
};
lineObject.prototype.createLineObject = function () {
    var b = linestep;
    for (var s = -Math.PI; s < Math.PI; s += b) {
        geometry = new THREE.Geometry();
        for (var p = -Math.PI / 2; p < Math.PI / 2; p += b) {
            var f, e, n, d, t, a, q, m, l, k, h;
            var c = 0;
            var o = 0;
            var u = 0;
            f = Math.cos(m1 * s / 4);
            f = 1 / a1 * Math.abs(f);
            f = Math.abs(f);
            e = Math.sin(m1 * s / 4);
            e = 1 / b1 * Math.abs(e);
            e = Math.abs(e);
            m = Math.pow(f, n21);
            l = Math.pow(e, n31);
            d = m + l;
            t = Math.abs(d);
            t = Math.pow(t, (-1 / n11));
            f = Math.cos(m2 * p / 4);
            f = 1 / a2 * Math.abs(f);
            f = Math.abs(f);
            e = Math.sin(m2 * p / 4);
            e = 1 / b2 * Math.abs(e);
            e = Math.abs(e);
            k = Math.pow(f, n22);
            h = Math.pow(e, n32);
            a = k + h;
            q = Math.abs(a);
            q = Math.pow(q, (-1 / n12));
            c = t * Math.cos(s) * q * Math.cos(p) * 100;
            o = t * Math.sin(s) * q * Math.cos(p) * 100;
            u = q * Math.sin(p) * 100;
            geometry.vertices.push(new THREE.Vector3(c, o, u));
        }
        var g = new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: color,
            opacity: opac,
            linewidth: 1,
            transparent: true
        }));
        this.scene.add(g)
    }
    scene.add(this.scene);
    this.scene.rotation.x = this.rotX;
    this.scene.rotation.y = this.rotY
};
lineObject.prototype.update = function () {
    scene.remove(this.scene);
    this.scene.children = [];
    var b = linestep;
    for (var s = -Math.PI; s < Math.PI; s += b) {
        geometry = new THREE.Geometry();
        for (var p = -Math.PI / 2; p < Math.PI / 2; p += b) {
            var f, e, n, d, t, a, q, m, l, k, h;
            var c = 0;
            var o = 0;
            var u = 0;
            f = Math.cos(m1 * s / 4);
            f = 1 / a1 * Math.abs(f);
            f = Math.abs(f);
            e = Math.sin(m1 * s / 4);
            e = 1 / b1 * Math.abs(e);
            e = Math.abs(e);
            m = Math.pow(f, n21);
            l = Math.pow(e, n31);
            d = m + l;
            t = Math.abs(d);
            t = Math.pow(t, (-1 / n11));
            f = Math.cos(m2 * p / 4);
            f = 1 / a2 * Math.abs(f);
            f = Math.abs(f);
            e = Math.sin(m2 * p / 4);
            e = 1 / b2 * Math.abs(e);
            e = Math.abs(e);
            k = Math.pow(f, n22);
            h = Math.pow(e, n32);
            a = k + h;
            q = Math.abs(a);
            q = Math.pow(q, (-1 / n12));
            c = t * Math.cos(s) * q * Math.cos(p) * 100;
            o = t * Math.sin(s) * q * Math.cos(p) * 100;
            u = q * Math.sin(p) * 100;
            geometry.vertices.push(new THREE.Vector3(c, o, u));
        }
        var g = new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: color,
            opacity: opac,
            linewidth: 1,
            transparent: true
        }));
        this.scene.add(g)
    }
    scene.add(this.scene)
};

function particleObject(b, a) {
    this.rotX = b;
    this.rotY = a;
    this.scene = new THREE.Object3D();
    this.createParticleObject();
    this.createParticleMaterial()
}
particleObject.prototype.getScene = function () {
    return this.scene;
};
particleObject.prototype.createParticleObject = function () {
    geometry = new THREE.Geometry();
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    geometry.computeCentroids();
    geometry.dynamic = true;
    var q = parseInt(2 * Math.PI / step + 1.3462);
    var o = parseInt(Math.PI / step + 1.5);
    for (var l = 0; l < (q); l++) {
        var u = -Math.PI + l * step;
        for (var h = 0; h < (o); h++) {
            var s = -Math.PI / 2 + h * step;
            var m, k, n, g, v, e, t;
            var f = 0;
            var p = 0;
            var w = 0;
            m = Math.cos(m1 * u / 4);
            m = 1 / a1 * Math.abs(m);
            m = Math.abs(m);
            k = Math.sin(m1 * u / 4);
            k = 1 / b1 * Math.abs(k);
            k = Math.abs(k);
            g = Math.pow(m, n21) + Math.pow(k, n31);
            v = Math.abs(g);
            v = Math.pow(v, (-1 / n11));
            m = Math.cos(m2 * s / 4);
            m = 1 / a2 * Math.abs(m);
            m = Math.abs(m);
            k = Math.sin(m2 * s / 4);
            k = 1 / b2 * Math.abs(k);
            k = Math.abs(k);
            e = Math.pow(m, n22) + Math.pow(k, n32);
            t = Math.abs(e);
            t = Math.pow(t, (-1 / n12));
            f = v * Math.cos(u) * t * Math.cos(s) * 100;
            p = v * Math.sin(u) * t * Math.cos(s) * 100;
            w = t * Math.sin(s) * 100;
            geometry.vertices.push(new THREE.Vector3(f, p, w));
        }
    }
    for (var u = 0; u < (q - 1); u++) {
        for (var s = 0; s < (o - 1); s++) {
            var d = u * o + s;
            var c = u * o + s + 1;
            var b = (u + 1) * o + s + 1;
            var a = (u + 1) * o + s;
            geometry.faces.push(new THREE.Face4(d, c, b, a))
        }
    }
};
particleObject.prototype.update = function () {
    this.createParticleObject();
    material.opacity = opac;
    material.color.setHex(color);
    this.scene.geometry.vertices = geometry.vertices;
    this.scene.geometry.verticesNeedUpdate = true;
};

particleObject.prototype.createParticleMaterial = function () {
    material = new THREE.ParticleBasicMaterial({
        size: pSize,
        color: color,
        blending: THREE.AdditiveBlending,
        transparent: true
    });
    this.scene = new THREE.ParticleSystem(geometry, material);
    this.scene.castShadow = true;
    scene.add(this.scene);
    this.scene.rotation.x = this.rotX;
    this.scene.rotation.y = this.rotY
};

function meshObject(b, a) {
    this.rotX = b;
    this.rotY = a;
    this.scene = new THREE.Object3D();
    this.createMeshObject();
    this.createMeshMaterial()
}
meshObject.prototype.getScene = function () {
    return this.scene
};
meshObject.prototype.createMeshObject = function () {
    geometry = new THREE.Geometry();
    geometry.dynamic = true;
    step = 0.05;
    var q = parseInt(2 * Math.PI / step + 1.3462);
    var o = parseInt(Math.PI / step + 1.5);
    for (var l = 0; l < (q); l++) {
        var u = -Math.PI + l * step;
        for (var h = 0; h < (o); h++) {
            var s = -Math.PI / 2 + h * step;
            var m, k, n, g, v, e, t;
            var f = 0;
            var p = 0;
            var w = 0;
            m = Math.cos(m1 * u / 4);
            m = 1 / a1 * Math.abs(m);
            m = Math.abs(m);
            k = Math.sin(m1 * u / 4);
            k = 1 / b1 * Math.abs(k);
            k = Math.abs(k);
            g = Math.pow(m, n21) + Math.pow(k, n31);
            v = Math.abs(g);
            v = Math.pow(v, (-1 / n11));
            m = Math.cos(m2 * s / 4);
            m = 1 / a2 * Math.abs(m);
            m = Math.abs(m);
            k = Math.sin(m2 * s / 4);
            k = 1 / b2 * Math.abs(k);
            k = Math.abs(k);
            e = Math.pow(m, n22) + Math.pow(k, n32);
            t = Math.abs(e);
            t = Math.pow(t, (-1 / n12));
            f = v * Math.cos(u) * t * Math.cos(s) * 100;
            p = v * Math.sin(u) * t * Math.cos(s) * 100;
            w = t * Math.sin(s) * 100;
            geometry.vertices.push(new THREE.Vector3(f, p, w))
        }
    }
    for (var u = 0; u < (q - 1); u++) {
        for (var s = 0; s < (o - 1); s++) {
            var d = u * o + s;
            var c = u * o + s + 1;
            var b = (u + 1) * o + s + 1;
            var a = (u + 1) * o + s;
            geometry.faces.push(new THREE.Face4(d, c, b, a))
        }
    }
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    geometry.computeCentroids();
};
meshObject.prototype.createMeshMaterial = function () {
    material = new THREE.MeshLambertMaterial();
    this.scene = new THREE.Mesh(geometry, material);
    this.scene.doubleSided = true;
    this.scene.castShadow = true;
    this.scene.receiveShadow = true;
    scene.add(this.scene);
    this.scene.rotation.x = this.rotX;
    this.scene.rotation.y = this.rotY
};
meshObject.prototype.update = function () {
    this.createMeshObject();
    material.ambient.setHex(color);
    this.scene.geometry.vertices = geometry.vertices;
    this.scene.geometry.verticesNeedUpdate = true
};