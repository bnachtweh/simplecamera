const Observable = require("FuseJS/Observable");
const Camera = require("FuseJS/Camera");

let imagePath = new Observable();

function takePicture() {
    /**
     * Doe een simpele call naar de Camera-api. Verder geen error-afhandeling.
     */
    Camera.takePicture()
        .then(
            picture => {
                imagePath.value = picture;
            }
        )
}

module.exports = {
    takePicture: takePicture,
    imagePath: imagePath
}