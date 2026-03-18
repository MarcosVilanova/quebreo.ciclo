import React from "react";
import "./Inicio.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export default function CicloSection() {
    return (
        <>
        <section className="tituloInicio">
            <div className="tituloContainer">
                    <h1 className="mb-1">
                        QUEBRE O CICLO DA <span style={{ color: "#603fad" }}>VIOLÊNCIA DOMÉSTICA</span>
                    </h1>
                    <p>Você não está sozinha! Juntas somos mais fortes.</p>
                </div>
        </section>




        <section className={"ps"}>
                {/* SVG do ciclo completo */}
                <div className="ciclo-svg">
                    <svg width="100%" viewBox="0 0 680 580" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <marker
                                id="arrow"
                                viewBox="0 0 10 10"
                                refX="8"
                                refY="5"
                                markerWidth="6"
                                markerHeight="6"
                                orient="auto-start-reverse"
                            >
                                <path
                                    d="M2 1L8 5L2 9"
                                    fill="none"
                                    stroke="#5b3fa0"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </marker>


                        </defs>





                        {/* ===== FASE 1 ===== */}
                        <g>
                            <rect x="20" y="34" width="260" height="120" rx="10" fill="#875695" opacity="0.92" />
                            <text x="35" y="60" fontSize="16" fill="#c8b8f0">FASE 1</text>
                            <text x="35" y="95" fontSize="24" fill="#fff">Aumento da tensão</text>
                            <text x="35" y="130" fontSize="16" fill="#c8b8f0">Conflitos, medo constante</text>
                            <path d="M268 70 Q310 70 330 100" fill="none" stroke="#5b3fa0" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                        </g>

                        {/* ===== FASE 2 ===== */}
                        <g>
                            <rect x="410" y="160" width="260" height="120" rx="10" fill="#603fad" opacity="0.92" />
                            <text x="435" y="181" fontSize="16" fill="#ffc5c9">FASE 2</text>
                            <text x="435" y="219" fontSize="25" fill="#fff">Explosão</text>
                            <text x="435" y="250" fontSize="16" fill="#ffc5c9">Agressão física ou verbal</text>
                            <path d="M340 238 Q310 258 290 285" fill="none" stroke="#e63946" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                        </g>

                        {/* ===== FASE 3 ===== */}
                        <g>
                            <rect x="20" y="300" width="260" height="120" rx="10" fill="#4a2b90" opacity="0.9" />
                            <text x="35" y="325" fontSize="16" fill="#ddc8f5">FASE 3</text>
                            <text x="35" y="358" fontSize="25" fill="#fff">Arrependimento</text>
                            <text x="35" y="390" fontSize="16" fill="#ddc8f5">Promessas, pedidos de perdão</text>
                            <path d="M280 340 Q310 340 330 365" fill="none" stroke="#7c4fb5" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                        </g>

                        {/* ===== FASE 4 ===== */}
                        <g>
                            <rect x="410" y="430" width="260" height="120" rx="10" fill="#361669" opacity="0.88" />
                            <text x="435" y="460" fontSize="16" fill="#f0e4ff">FASE 4</text>
                            <text x="435" y="495" fontSize="25" fill="#fff">Lua de mel</text>
                            <text x="435" y="525" fontSize="16" fill="#f0e4ff">Calma ilusória, afeto falso</text>

                        </g>



                        {/* Linha de fundo */}
                        <line x1="40" y1="5428" x2="640" y2="548" stroke="#e63946" strokeWidth="0.5" opacity="0.3" />
                        <text x="340" y="5266" fontSize="12" fontWeight="500" fill="#e63946" textAnchor="middle" opacity="0.75">
                            Romper o ciclo é possível — ligue 180
                        </text>
                    </svg>
                </div>




        </section>



    </>
    );
}