"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { FallingPetals } from "@/components/FallingPetals";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { FadeWords } from "@/components/gift/FadeWords";
import { FloatingLittleNote } from "@/components/gift/FloatingLittleNote";
import { HeartbeatMoon } from "@/components/gift/HeartbeatMoon";
import { MemoryFeelingsCards } from "@/components/gift/MemoryFeelingsCards";
import { PageEntrance } from "@/components/gift/PageEntrance";
import { QuoteFrame } from "@/components/gift/QuoteFrame";
import { SecretWhisper } from "@/components/gift/SecretWhisper";
import { SectionDivider } from "@/components/gift/SectionDivider";
import { SoftScrollButton } from "@/components/gift/SoftScrollButton";
import { SparkleWord } from "@/components/gift/SparkleWord";
import { TypewriterLine } from "@/components/gift/TypewriterLine";
import { FinalHeartFragment } from "@/components/heart/FinalHeartFragment";
import { HeartCollectionHUD } from "@/components/heart/HeartCollectionHUD";
import {
  HeartCollectionProvider,
  useHeartCollection,
} from "@/components/heart/HeartCollectionContext";
import { HeartCombineCeremony } from "@/components/heart/HeartCombineCeremony";
import { HiddenStarFragment } from "@/components/heart/HiddenStarFragment";
import { NearCompleteVeil } from "@/components/heart/NearCompleteVeil";
import { HeartShardVisual } from "@/components/heart/HeartShardVisual";
import { SparkleFieldBoosted } from "@/components/heart/SparkleFieldBoosted";
import { GiftMusicProvider, useGiftMusic } from "@/components/GiftMusicContext";
import { MouseSparkDots } from "@/components/MouseSparkDots";
import { MusicToggle } from "@/components/MusicToggle";
import { ScrollReveal } from "@/components/ScrollReveal";

const body =
  "font-sans text-[1.04rem] font-normal leading-[1.95] text-ink/88 md:text-[1.08rem] md:leading-[1.96] md:font-normal";
const h2 =
  "font-serif text-2xl font-medium tracking-tight text-ink/92 md:text-[1.8rem]";

function Prose({ children }: { children: React.ReactNode }) {
  return <div className={`${body} space-y-7 text-pretty`}>{children}</div>;
}

const listItems = [
  "Шөнийн тайван чат",
  "Зөөлөн хөгжим",
  "Санаандгүй инээмсэглэл",
  "Удаан үргэлжлэх яриа",
  "Тайван орой",
  "Дулаан мэдрэмж",
];

export function RomanticOnePage() {
  return (
    <PageEntrance>
      <GiftMusicProvider>
        <HeartCollectionProvider>
          <RomanticOnePageInner />
        </HeartCollectionProvider>
      </GiftMusicProvider>
    </PageEntrance>
  );
}

