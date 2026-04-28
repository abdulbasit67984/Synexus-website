"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Float,
    Html,
    OrbitControls,
    Sparkles,
    Text
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";

const modules = [
    { label: "ERP", angle: 0 },
    { label: "CRM", angle: 60 },
    { label: "CMS", angle: 120 },
    { label: "AI", angle: 180 },
    { label: "Cloud", angle: 240 },
    { label: "Analytics", angle: 300 },
];

function ModuleLabel({
    label,
    angle,
}: {
    label: string;
    angle: number;
}) {
    const radius = 2.35;
    const radian = (angle * Math.PI) / 180;

    const x = Math.cos(radian) * radius;
    const z = Math.sin(radian) * radius;

    return (
        <Float speed={1.7} rotationIntensity={0.25} floatIntensity={0.45}>
            <group position={[x, 0.75, z]}>
                <mesh>
                    <sphereGeometry args={[0.08, 24, 24]} />
                    <meshStandardMaterial
                        color="#16a79e"
                        emissive="#16a79e"
                        emissiveIntensity={1.3}
                    />
                </mesh>

                <Html center distanceFactor={9}>
                    <div className="rounded-full border border-[#cdeee9] bg-white/90 px-3 py-1 text-xs font-semibold text-[#129b92] shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur">
                        {label}
                    </div>
                </Html>
            </group>
        </Float>
    );
}

function createDirectionalCutPillarGeometry({
    width,
    length,
    depth,
    cut,
    topCut,
    bottomCut,
    bevelSize,
    bevelThickness,
    outwardSide,
}: {
    width: number;
    length: number;
    depth: number;
    cut: number;
    topCut?: number;
    bottomCut?: number;
    bevelSize: number;
    bevelThickness: number;
    outwardSide: "left" | "right";
}) {
    const halfWidth = width / 2;
    const halfLength = length / 2;
    const safeTopCut = Math.min(
        Math.max(topCut ?? cut, 0),
        halfLength - 0.01
    );
    const safeBottomCut = Math.min(
        Math.max(bottomCut ?? cut, 0),
        halfLength - 0.01
    );

    const topLeftY =
        outwardSide === "left" ? halfLength - safeTopCut : halfLength;
    const topRightY =
        outwardSide === "right" ? halfLength - safeTopCut : halfLength;
    const bottomRightY =
        outwardSide === "left" ? -halfLength + safeBottomCut : -halfLength;
    const bottomLeftY =
        outwardSide === "right" ? -halfLength + safeBottomCut : -halfLength;

    const shape = new THREE.Shape();
    // Full-width top and bottom slashes, without side corner nib cuts.
    shape.moveTo(-halfWidth, topLeftY);
    shape.lineTo(halfWidth, topRightY);
    shape.lineTo(halfWidth, bottomRightY);
    shape.lineTo(-halfWidth, bottomLeftY);

    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth,
        steps: 1,
        bevelEnabled: true,
        bevelSize,
        bevelThickness,
        bevelSegments: 1,
        curveSegments: 1,
    });

    geometry.translate(0, 0, -depth / 2);
    geometry.computeVertexNormals();

    return geometry;
}


function BrandSurfaceText() {
    return (
        <group position={[0, -0.615, 0.78]} rotation={[-Math.PI / 2, 0, 0]}>
                    <Text
                        position={[0, 0.18, 0]}
                        fontSize={0.065}
                        letterSpacing={0.18}
                        color="#16a79e"
                        anchorX="center"
                        anchorY="middle"
                    >
                        INNOVATE. INTEGRATE. ELEVATE.
                    </Text>

                    <Text
                        position={[-0.32, 0, 0]}
                        fontSize={0.22}
                        letterSpacing={0.28}
                        color="#0f1720"
                        anchorX="center"
                        anchorY="middle"
                    >
                        SYNE
                    </Text>

                    <Text
                        position={[0.17, 0, 0.001]}
                        fontSize={0.22}
                        letterSpacing={0.28}
                        color="#16a79e"
                        anchorX="center"
                        anchorY="middle"
                    >
                        X
                    </Text>

                    <Text
                        position={[0.47, 0, 0]}
                        fontSize={0.22}
                        letterSpacing={0.28}
                        color="#0f1720"
                        anchorX="center"
                        anchorY="middle"
                    >
                        US
                    </Text>

                    <Text
                        position={[0, -0.18, 0]}
                        fontSize={0.055}
                        letterSpacing={0.02}
                        color="#24303b"
                        anchorX="center"
                        anchorY="middle"
                    >
                        Smart Technology. Seamless Experience. Infinite Possibilities.
                    </Text>
                </group>
    );
}

