import * as THREE from 'three';

export default () => {
  class Scene {
    constructor(options) {
      this.$el = options.el;
      this.time = 0;

      this.bindAll();
      this.init();
    }

    bindAll() {
      this.render = this.render.bind(this);
      this.resize = this.resize.bind(this);
    }

    init() {
      this.textureLoader = new THREE.TextureLoader();
      this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 2000);
      this.camera.position.z = 200;
      this.camera.position.y = -70;
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      this.scene = new THREE.Scene();

      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$el.appendChild(this.renderer.domElement);


      this.createParticles();
      this.bindEvents();
      this.resize();
      this.render();
    }

    createParticles() {
      const plane = new THREE.SphereBufferGeometry(50, 102, 42);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = '';

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
          texture: { value: textureLoader.load("images/oval_1.svg") },
          resolution: { value: new THREE.Vector2() }
        },

        vertexShader: document.getElementById('vertex-shader').textContent,
        fragmentShader: document.getElementById('fragment-shader').textContent,
        blending: THREE.AdditiveBlending,
        transparent: true

      });

      // console.log(material.uniforms.texture);

      //const material = new THREE.PointsMaterial( { size: 1 } );
      this.particles = new THREE.Points(plane, material);
      this.particles.rotation.x = this.degToRad(-0);

      this.scene.add(this.particles);
    }


    bindEvents() {
      // window.addEventListener('mousemove', this.mousemove);
      window.addEventListener('resize', this.resize);
    }


    resize() {
      let w;
      let h;
      if ($(window).width() < 768) {
        w = 210;
        h = 320;
      } else {
        w = window.innerWidth;
        h = window.innerHeight;
      }
      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }

    moveParticles() {
      this.particles.material.uniforms.time.value = this.time;
      // this.particles.material.needsUpdate = true;
    }

    // Animations

    render() {
      requestAnimationFrame(this.render);
      this.time += .03;

      this.moveParticles();
      this.renderer.render(this.scene, this.camera);
    }

    // Utils
    degToRad(angle) {
      return angle * Math.PI / 180;
    }

  }

  const scene = new Scene({
    el: document.querySelector('#canvas')
  });
}