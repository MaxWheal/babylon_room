import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";

export class SceneBuilder {
    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        })
    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine);

        const camera = new FreeCamera("camera", new Vector3(0, 1, -5), scene);
        camera.attachControl();

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
        hemiLight.intensity = 0.5;

        const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);

        const ball = MeshBuilder.CreateSphere("ball", { diameter: 1 }, scene);
        ball.position = new Vector3(0, 1, 0);

        return scene;
    }
}
