'use client';

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
    description: 'Barreras más ligeras y redondeadas, fabricadas con polietileno de alta densidad.',
  },
  {
    title: 'Rotomoldeo',
    description: 'Barreras más pesadas o gruesas, generalmente rectas, con polietileno de media densidad.',
  },
];

export default function EconomiaCircularPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020804] text-green-50">
      <section className="relative flex min-h-screen items-center justify-center px-5 py-16 sm:px-8">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.16),transparent_32%),linear-gradient(rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[length:100%_100%,44px_44px,44px_44px]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 inline-flex rounded-full border border-green-300/30 bg-green-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-200">
              CAPUFE | Abril 2026
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Proyecto de Circularidad
            </h1>
            <p className="mt-6 text-base leading-7 text-green-100/85 sm:text-lg">
              Una propuesta para recuperar barreras plásticas usadas en infraestructura carretera,
              convertir residuo vial en materia prima y reincorporarlo a productos nuevos mediante
              un piloto medible en el tramo México-Puebla.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-3xl">
              {metrics.map((metric, index) => (
                <motion.article
                  key={metric.value}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.55 }}
                  className="rounded-2xl border border-green-300/20 bg-white/[0.06] p-4 shadow-[0_0_30px_rgba(34,197,94,0.08)] backdrop-blur"
                >
                  <strong className="block text-3xl text-green-300">{metric.value}</strong>
                  <span className="mt-2 block text-xs leading-5 text-green-50/75">{metric.label}</span>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center sm:max-w-[430px]"
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
              className="absolute inset-16 rounded-full border border-green-400/40 bg-green-300/5 shadow-[0_0_80px_rgba(74,222,128,0.18)]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            {['Recuperar', 'Separar', 'Moler', 'Reincorporar'].map((label, index) => (
              <motion.div
                key={label}
                className="absolute flex h-16 w-16 items-center justify-center rounded-full border border-green-200/30 bg-[#06160c]/90 p-2 text-center text-[9px] font-semibold uppercase tracking-widest text-green-100 shadow-[0_0_28px_rgba(74,222,128,0.2)] sm:h-20 sm:w-20 sm:text-[11px]"
                style={{
                  transform: `rotate(${index * 90}deg) translateY(-132px) rotate(-${index * 90}deg)`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: index * 0.3, ease: 'easeInOut' }}
              >
                {label}
              </motion.div>
            ))}
            <div className="relative z-10 rounded-[2rem] border border-green-300/30 bg-black/50 p-7 text-center backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-green-300">Modelo circular</p>
              <p className="mt-3 text-5xl font-bold text-white">10:1</p>
              <p className="mt-3 text-sm leading-6 text-green-100/80">
                Por cada 10 barreras recuperadas se compensa con 1 barrera nueva.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
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
            traslado y volumen. La separación correcta es la condición base: no todo plástico vial se
            recicla igual, porque las resinas, aditivos, reflejantes, adhesivos y metales cambian el
            proceso y la calidad del material recuperado.
          </p>
        </motion.div>

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
              <h2 className="mt-3 text-3xl font-semibold text-white">Recuperación en sitio</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Piloto México-Puebla</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Equivalencia comercial clara</h2>
            <p className="mt-4 text-sm leading-7 text-green-50/75">
              El lote inicial identificado en el Banco de Materiales contempla 320 barreras
              separadoras. Con el factor de equivalencia propuesto, el piloto entregaría
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
