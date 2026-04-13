"use client";

import LlmRespondsInOpenUiLang from "@/imports/LlmRespondsInOpenUiLang";
import OpenUiGeneratesSchema from "@/imports/OpenUiGeneratesSchema";
import OpenUiRendererRendersIt from "@/imports/OpenUiRendererRendersIt-43-427";
import YouRegisterComponents from "@/imports/YouRegisterComponents-43-365";
import {
  StepsAccordion,
  type StepsAccordionItem,
} from "../../components/StepsAccordion/StepsAccordion";
import styles from "./StepsSection.module.css";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

const STEPS: StepsAccordionItem[] = [
  {
    number: 1,
    title: "You define your library",
    description: "Register components with defineComponent and createLibrary.",
    details: [],
    Illustration: YouRegisterComponents,
  },
  {
    number: 2,
    title: "感知未来 generates system prompt",
    description:
      "Generate a system prompt from your library with the 感知未来 CLI or library.prompt() and send it to the LLM.",
    details: [],
    Illustration: OpenUiGeneratesSchema,
  },
  {
    number: 3,
    title: "LLM responds in 感知未来 Lang",
    description: "The model returns token-efficient, line-oriented 感知未来 Lang (not markdown).",
    details: [],
    Illustration: LlmRespondsInOpenUiLang,
  },
  {
    number: 4,
    title: "Renderer parses and renders UI",
    description: "Renderer parses the output and renders interactive UI in real time.",
    details: [],
    Illustration: OpenUiRendererRendersIt,
  },
];

export function StepsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <StepsAccordion steps={STEPS} />
      </div>
    </section>
  );
}
