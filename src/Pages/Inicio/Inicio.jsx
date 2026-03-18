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




        <section>
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

                            <mask id="imagine-text-gaps-b5thyq" maskUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="680" height="580" fill="white" />
                                <rect x="51" y="42.38987" width="50.6967" height="17.50379" fill="black" rx="2" />
                                <rect x="50.0354" y="59.53165" width="148.2976" height="22.32657" fill="black" rx="2" />
                                <rect x="50.0354" y="82.38987" width="146.9937" height="17.50379" fill="black" rx="2" />
                                <rect x="251" y="168.38987" width="52.91217" height="17.50379" fill="black" rx="2" />
                                <rect x="251" y="185.53165" width="74.11619" height="22.32657" fill="black" rx="2" />
                                <rect x="250.0354" y="208.38986" width="138.8855" height="17.50379" fill="black" rx="2" />
                                <rect x="71" y="308.38986" width="52.65805" height="17.50379" fill="black" rx="2" />
                                <rect x="70.0354" y="325.53165" width="128.4166" height="22.32657" fill="black" rx="2" />
                                <rect x="71" y="348.38989" width="166.872" height="17.50379" fill="black" rx="2" />
                                <rect x="251" y="438.38986" width="53.27388" height="17.50379" fill="black" rx="2" />
                                <rect x="251" y="455.53165" width="83.98898" height="22.32657" fill="black" rx="2" />
                                <rect x="250.0354" y="478.38986" width="141.7541" height="17.50379" fill="black" rx="2" />
                                <rect x="554.6229" y="247.38986" width="43.0987" height="17.50379" fill="black" rx="2" />
                                <rect x="546.3488" y="261.38986" width="60.03313" height="17.50379" fill="black" rx="2" />
                                <rect x="231.8655" y="552.42529" width="217.6593" height="18.46835" fill="black" rx="2" />
                            </mask>
                        </defs>





                        {/* ===== FASE 1 ===== */}
                        <g>
                            <rect x="40" y="34" width="220" height="70" rx="10" fill="#875695" opacity="0.92" />
                            <text x="55" y="55" fontSize="11" fill="#c8b8f0">FASE 1</text>
                            <text x="55" y="76" fontSize="15" fill="#fff">Aumento da tensão</text>
                            <text x="55" y="95" fontSize="11" fill="#c8b8f0">Conflitos, medo constante</text>
                            <path d="M268 70 Q310 70 330 100" fill="none" stroke="#5b3fa0" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                        </g>

                        {/* ===== FASE 2 ===== */}
                        <g>
                            <rect x="240" y="160" width="220" height="70" rx="10" fill="#603fad" opacity="0.92" />
                            <text x="255" y="181" fontSize="11" fill="#ffc5c9">FASE 2</text>
                            <text x="255" y="202" fontSize="15" fill="#fff">Explosão</text>
                            <text x="255" y="221" fontSize="11" fill="#ffc5c9">Agressão física ou verbal</text>
                            <path d="M340 238 Q310 258 290 285" fill="none" stroke="#e63946" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                        </g>

                        {/* ===== FASE 3 ===== */}
                        <g>
                            <rect x="60" y="300" width="220" height="70" rx="10" fill="#4a2b90" opacity="0.9" />
                            <text x="75" y="321" fontSize="11" fill="#ddc8f5">FASE 3</text>
                            <text x="75" y="342" fontSize="15" fill="#fff">Arrependimento</text>
                            <text x="75" y="361" fontSize="11" fill="#ddc8f5">Promessas, pedidos de perdão</text>
                            <path d="M280 340 Q310 340 330 365" fill="none" stroke="#7c4fb5" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
                        </g>

                        {/* ===== FASE 4 ===== */}
                        <g>
                            <rect x="240" y="430" width="220" height="70" rx="10" fill="#361669" opacity="0.88" />
                            <text x="255" y="451" fontSize="11" fill="#f0e4ff">FASE 4</text>
                            <text x="255" y="472" fontSize="15" fill="#fff">Lua de mel</text>
                            <text x="255" y="491" fontSize="11" fill="#f0e4ff">Calma ilusória, afeto falso</text>
                            <path d="M460 465 Q560 400 580 200 Q590 120 530 70" fill="none" stroke="#5b3fa0" strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#arrow)" opacity="0.35" mask="url(#imagine-text-gaps-b5thyq)" />
                        </g>

                        {/* Label da seta de retorno */}
                        <text x="576" y="260" fontSize="11" fill="#9b80d4" textAnchor="middle" opacity="0.75">o ciclo</text>
                        <text x="576" y="274" fontSize="11" fill="#9b80d4" textAnchor="middle" opacity="0.75">recomeça</text>

                        {/* Linha de fundo */}
                        <line x1="40" y1="548" x2="640" y2="548" stroke="#e63946" strokeWidth="0.5" opacity="0.3" />
                        <text x="340" y="566" fontSize="12" fontWeight="500" fill="#e63946" textAnchor="middle" opacity="0.75">
                            Romper o ciclo é possível — ligue 180
                        </text>
                    </svg>
                </div>




        </section>



    </>
    );
}