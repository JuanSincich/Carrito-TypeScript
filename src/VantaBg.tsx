import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xffcc39, // Corregido
        midtoneColor: 0x3333d9, // Corregido
        lowlightColor: 0x55ff05, // Corregido
        baseColor: 0xffffff,
        blurFactor: 0.31,
        speed: 0.0,
        zoom: 0.2,
      });

      return () => vantaEffect.destroy();
    }
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1, // Para que esté en el fondo
      }}
    />
  );
};

export default VantaBackground;
