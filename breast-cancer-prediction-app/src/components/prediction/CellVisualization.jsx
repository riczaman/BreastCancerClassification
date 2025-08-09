import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Target } from 'lucide-react';

/**
 * 3D Cell Visualization Component
 * Renders a 3D cell model that changes appearance based on prediction results
 * 
 * @param {Object} props - Component props
 * @param {Object} props.prediction - Prediction results from ML model
 * @param {boolean} props.isAnimating - Whether the cell should animate (during prediction)
 * @returns {JSX.Element} 3D cell visualization component
 */
const CellVisualization = ({ prediction, isAnimating }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cellRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Clean up previous scene
    if (rendererRef.current && mountRef.current.contains(rendererRef.current.domElement)) {
      mountRef.current.removeChild(rendererRef.current.domElement);
    }

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    
    const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 200);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Point light for dynamic lighting
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-10, 10, 10);
    scene.add(pointLight);

    // Create cell structure
    const cellGroup = new THREE.Group();
    
    // Determine cell appearance based on prediction
    const isMalignant = prediction?.prediction === 'Malignant';
    const riskLevel = prediction?.riskScore || 0;
    
    // Main cell body with dynamic sizing based on risk
    const cellSize = 1 + (riskLevel / 10) * 0.3; // Larger for higher risk
    const cellGeometry = new THREE.SphereGeometry(cellSize, 32, 32);
    
    // Dynamic material based on prediction
    const cellColor = isMalignant 
      ? new THREE.Color(0xff4444).lerp(new THREE.Color(0x8b0000), riskLevel / 10)
      : new THREE.Color(0x44ff44).lerp(new THREE.Color(0x90EE90), (10 - riskLevel) / 10);
    
    const cellMaterial = new THREE.MeshPhongMaterial({
      color: cellColor,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
      specular: 0x111111
    });
    
    const cellMesh = new THREE.Mesh(cellGeometry, cellMaterial);
    cellMesh.castShadow = true;
    cellMesh.receiveShadow = true;
    cellGroup.add(cellMesh);

    // Cell nucleus - smaller and darker
    const nucleusSize = cellSize * 0.3;
    const nucleusGeometry = new THREE.SphereGeometry(nucleusSize, 16, 16);
    const nucleusColor = isMalignant ? 0x8b0000 : 0x006400;
    const nucleusMaterial = new THREE.MeshPhongMaterial({
      color: nucleusColor,
      transparent: true,
      opacity: 0.9,
      shininess: 150
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    nucleusMesh.castShadow = true;
    cellGroup.add(nucleusMesh);

    // Add surface irregularities for malignant cells
    if (isMalignant && riskLevel > 5) {
      const projectionCount = Math.floor(riskLevel * 1.5);
      for (let i = 0; i < projectionCount; i++) {
        const projectionSize = 0.05 + (Math.random() * 0.1);
        const projectionGeometry = new THREE.SphereGeometry(projectionSize, 8, 8);
        const projectionMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xcc2222,
          transparent: true,
          opacity: 0.7 
        });
        const projection = new THREE.Mesh(projectionGeometry, projectionMaterial);
        
        // Position on cell surface
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const distance = cellSize + projectionSize;
        projection.position.set(
          distance * Math.sin(phi) * Math.cos(theta),
          distance * Math.sin(phi) * Math.sin(theta),
          distance * Math.cos(phi)
        );
        
        projection.castShadow = true;
        cellGroup.add(projection);
      }
    }

    // Add healthy cell membrane for benign cells
    if (!isMalignant) {
      const membraneGeometry = new THREE.SphereGeometry(cellSize + 0.1, 32, 32);
      const membraneMaterial = new THREE.MeshPhongMaterial({
        color: 0x90EE90,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide
      });
      const membrane = new THREE.Mesh(membraneGeometry, membraneMaterial);
      cellGroup.add(membrane);
    }

    scene.add(cellGroup);
    cellRef.current = cellGroup;
    
    // Position camera
    camera.position.z = 3;
    camera.position.y = 0.5;
    
    // Add to DOM
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (cellRef.current) {
        // Base rotation
        cellRef.current.rotation.x += 0.005;
        cellRef.current.rotation.y += 0.01;
        
        // Enhanced animation during prediction
        if (isAnimating) {
          const time = Date.now() * 0.005;
          cellRef.current.scale.setScalar(1 + 0.15 * Math.sin(time));
          cellRef.current.rotation.z += 0.02;
          
          // Color pulsing effect
          if (cellMesh.material) {
            cellMesh.material.opacity = 0.6 + 0.3 * Math.sin(time * 2);
          }
        } else {
          // Return to normal scale when not animating
          cellRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
        
        // Dynamic lighting effects
        if (pointLight) {
          pointLight.position.x = 10 * Math.sin(Date.now() * 0.002);
          pointLight.position.z = 10 * Math.cos(Date.now() * 0.002);
        }
      }
      
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };
    
    animate();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current && mountRef.current && mountRef.current.contains(rendererRef.current.domElement)) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [prediction, isAnimating]);

  return (
    <div className="medical-card">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
          <Target className="h-5 w-5 text-white" />
        </div>
        <span>Cell Visualization</span>
      </h3>
      
      <div 
        ref={mountRef} 
        className="w-full h-48 rounded-xl overflow-hidden shadow-inner bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-gray-200/50"
      />
      
      <div className="mt-4 space-y-2">
        <p className="text-xs text-gray-500 text-center">
          Real-time 3D cell representation based on prediction results
        </p>
        
        {prediction && (
          <div className="flex items-center justify-center space-x-4 text-xs">
            <div className={`flex items-center space-x-1 ${
              prediction.prediction === 'Malignant' ? 'text-red-600' : 'text-green-600'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                prediction.prediction === 'Malignant' ? 'bg-red-500' : 'bg-green-500'
              }`}></div>
              <span className="font-medium">{prediction.prediction}</span>
            </div>
            
            <div className="text-gray-500">
              Risk: {prediction.riskScore}/10
            </div>
          </div>
        )}
        
        {!prediction && (
          <div className="text-center text-xs text-gray-400">
            Enter data and predict to see cell visualization
          </div>
        )}
      </div>
    </div>
  );
};

export default CellVisualization;