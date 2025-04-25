import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

export const DEFAULT_GLOBE_CONFIG = {
  pointSize: 4,
  globeColor: "#1a4275", // Earth-like blue
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.15,
  emissive: "#103464",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#4287f5",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export const MISSION_DATA = [
  {
    order: 1,
    startLat: 28.5618,
    startLng: -80.5777, // Cape Canaveral
    endLat: 0,
    endLng: 0, // Destination
    arcAlt: 0.3,
    color: "#41f4e8",
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278, // London
    endLat: 40.7128,
    endLng: -74.0060, // New York
    arcAlt: 0.2,
    color: "#4287f5",
  },
  {
    order: 3,
    startLat: 39.9042,
    startLng: 116.4074, // Beijing
    endLat: -33.8688,
    endLng: 151.2093, // Sydney
    arcAlt: 0.5,
    color: "#9d4edd",
  },
  {
    order: 4,
    startLat: 19.0760,
    startLng: 72.8777, // Mumbai
    endLat: 55.7558,
    endLng: 37.6173, // Moscow
    arcAlt: 0.3,
    color: "#f97316",
  },
  {
    order: 5,
    startLat: 35.6762,
    startLng: 139.6503, // Tokyo
    endLat: -22.9068,
    endLng: -43.1729, // Rio de Janeiro
    arcAlt: 0.6,
    color: "#ffffff",
  },
];