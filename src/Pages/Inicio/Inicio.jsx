import React from "react";
import "./Inicio.css";

export default function CicloSection() {
    return (
        <section className="ciclo-wrap" aria-labelledby="ciclo-title">
            <div className="ciclo-container">
                {/* Cabeçalho */}
                <header className="ciclo-header">
                    <h2 id="ciclo-title" className="ciclo-title">
                       QUEBRE O CICLO DA VIOLÊNCIA
                    </h2>

                </header>

                {/* Gráfico */}
                <div className="ciclo-graph">
                    <CicloViolenciaSVG />
                </div>
            </div>
        </section>
    );
}

function CicloViolenciaSVG() {
    const size = 720;          // viewBox amplo para nitidez em telas grandes
    const center = size / 2;
    const radius = 240;
    const strokeWidth = 28;
    const circumference = 2 * Math.PI * radius;

    const fases = [
        { label: "FASE 1\nAUMENTO DA\nTENSÃO", percent: 33, grad: "url(#grad1)" },
        { label: "FASE 2\nATO DE\nVIOLÊNCIA", percent: 34, grad: "url(#grad2)" },
        { label: "FASE 3\nARREPEN-\nDIMENTO", percent: 33, grad: "url(#grad3)" }
    ];

    let offset = 0;

    return (
        <svg
            className="ciclo-svg"
            viewBox={`0 0 ${size} ${size}`}
            role="img"
            aria-label="Gráfico circular com as três fases do ciclo da violência"
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4b2e83" />
                    <stop offset="100%" stopColor="#7f6ee6" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff4b4b" />
                    <stop offset="100%" stopColor="#e63946" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6a5acd" />
                    <stop offset="100%" stopColor="#9a88ff" />
                </linearGradient>
            </defs>

            {/* Pontilhado externo */}
            <circle
                cx={center}
                cy={center}
                r={radius + 70}
                fill="none"
                stroke="rgba(0,0,0,.18)"
                strokeWidth="2"
                strokeDasharray="2 14"
            />

            {/* Fases */}
            {fases.map((f, i) => {
                const dash = (f.percent / 100) * circumference;
                const el = (
                    <circle
                        key={i}
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={f.grad}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${dash} ${circumference}`}
                        strokeDashoffset={-offset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${center} ${center})`}
                    />
                );
                offset += dash;
                return el;
            })}

            {/* Ponto marcador inferior (visual) */}
            <circle cx={center} cy={center + radius + 24} r="8" fill="#e63946" />

            {/* Centro com “ondas” */}
            {[...Array(9)].map((_, i) => (
                <path
                    key={i}
                    d={blobPath(center, center, 80 + i * 6, 0.22)}
                    fill="none"
                    stroke="rgba(0,0,0,.10)"
                />
            ))}
            <circle cx={center} cy={center} r="62" fill="#f5f5f7" />


        </svg>
    );
}

/**
 * Gera um caminho “blob” suave para o centro (efeito de ondas).
 * NOTA: É apenas ilustrativo; sem libs externas.
 */
function blobPath(cx, cy, r, wobble = 0.2, points = 8) {
    const step = (Math.PI * 2) / points;
    const coords = [];
    for (let i = 0; i < points; i++) {
        const angle = i * step;
        const rr = r * (1 + wobble * Math.sin(angle * 3));
        coords.push({
            x: cx + rr * Math.cos(angle),
            y: cy + rr * Math.sin(angle),
        });
    }
    // Fecha com curva
    let d = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 1; i < coords.length; i++) {
        const p = coords[i];
        const prev = coords[i - 1];
        const mx = (prev.x + p.x) / 2;
        const my = (prev.y + p.y) / 2;
        d += ` Q ${prev.x} ${prev.y} ${mx} ${my}`;
    }
    const last = coords[coords.length - 1];
    const first = coords[0];
    d += ` Q ${last.x} ${last.y} ${(last.x + first.x) / 2} ${(last.y + first.y) / 2} Z`;
    return d;
}