function SynexusXCore() {
    const groupRef = useRef<Group>(null);
    const orbitRef = useRef<Group>(null);
    const { pointer } = useThree();

    const tealMaterial = useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                color: "#12706a",
                roughness: 0.18,
                metalness: 0.35,
                transmission: 0.15,
                thickness: 0.8,
                emissive: "#0b8f87",
                emissiveIntensity: 0.22,
            }),
        []
    );

    const whiteMaterial = useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                color: "#ffffff",
                roughness: 0.07,
                metalness: 0.02,
                clearcoat: 1,
                clearcoatRoughness: 0.03,
                reflectivity: 0.18,
                emissive: "#ffffff",
                emissiveIntensity: 0.08,
            }),
        []
    );

    const silverFaceMaterial = useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                color: "#ffffff",
                roughness: 0.08,
                metalness: 0.03,
                clearcoat: 1,
                clearcoatRoughness: 0.035,
                reflectivity: 0.22,
                emissive: "#ffffff",
                emissiveIntensity: 0.06,
            }),
        []
    );

    const tealPillarGeometry = useMemo(
        () =>
            createDirectionalCutPillarGeometry({
                width: 0.36,
                length: 2.75,
                depth: 0.32,
                cut: 0.36,
                bevelSize: 0.006,
                bevelThickness: 0.006,
                outwardSide: "right",
            }),
        []
    );

    const whitePillarTopGeometry = useMemo(
        () =>
            createDirectionalCutPillarGeometry({
                width: 0.36,
                length: 1.2,
                depth: 0.32,
                cut: 0,
                topCut: 0.36,
                bottomCut: 0,
                bevelSize: 0.006,
                bevelThickness: 0.006,
                outwardSide: "left",
            }),
        []
    );

    const whitePillarBottomGeometry = useMemo(
        () =>
            createDirectionalCutPillarGeometry({
                width: 0.36,
                length: 1.2,
                depth: 0.32,
                cut: 0,
                topCut: 0,
                bottomCut: 0.36,
                bevelSize: 0.006,
                bevelThickness: 0.006,
                outwardSide: "left",
            }),
        []
    );

    const whitePillarTopCoverGeometry = useMemo(
        () =>
            createDirectionalCutPillarGeometry({
                width: 0.33,
                length: 1.12,
                depth: 0.034,
                cut: 0,
                topCut: 0.33,
                bottomCut: 0,
                bevelSize: 0.003,
                bevelThickness: 0.003,
                outwardSide: "left",
            }),
        []
    );

    const whitePillarBottomCoverGeometry = useMemo(
        () =>
            createDirectionalCutPillarGeometry({
                width: 0.33,
                length: 1.12,
                depth: 0.034,
                cut: 0,
                topCut: 0,
                bottomCut: 0.33,
                bevelSize: 0.003,
                bevelThickness: 0.003,
                outwardSide: "left",
            }),
        []
    );

    const silverFaceGeometry = useMemo(
        () =>
            createDirectionalCutPillarGeometry({
                width: 0.33,
                length: 2.68,
                depth: 0.034,
                cut: 0.33,
                bevelSize: 0.003,
                bevelThickness: 0.003,
                outwardSide: "right",
            }),
        []
    );

    useFrame((_, delta) => {
        if (!groupRef.current || !orbitRef.current) return;

        groupRef.current.rotation.y += delta * 0.35;
        orbitRef.current.rotation.y -= delta * 0.22;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            pointer.y * 0.16,
            0.05
        );

        groupRef.current.rotation.z = THREE.MathUtils.lerp(
            groupRef.current.rotation.z,
            -pointer.x * 0.12,
            0.05
        );
    });

    return (
        <group>
            <Sparkles
                count={55}
                scale={[5.2, 3.2, 5.2]}
                size={2.4}
                speed={0.35}
                color="#16a79e"
                opacity={0.55}
            />

            <group ref={orbitRef}>
                {modules.map((module) => (
                    <ModuleLabel
                        key={module.label}
                        label={module.label}
                        angle={module.angle}
                    />
                ))}
            </group>

            <group ref={groupRef} position={[0, -0.1, 0]}>
                <Suspense fallback={null}>
                    <BrandSurfaceText />
                </Suspense>
                <mesh position={[0, -1.05, 0]}>
                    <cylinderGeometry args={[1.98, 1.98, 0.28, 128]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        roughness={0.12}
                        metalness={0.03}
                        emissive="#ffffff"
                        emissiveIntensity={0.03}
                    />
                </mesh>

                <mesh position={[0, -0.83, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.75, 0.055, 28, 180]} />
                    <meshStandardMaterial
                        color="#12706a"
                        emissive="#12706a"
                        emissiveIntensity={2.6}
                        roughness={0.12}
                        metalness={0.25}
                    />
                </mesh>

                <mesh position={[0, -0.72, 0]}>
                    <cylinderGeometry args={[1.72, 1.72, 0.2, 128]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        roughness={0.1}
                        metalness={0.02}
                        emissive="#ffffff"
                        emissiveIntensity={0.04}
                    />
                </mesh>



                <group position={[0, 0.36, 0]}>
                    <group rotation={[0, 0, Math.PI / 4]}>
                        <mesh geometry={tealPillarGeometry} material={tealMaterial} />

                        <mesh
                            geometry={silverFaceGeometry}
                            position={[0, 0, 0.177]}
                            material={silverFaceMaterial}
                        />
                        <mesh
                            geometry={silverFaceGeometry}
                            position={[0, 0, -0.177]}
                            material={silverFaceMaterial}
                        />
                    </group>

                    <group rotation={[0, 0, -Math.PI / 4]}>
                        <mesh
                            geometry={whitePillarTopGeometry}
                            position={[0, 0.86, 0]}
                            material={tealMaterial}
                        />
                        <mesh
                            geometry={whitePillarTopCoverGeometry}
                            position={[0, 0.86, 0.177]}
                            material={whiteMaterial}
                        />
                        <mesh
                            geometry={whitePillarTopCoverGeometry}
                            position={[0, 0.86, -0.177]}
                            material={whiteMaterial}
                        />

                        <mesh
                            geometry={whitePillarBottomGeometry}
                            position={[0, -0.86, 0]}
                            material={tealMaterial}
                        />
                        <mesh
                            geometry={whitePillarBottomCoverGeometry}
                            position={[0, -0.86, 0.177]}
                            material={whiteMaterial}
                        />
                        <mesh
                            geometry={whitePillarBottomCoverGeometry}
                            position={[0, -0.86, -0.177]}
                            material={whiteMaterial}
                        />
                    </group>

                </group>
            </group>
        </group>
    );
}

export function SynexusXScene() {
    return (
        <div className="relative h-full min-h-[420px] w-full">
            <div className="absolute inset-x-10 bottom-8 h-28 rounded-full bg-[#16a79e]/20 blur-3xl" />

            <Canvas
                camera={{ position: [0, 1.2, 6.2], fov: 42 }}
                dpr={[1, 1.7]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.45,
                }}
            >
                <ambientLight intensity={2.1} />
                <hemisphereLight args={["#ffffff", "#e8fffc", 1.45]} />
                <directionalLight position={[4, 5, 5]} intensity={3.1} />
                <directionalLight position={[-5, 3, 2]} intensity={1.25} />
                <pointLight position={[0, 1.5, 4]} intensity={1.6} color="#ffffff" />
                <pointLight position={[-3, 2, 3]} intensity={2.2} color="#16a79e" />

                <SynexusXCore />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.7}
                    maxPolarAngle={Math.PI / 2.1}
                    rotateSpeed={0.45}
                />
            </Canvas>
        </div>
    );
}
