
<script setup>
  let B = BABYLON;
  let canvas = document.querySelector("canvas");
  let engine = new B.Engine(canvas, true);

  let createS = function () {
    let s = new B.Scene(engine);
    s.gravity = new B.Vector3(0, -0.098, 0);
    s.collisionsEnabled = true;

    //let cam = new B.ArcRotateCamera("camera", Math.PI*0.2, Math.PI*0.3, 40, new B.Vector3(0,0,0), s);
    let cam = new B.UniversalCamera("camera", new B.Vector3(0,0,0), s)
    cam.attachControl(canvas, false);
    cam.ellipsoid = new B.Vector3(0.1, 1, 0.1);
    cam.checkCollisions = true;
    cam.speed = 0.25;
    cam.applyGravity = true;
    cam.position = new B.Vector3(1.5, 2, -5);
    //cam.setTarget(new B.Vector3(-2, 1, 0))
    cam.setTarget(new B.Vector3(1.4, 1, -4.9))

    let light0 = new B.HemisphericLight("light0", new B.Vector3(1,2,3), s);
    light0.intensity = 0.3;
    let light = new B.DirectionalLight("light1", new B.Vector3(0,-1,0))
    light.intensity = 0.9;
    light.diffuse = new B.Color3(1,0,0)

    let curColor = 0;
    function changeLight() {
      if (curColor % 6 == 0) {
        light.diffuse = new B.Color3(0,1,0)
      } 
      else if (curColor % 6 == 1) {
        light.diffuse = new B.Color3(0,1,1)
      } 
      else if (curColor % 6 == 2) {
        light.diffuse = new B.Color3(0,0,1)
      } 
      else if (curColor % 6 == 3) {
        light.diffuse = new B.Color3(1,0,1)
      } 
      else if (curColor % 6 == 4) {
        light.diffuse = new B.Color3(1,0,0)
      } 
      else if (curColor % 6 == 5) {
        light.diffuse = new B.Color3(1,1,0)
      } 
      curColor++;
    }
    
    setInterval(changeLight, 1000);
    

    //ground
    let ground = B.MeshBuilder.CreateGround("ground", { height: 100, width: 100, subdivisions: 8 }, s);
    ground.receiveShadows = true;
    ground.checkCollisions = true;

    B.SceneLoader.ImportMesh(null, "/", "dancer1.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,0,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      //dancer.position = new B.Vector3(-2, 0.2, -12.25);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer2.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,-Math.PI/12,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      dancer.position = new B.Vector3(-2, 0, 0);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer3.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,-Math.PI/8,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      dancer.position = new B.Vector3(-3, 0, -1);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer4.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,-Math.PI/2,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(0.6,0.6,0.6);
      dancer.position = new B.Vector3(-3, 0, -3);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer5.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,Math.PI/1.2,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      dancer.position = new B.Vector3(-1, 0, -4);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer6.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,Math.PI/2,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      dancer.position = new B.Vector3(0, 0, -2);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer7.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,Math.PI/2,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      dancer.position = new B.Vector3(2, 0, -1);
    })
    B.SceneLoader.ImportMesh(null, "/", "dancer8.glb", s, function(meshes, particalSystem, skeletons){
      let dancer = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
          meshes[i].setParent(dancer);
          meshes[i].rotation = new B.Vector3(Math.PI/2,Math.PI/2,0);
      }
      dancer.receiveShadows = true;
      dancer.scaling = new B.Vector3(1.3,1.3,1.3);
      dancer.position = new B.Vector3(2, 0, -3);
    })
   


    //skybox
    let skybox = new B.Mesh.CreateBox("skyBox", 2000, s);
    skybox.infiniteDistance = true;
    let sbMaterial = new B.StandardMaterial("skyBoxMaterial", s);
    sbMaterial.backFaceCulling = false;
    sbMaterial.reflectionTexture = new B.CubeTexture("galaxy", s)
    sbMaterial.reflectionTexture.coordinatesMode = B.Texture.SKYBOX_MODE;
    sbMaterial.diffuseColor = new B.Color3(0,0,0);
    sbMaterial.specularColor = new B.Color3(0,0,0);
    skybox.material = sbMaterial;


    return s;
  }


  let scene = createS();
  let renderLoop = function() {
    scene.render();
  }
  
  let sound = new B.Sound("music", "Stayin_Alive.mp3", scene, null, {
    loop: true,
    autoplay: true
  })

  engine.runRenderLoop(renderLoop)
  window.addEventListener("resize", () => engine.resize())
</script>
<template>

</template>
<style>
  canvas {
    width: 100%;
    height: auto;
    
  }
</style>