function RomanticOnePageInner() {
  const { play, playing } = useGiftMusic();
  const { count, collect, has } = useHeartCollection();
  const [nudge, setNudge] = useState<string | null>(null);

  const onNudge = (msg: string) => {
    setNudge(msg);
    window.setTimeout(() => setNudge(null), 3200);
  };

  return (
    <>
      <NearCompleteVeil />
      <FloatingBlobs />
      <FallingPetals />
      <CursorGlow />
      <MouseSparkDots />
      <SparkleFieldBoosted />
      <FloatingLittleNote />
      <SecretWhisper />

      <main className="relative z-10">
        <section
          id="top"
          className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-center md:px-10"
        >
          <HeartbeatMoon />
          <motion.div
            className="mx-auto max-w-xl space-y-10"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.p
              className="font-sans text-xs uppercase tracking-[0.28em] text-ink-soft md:text-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Энэ бол чамд зориулж хийсэн жижигхэн орон зай
            </motion.p>
            <Prose>
              <p className="font-serif text-lg text-ink md:text-xl">
              Зөөлөн өнгө
              </p>
              <p>
              чимээгүй хөдөлгөөн
                <br />
                жижиг деталь —
                <br />
                <SparkleWord>
                  <span className="text-gradient-soft">
                  чамд таалагдана гэж бодожын.
                  </span>
                </SparkleWord>
                .
              </p>
              <p>
                Зүгээр л Өнөөдөр
                <br />
                чамд өөр аргаар
                <br />
                юм хэлмээр санагдсан юм.
              </p>
            </Prose>

            {!has(1) ? (
              <div className="mx-auto flex max-w-md flex-col items-center gap-3">
                <p className="text-heart-clue px-2 text-center font-sans text-sm md:text-base">
                  Эхний жижиг зүрх — доор дарна уу ✦
                </p>
                <motion.button
                  type="button"
                  aria-label="Эхний зүрхний хэсэг"
                  onClick={() => collect(1)}
                  className="flex justify-center"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 1.05,
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-[1.35rem] border border-white/50 bg-white/32 shadow-[0_12px_40px_-16px_rgba(192,132,184,0.25)] backdrop-blur-lg md:h-14 md:w-14">
                    <HeartShardVisual
                      fragmentId={1}
                      interaction="rotate"
                      className="h-10 w-10 md:h-11 md:w-11"
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 1.1,
                      }}
                    />
                  </span>
                </motion.button>
              </div>
            ) : null}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.75 }}
            >
              <SoftScrollButton href="#s2">Доошоо яваарай</SoftScrollButton>
            </motion.div>
          </motion.div>
        </section>

        <SectionDivider />

        <section
          id="s2"
          className="px-6 py-20 text-center md:px-10 md:py-24"
        >
          <ScrollReveal className="mx-auto max-w-xl">
            <Prose>
              <p>
                Үнэнийг хэлэхэд,
                <br />
                чамд зориулж ийм юм хийж сууна гэж
                <br />
                урьд нь бодож байсангүй.
              </p>
              <p>
                Гэхдээ зарим хүнд хэлэх гэсэн санааг 
                <br />
                хэлчих юм шиг байна 
              </p>
              <p>
                Тэгээд л үгээр биш,
                <br />
                арай өөр байдлаар
                <br />
                юм үлдээе гэж бодсон.
              </p>
            </Prose>
            <div className="mt-12 flex justify-center">
              <TypewriterLine />
            </div>
          </ScrollReveal>
        </section>

        <SectionDivider />

        <section
          id="about-you"
          className="px-6 py-20 text-center md:px-10 md:py-24"
          aria-labelledby="about-you-heading"
        >
          <ScrollReveal className="mx-auto max-w-xl">
            <h2 id="about-you-heading" className={`${h2} mb-10 tracking-tight`}>
              Чиний тухай
            </h2>
            <div className="space-y-8">
              <FadeWords />
              <Prose>
                <p>
                  Нэг л тайван мэдрэмж,
                  <br />
                  нэг л зөөлөн vibe,
                  <br />
                  бас ярьж байхад өөрийн эрхгүй инээмсэглүүлдэг тэр зүйл.
                </p>
                <p>
                  Магадгүй чи өөрөө анзаардаггүй байх,
                  <br />
                  гэхдээ чамд хүн татдаг нэг гоё зан байдаг.
                </p>
              </Prose>
            </div>
          </ScrollReveal>
        </section>

        <SectionDivider />

        <section
          id="small-truth"
          className="px-6 py-20 text-center md:px-10 md:py-24"
          aria-labelledby="small-truth-heading"
        >
          <ScrollReveal className="mx-auto max-w-xl">
            <h2 id="small-truth-heading" className={`${h2} mb-10 tracking-tight`}>
              Жижиг үнэн
            </h2>
            <QuoteFrame>
              <Prose>
                <p>
                  Чамтай ярьсан хэсэгхэн мөчүүд хүртэл санаанд үлддэг сонин юмаа.
                </p>
                <p>
                  Онцгой том зүйл болоогүй байсан ч зарим яриа, зарим мэдрэмж
                  хүнээс амархан гардаггүй юм байна.
                </p>
                <p>
                  Магадгүй энэ бүхэн жижиг зүйл байх.
                  <br />
                  Гэхдээ надад бол жижиг санагдаагүй.
                </p>
              </Prose>
            </QuoteFrame>
            <HiddenStarFragment />
          </ScrollReveal>
        </section>

        <SectionDivider />

        <section
          id="reminds"
          className="px-6 py-20 text-center md:px-10 md:py-24"
          aria-labelledby="reminds-heading"
        >
          <ScrollReveal className="mx-auto max-w-md">
            <h2 id="reminds-heading" className={`${h2} mb-12 tracking-tight`}>
              Чамайг санагдуулдаг зүйлс
            </h2>
            <motion.ul
              className="flex flex-col gap-4 text-left"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.09 } },
              }}
            >
              {listItems.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.55,
                        ease: [0.22, 0.61, 0.36, 1],
                      },
                    },
                  }}
                  className="glass-panel rounded-[1.25rem] px-5 py-4 font-sans text-[0.98rem] font-normal text-ink/90 shadow-sm backdrop-blur-lg transition-[box-shadow] duration-500 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="mr-2 text-petal">✦</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </ScrollReveal>
        </section>

        <SectionDivider />

        <MemoryFeelingsCards />

        <SectionDivider />

        <section
          id="final"
          className="relative px-6 py-24 text-center md:px-10 md:py-32"
          aria-labelledby="final-heading"
        >
          <ScrollReveal className="mx-auto max-w-xl">
            <h2 id="final-heading" className={`${h2} mb-10 tracking-tight`}>
              Эцсийн мессеж
            </h2>
            <Prose>
              <p>Энэ чамд таалагдсан гэж бодожын .</p>
              <p>
                Зүгээр л чамд чи надад онцгой санагддаг гэдгийг арай өөр аргаар
                хэлэх гэсэн юм.
              </p>
              <p>
                Хэзээ нэг өдөр энэ-ийг хамтдаа үзээд инээмсэглэх байх
              </p>
            </Prose>
            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <motion.button
                type="button"
                onClick={() => {
                  if (!playing) play();
                  if (count < 5) {
                    onNudge(
                      "Эхлээд жижиг зүрхний хэсгүүдийг олоорой — тэгээд бүр ч илүү гайхалтай нээгдэнэ.",
                    );
                    return;
                  }
                  onNudge(
                    "Чи аль хэдийн бүх хэсгийг олчжээ мундаг юмаа. Дээд талын зүрхийг хараарай ✦",
                  );
                }}
                className="relative overflow-hidden rounded-full border border-white/40 bg-gradient-to-r from-white/42 to-blush/32 px-12 py-3.5 font-sans text-sm font-normal tracking-wide text-ink/90 shadow-[var(--shadow-soft)] backdrop-blur-lg"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 48px -18px rgba(192,132,184,0.28)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                />
                <span className="relative">Нээх</span>
              </motion.button>
            </motion.div>
            <FinalHeartFragment />
          </ScrollReveal>
        </section>

        <footer className="px-6 pb-36 pt-6 text-center md:pb-40">
          <ScrollReveal>
            <p className="font-serif text-base text-ink md:text-lg">
              Надаас, чамд.
            </p>
            <p className="mt-2 font-sans text-xs text-ink-soft/85 md:text-sm">
              Made with care, just for you.
            </p>
          </ScrollReveal>
        </footer>
      </main>

      <HeartCollectionHUD />
      <MusicToggle />
      <HeartCombineCeremony />

      <AnimatePresence>
        {nudge ? (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="text-heart-clue fixed bottom-24 left-1/2 z-[199] w-[min(92vw,380px)] -translate-x-1/2 rounded-2xl border border-heart-clue/20 bg-white/70 px-5 py-3.5 text-center font-serif text-sm font-medium shadow-[0_12px_40px_-12px_rgba(90,60,80,0.12)] backdrop-blur-xl md:bottom-28"
          >
            {nudge}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
