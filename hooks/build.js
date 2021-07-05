const fs = require('fs');
const util = require('util');
const path = require('path');
const stat = util.promisify(fs.stat);

module.exports = function (ctx) {

    if (!ctx.build.platform == 'android') return;
    const platformRoot = path.join(ctx.project.dir, 'android');
    FILE_PATHS = {
        "android.cameraPreview": ctx.project.dir+"/node_modules/@capacitor-community/camera-preview/android/src/main/java/com/ahm/capacitor/camera/preview/CameraPreview.java"
    };

    // Commenting Manifest.permission.RECORD_AUDIO on CameraPreview.java 
    console.log("Commenting Manifest.permission.RECORD_AUDIO on CameraPreview.java ...");
    var cameraPreviewPath = path.resolve(process.cwd(), FILE_PATHS["android.cameraPreview"]);
    var cameraPreviewContents = fs.readFileSync(cameraPreviewPath).toString();
    fs.writeFileSync(cameraPreviewPath, cameraPreviewContents.replace(/Manifest.permission.RECORD_AUDIO/g, '// Manifest.permission.RECORD_AUDIO ,'), 'utf8');
    
};