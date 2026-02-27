import React, { useEffect, useRef, useState } from "react";

const UnityLoader = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [unityInstance, setUnityInstance] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;

    // Remove any Safari-specific patches (we don't need them)
    if (typeof HTMLCanvasElement !== "undefined") {
      HTMLCanvasElement.prototype.getContextSafariWebGL2Fixed = undefined;
    }

    const buildUrl = "/InfraRecon/ironshift/assets/Build";
    const loaderUrl = `${buildUrl}/assets.loader.js`;
    const dataUrl = `${buildUrl}/assets.data`;
    const frameworkUrl = `${buildUrl}/assets.framework.js`;
    const wasmUrl = `${buildUrl}/assets.wasm`;

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      if (window.createUnityInstance) {
        window.createUnityInstance(canvas, {
          dataUrl,
          frameworkUrl,
          codeUrl: wasmUrl,
          streamingAssetsUrl: "StreamingAssets",
          companyName: "YourCompany",
          productName: "InfraRecon",
          productVersion: "1.0",
          devicePixelRatio: window.devicePixelRatio,
        })
        .then((instance) => setUnityInstance(instance))
        .catch((err) => console.error("Unity load error:", err));
      }
    };
    document.body.appendChild(script);

    return () => {
      if (unityInstance) {
        unityInstance.Quit().catch(() => {});
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="unity-container" // ✅ Important: Unity may use this ID
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        id="unity-canvas" // ✅ Important: give the canvas an explicit ID
        style={{ width: "100%", height: "100%", background: "#000" }}
      />
    </div>
  );
};

export default UnityLoader;
