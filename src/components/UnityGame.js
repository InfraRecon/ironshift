// ./src/components/UnityGame.js
import React, { useEffect, useRef, useState } from "react";

export default function UnityGame() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [unityInstance, setUnityInstance] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;

    // Paths to your Unity build files in public/
    const buildUrl = process.env.PUBLIC_URL + "/assets/Build";
    const loaderUrl = `${buildUrl}/assets.loader.js`;
    const dataUrl = `${buildUrl}/assets.data`;
    const frameworkUrl = `${buildUrl}/assets.framework.js`;
    const wasmUrl = `${buildUrl}/assets.wasm`;

    let scriptTag = document.createElement("script");
    scriptTag.src = loaderUrl;
    scriptTag.onload = () => {
      if (window.createUnityInstance) {
        window
          .createUnityInstance(canvas, {
            dataUrl,
            frameworkUrl,
            codeUrl: wasmUrl,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "Iron Shift",
            productName: "InfraRecon",
            productVersion: "1.0",
            devicePixelRatio: window.devicePixelRatio,
          })
          .then((instance) => setUnityInstance(instance))
          .catch((err) => console.error("Unity load error:", err));
      } else {
        console.error("Unity loader not found after script load");
      }
    };
    scriptTag.onerror = () => {
      console.error("Failed to load Unity loader script");
    };
    document.body.appendChild(scriptTag);

    return () => {
      // Clean up Unity instance on unmount
      if (unityInstance) {
        unityInstance.Quit().catch(() => {});
      }
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="unity-container"
      style={{ width: "100%", height: "100%", minHeight: "400px", position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        id="unity-canvas"
        style={{ width: "100%", height: "100%", background: "#000" }}
      />
    </div>
  );
}