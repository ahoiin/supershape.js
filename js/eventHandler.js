function addEventListeners() {
    callbacks = {
        onMouseDown: function (a) {
            mouseDown = true;
            lastMouseX = a.clientX;
            lastMouseY = a.clientY
        },
        onMouseUp: function (a) {
            mouseDown = false
        },
        onMouseMove: function (c) {
            if (mouseDown) {
                var b = c.clientX;
                var a = c.clientY;
                rotX = object.scene.rotation.x += (a - lastMouseY) * 0.01;
                rotY = object.scene.rotation.y += (b - lastMouseX) * 0.01;
                lastMouseY = a;
                lastMouseX = b
            }
        },
        onDblClick: function () {
            rotX = object.scene.rotation.x = 0;
            rotY = object.scene.rotation.y = 0
        }
    };
    document.getElementById("container").onmousedown = callbacks.onMouseDown;
    document.getElementById("container").onmouseup = callbacks.onMouseUp;
    document.getElementById("container").onmousemove = callbacks.onMouseMove;
    document.getElementById("container").ondblclick = callbacks.onDblClick;
    document.getElementById("container").onkeydown = callbacks.onKeyDown;
};