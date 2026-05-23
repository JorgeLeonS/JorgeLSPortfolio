'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '25%', label: 'merma estimada al retirar reflejantes y adhesivos contaminantes' },
  { value: '2', label: 'familias de fabricación: soplado y rotomoldeo' },
  { value: '5', label: 'etapas clave para recuperar material en sitio' },
  { value: '320', label: 'barreras separadoras para iniciar la prueba piloto' },
];

const processSteps = [
  'Limpiar tierra y contaminantes visibles',
  'Seleccionar por tipo de resina y condición',
  'Cortar zonas con reflejante y adhesivo',
  'Moler a tamaño de partícula usable',
  'Reincorporar en procesos iguales o similares',
];

const barrierFamilies = [
  {
    title: 'Moldeo por soplado',
    description: 'Barreras mas ligeras y redondeadas, fabricadas con polietileno de alta densidad.',
  },
  {
    title: 'Rotomoldeo',
    description: 'Barreras mas pesadas o gruesas, generalmente rectas, con polietileno de media densidad.',
  },
];

export default function EconomiaCircularPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % processSteps.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToSummary = () => {
    document.getElementById('resumen-circular')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020804] text-green-50">
      <section className="relative flex min-h-[100svh] items-center justify-center px-4 py-8 sm:px-8 sm:py-16">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl sm:top-20 sm:h-72 sm:w-72" />
          <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.16),transparent_32%),linear-gradient(rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[length:100%_100%,44px_44px,44px_44px]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="mb-3 inline-flex rounded-full border border-green-300/30 bg-green-300/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-green-200 sm:mb-4 sm:px-4 sm:text-xs">
              CAPUFE | Abril 2026
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Proyecto de Circularidad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-green-100/85 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Recuperacion de barreras plasticas usadas en infraestructura carretera para convertir
              residuo vial en materia prima y reincorporarlo a productos nuevos.
            </p>

            <motion.article
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              aria-live="polite"
              data-mobile-story="true"
              className="mx-auto mt-6 rounded-3xl border border-green-300/25 bg-black/35 p-4 text-left shadow-[0_0_45px_rgba(74,222,128,0.14)] backdrop-blur sm:mt-8 sm:p-5 lg:mx-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-300">
                  Secuencia automatizada
                </span>
                <span className="rounded-full bg-green-300/15 px-3 py-1 text-xs text-green-100">
                  {activeStep + 1}/5
                </span>
              </div>
              <p data-active-step="true" className="mt-4 text-xl font-semibold text-white sm:text-2xl">{processSteps[activeStep]}</p>
              <div className="mt-4 grid grid-cols-5 gap-2" aria-label="Progreso del proceso">
                {processSteps.map((step, index) => (
                  <button
                    key={step}
                    type="button"
                    aria-label={`Ver etapa ${index + 1}`}
                    aria-pressed={index === activeStep}
                    onClick={() => setActiveStep(index)}
                    className="h-2 overflow-hidden rounded-full bg-green-100/15"
                  >
                    <motion.span
                      className="block h-full rounded-full bg-green-300"
                      animate={{ width: index === activeStep ? '100%' : index < activeStep ? '100%' : '0%' }}
                      transition={{ duration: index === activeStep ? 2.2 : 0.25, ease: 'linear' }}
                    />
                  </button>
                ))}
              </div>
            </motion.article>

            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={scrollToSummary}
                data-summary-button="true"
                className="rounded-full border border-green-300/30 bg-green-300 px-5 py-3 text-sm font-semibold text-[#021006] shadow-[0_0_30px_rgba(74,222,128,0.25)] transition hover:bg-green-200"
              >
                Ver resumen del proyecto
              </button>
              <motion.span
                data-scroll-cue="true"
                className="text-xs uppercase tracking-[0.25em] text-green-200/75"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                Desliza para explorar
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center sm:max-w-[430px]"
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-green-300/20"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border border-dashed border-emerald-200/30"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-14 rounded-full border border-green-400/40 bg-green-300/5 shadow-[0_0_80px_rgba(74,222,128,0.18)] sm:inset-16"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            {['Recuperar', 'Separar', 'Moler', 'Reincorporar'].map((label, index) => (
              <motion.div
                key={label}
                className="absolute hidden h-20 w-20 items-center justify-center rounded-full border border-green-200/30 bg-[#06160c]/90 p-2 text-center text-[11px] font-semibold uppercase tracking-widest text-green-100 shadow-[0_0_28px_rgba(74,222,128,0.2)] sm:flex"
                style={{
                  transform: `rotate(${index * 90}deg) translateY(-150px) rotate(-${index * 90}deg)`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: index * 0.3, ease: 'easeInOut' }}
              >
                {label}
              </motion.div>
            ))}
            <div className="relative z-10 rounded-[1.5rem] border border-green-300/30 bg-black/50 p-5 text-center backdrop-blur-xl sm:rounded-[2rem] sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-green-300 sm:text-xs">Modelo circular</p>
              <p className="mt-2 text-4xl font-bold text-white sm:mt-3 sm:text-5xl">10:1</p>
              <p className="mt-2 text-xs leading-5 text-green-100/80 sm:mt-3 sm:text-sm sm:leading-6">
                Por cada 10 barreras recuperadas se compensa con 1 barrera nueva.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="resumen-circular" className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-green-300/20 bg-white/[0.05] p-5 backdrop-blur sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Resumen ejecutivo</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            De residuo vial a materia prima recuperable
          </h2>
          <p className="mt-4 text-sm leading-7 text-green-50/75 sm:text-base">
            El proyecto propone procesar las barreras donde se encuentran para reducir costos de
            traslado y volumen. La separacion correcta es la condicion base: no todo plastico vial se
            recicla igual, porque las resinas, aditivos, reflejantes, adhesivos y metales cambian el
            proceso y la calidad del material recuperado.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-2xl border border-green-300/20 bg-white/[0.06] p-4 shadow-[0_0_30px_rgba(34,197,94,0.08)] backdrop-blur"
            >
              <strong className="block text-3xl text-green-300">{metric.value}</strong>
              <span className="mt-2 block text-xs leading-5 text-green-50/75">{metric.label}</span>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {barrierFamilies.map((family, index) => (
            <motion.article
              key={family.title}
              initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-green-300/20 bg-[#06130b]/80 p-6 shadow-[0_0_40px_rgba(22,163,74,0.08)]"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-green-400">Familia {index + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold text-white">{family.title}</h3>
              <p className="mt-3 text-sm leading-7 text-green-50/70">{family.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-green-300/20 bg-black/30 p-5 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Proceso recomendado</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Recuperacion en sitio</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-green-50/70">
              Cinco etapas para limpiar el flujo de material antes de reincorporarlo.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-green-300/20 bg-green-300/[0.07] p-5"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-green-300/20 blur-2xl"
                  animate={{ opacity: [0.25, 0.7, 0.25] }}
                  transition={{ repeat: Infinity, duration: 3, delay: index * 0.2 }}
                />
                <span className="text-3xl font-semibold text-green-300">{index + 1}</span>
                <p className="mt-4 text-sm leading-6 text-green-50/80">{step}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-5 rounded-[2rem] border border-green-300/20 bg-gradient-to-br from-green-500/10 to-emerald-200/5 p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Piloto Mexico-Puebla</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Equivalencia comercial clara</h2>
            <p className="mt-4 text-sm leading-7 text-green-50/75">
              El lote inicial identificado en el Banco de Materiales contempla 320 barreras
              separadoras. Con el factor de equivalencia propuesto, el piloto entregaria
              aproximadamente 32 barreras nuevas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['320', 'barreras usadas'],
              ['32', 'barreras nuevas aprox.'],
              ['$44,768 MXN', 'valor comercial estimado'],
            ].map(([value, label], index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="rounded-3xl border border-green-200/20 bg-black/30 p-5 text-center"
              >
                <strong className="block text-3xl text-white">{value}</strong>
                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-green-200/75">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>
    </main>
  );
}
