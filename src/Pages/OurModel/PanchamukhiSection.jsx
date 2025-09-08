// src/components/PanchamukhiSection.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  BookOpenIcon,
  HeartIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// breathing border animation
const styles = `
@keyframes pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.3); }
  50% { box-shadow: 0 0 0 8px rgba(0,0,0,0); }
}
`;

const panchamukhiData = [
  {
    title: "Spiritual",
    description:
      "Practices like Agnihotra, Pooja, Bhajans, Shloka chanting, and Surya Vandana instill devotion and inner discipline.",
    border: "border-orange-500",
    text: "text-orange-500",
    bg: "bg-orange-50",
    icon: <BookOpenIcon className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Creative",
    description:
      "Art, Dance, Drama, and Music serve as tools for self-expression and cultural connection. Children explore their imagination.",
    border: "border-yellow-500",
    text: "text-yellow-500",
    bg: "bg-yellow-50",
    icon: <HeartIcon className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Physical",
    description:
      "Practices like Mallakhamba, rope climbing, Silambam, and sports enhance strength and flexibility.",
    border: "border-blue-500",
    text: "text-blue-500",
    bg: "bg-blue-50",
    icon: <UserIcon className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Intellectual",
    description:
      "Chess, academics, and inquiry-based learning sharpen critical thinking and curiosity.",
    border: "border-teal-500",
    text: "text-teal-500",
    bg: "bg-teal-50",
    icon: <AcademicCapIcon className="h-8 w-8 text-teal-500" />,
  },
  {
    title: "Emotional",
    description:
      "Through Bhajans, Seva, animal care, and nature, children develop compassion, empathy, and gratitude.",
    border: "border-green-500",
    text: "text-green-500",
    bg: "bg-green-50",
    icon: <HandRaisedIcon className="h-8 w-8 text-green-500" />,
  },
];

function getCirclePosition(idx, total, radius, centerX, centerY) {
  const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y, angle };
}

export default function PanchamukhiSection() {
  const containerRef = useRef(null);
  const [size, setSize] = useState(360); // default mobile size

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      // lock within max-w to preserve circle shape
      const newSize = Math.min(rect.width, 440); 
      setSize(newSize);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const center = size / 2;
  const radius = size / 2.5;
  const innerCircleRadius = size / 6;

  return (
    <>
      <style>{styles}</style>
      <section className="bg-gray-50 py-12 font-sans">
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="relative w-full aspect-square max-w-[300px] md:max-w-[440px]"
          >
            {/* Center Circle (always perfectly centered) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-lg flex flex-col
                items-center justify-center border-2 border-gray-200 text-center z-20"
            >
              <span className="font-bold text-sm md:text-lg">Panchamukhi</span>
              <span className="font-bold text-sm md:text-lg">Shikshana</span>
            </div>

            {panchamukhiData.map((item, idx) => {
              const total = panchamukhiData.length;
              const { x, y, angle } = getCirclePosition(
                idx,
                total,
                radius,
                center,
                center
              );

              const descX = center + (radius + 50) * Math.cos(angle);
              const descY = center + (radius + 50) * Math.sin(angle);

              const lineStartX = center + innerCircleRadius * Math.cos(angle);
              const lineStartY = center + innerCircleRadius * Math.sin(angle);

              return (
                <React.Fragment key={idx}>
                  {/* Line */}
                  <div
                    className="absolute bg-gray-300"
                    style={{
                      left: lineStartX,
                      top: lineStartY,
                      width: Math.sqrt(
                        (x - lineStartX) ** 2 + (y - lineStartY) ** 2
                      ),
                      height: "2px",
                      transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                      transformOrigin: "left center",
                    }}
                  />

                  {/* Icon + Card */}
                  <div
                    className="absolute flex flex-col items-center group cursor-pointer"
                    style={{
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md transition duration-500 ${item.bg} ${item.border}`}
                      style={{ animation: "pulse-border 2s infinite" }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`mt-1 md:mt-2 font-semibold text-xs md:text-sm ${item.text}`}
                    >
                      {item.title}
                    </span>

                    {/* Description (hover) */}
                    <div
                      className="absolute bg-white shadow-md rounded-lg p-2 md:p-3 w-28 md:w-40 text-xs md:text-sm 
                        opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                      style={{
                        left: descX - x,
                        top: descY - y,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
