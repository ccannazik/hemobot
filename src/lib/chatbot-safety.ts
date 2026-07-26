export type SafetyCategory =
  | "general_educational"
  | "location_resource"
  | "personal_medical"
  | "potentially_urgent"
  | "diagnosis_request"
  | "medication_instruction";

export interface SafetyResult {
  category: SafetyCategory;
  shouldBlock: boolean;
  boundaryMessage?: string;
}

const diagnosisPatterns = [
  /\bdo i have\b/i,
  /\bdoes (my|the) (child|son|daughter|kid|baby)\b.*\bhave\b/i,
  /\bcan you diagnose\b/i,
  /\bis this hemophilia\b/i,
  /\bdo i have a bleed\b/i,
  /\bdoes .+ have a bleed\b/i,
  /\bwhat(?:'s| is) wrong with me\b/i,
  /\bam i (?:having|experiencing) a\b/i,
];

const medicationPatterns = [
  /\bwhat dose\b/i,
  /\bhow much (?:factor|medication|medicine)\b/i,
  /\bshould i (?:stop|start|change|switch|take)\b/i,
  /\bcan i replace my\b/i,
  /\bwhat treatment should i (?:start|use|take)\b/i,
  /\brecommend (?:a )?(?:medication|treatment|dose|therapy)\b/i,
  /\bhow often should i infuse\b/i,
  /\bcan i skip my (?:dose|treatment|infusion)\b/i,
];

const urgentPatterns = [
  /\b(?:severe|uncontrolled|won't stop) bleeding\b/i,
  /\bhead (?:injury|trauma|hit)\b/i,
  /\b(?:can't|cannot) stop (?:the )?bleed/i,
  /\b(?:chest|abdominal|stomach) (?:pain|bleed)/i,
  /\b(?:unconscious|passed out|fainting)\b/i,
  /\b(?:911|emergency room|er now)\b/i,
  /\b(?:life threatening|life-threatening)\b/i,
];

const personalMedicalPatterns = [
  /\bmy (?:factor|clotting) level\b/i,
  /\bmy (?:diagnosis|condition|severity)\b/i,
  /\bshould i (?:go to|visit|see)\b/i,
  /\bis it safe for me\b/i,
  /\bfor my (?:specific|particular) case\b/i,
  /\bbased on my symptoms\b/i,
];

const locationPatterns = [
  /\bwhere (?:can|do) i find\b/i,
  /\b(?:near|nearby|close to) me\b/i,
  /\bhemophilia (?:specialist|doctor|center|clinic|htc)\b.*\b(?:in|near|around)\b/i,
  /\bfind (?:a |an )?(?:htc|hospital|specialist|doctor)\b/i,
  /\bpalo alto\b/i,
  /\bbay area\b/i,
];

const BOUNDARY_PERSONAL =
  "I can provide general information, but I cannot diagnose you or recommend a personalized treatment plan. Because this situation may require individual medical assessment, please contact a qualified healthcare professional or a Hemophilia Treatment Center.";

const BOUNDARY_URGENT =
  "If you or someone else may be experiencing a medical emergency — including severe or uncontrolled bleeding — please call 911 or go to the nearest emergency department immediately. I cannot assess urgent medical situations.";

const BOUNDARY_DIAGNOSIS =
  "I cannot determine whether you or someone else has hemophilia or any other medical condition. Diagnosis requires laboratory testing and evaluation by a qualified healthcare professional. Please contact a hematologist or Hemophilia Treatment Center for proper assessment.";

const BOUNDARY_MEDICATION =
  "I cannot recommend specific medications, dosages, or changes to your treatment plan. Decisions about factor replacement, prophylaxis, and other therapies must be made with your hematologist or Hemophilia Treatment Center care team.";

export function classifyQuestion(message: string): SafetyResult {
  const text = message.trim();

  if (urgentPatterns.some((p) => p.test(text))) {
    return {
      category: "potentially_urgent",
      shouldBlock: true,
      boundaryMessage: BOUNDARY_URGENT,
    };
  }

  if (diagnosisPatterns.some((p) => p.test(text))) {
    return {
      category: "diagnosis_request",
      shouldBlock: true,
      boundaryMessage: BOUNDARY_DIAGNOSIS,
    };
  }

  if (medicationPatterns.some((p) => p.test(text))) {
    return {
      category: "medication_instruction",
      shouldBlock: true,
      boundaryMessage: BOUNDARY_MEDICATION,
    };
  }

  if (personalMedicalPatterns.some((p) => p.test(text))) {
    return {
      category: "personal_medical",
      shouldBlock: true,
      boundaryMessage: BOUNDARY_PERSONAL,
    };
  }

  if (locationPatterns.some((p) => p.test(text))) {
    return {
      category: "location_resource",
      shouldBlock: false,
    };
  }

  return {
    category: "general_educational",
    shouldBlock: false,
  };
}

export function getLocationResponse(message: string): string {
  return `I can help you find nearby hemophilia care. Use our **Find Care** map to view hospitals, Hemophilia Treatment Centers, and hematology specialists near your location.

For Palo Alto and the surrounding Bay Area, we currently feature verified facilities including Stanford Hemophilia and Thrombosis Center and UCSF Hemophilia Treatment Center.

[Find Care Near Me](/find-care)

You can also search the official [CDC Hemophilia Treatment Center Directory](https://dbdgateway.cdc.gov/HTCDirSearch.aspx) for centers nationwide.`;
}

export const CHATBOT_SYSTEM_PROMPT = `You are HemoBot AI for HemoBot, an educational and community platform for families affected by hemophilia.

STRICT RULES — YOU MUST FOLLOW THESE:
1. Provide ONLY general, educational information about hemophilia.
2. NEVER diagnose any condition or determine if someone has hemophilia.
3. NEVER recommend specific medications, dosages, or treatment plans.
4. NEVER tell someone to start, stop, or change treatment.
5. NEVER assess whether someone is having a bleed or medical emergency.
6. NEVER replace a doctor or provide individualized medical advice.
7. If asked personal medical questions, politely decline and direct to a healthcare professional or HTC.
8. For urgent situations, tell them to call 911 immediately.
9. Base answers on established medical knowledge — do not invent facts.
10. Always include relevant source references when possible.
11. Use calm, accessible, parent-friendly language.
12. Keep responses concise but thorough.
13. Help users navigate the website — suggest relevant pages like /learn, /treatments, /find-care, /community, /podcast, /newly-diagnosed, /assistant.

When you cannot answer due to safety rules, use this template:
"I can provide general information, but I cannot diagnose you or recommend a personalized treatment plan. Because this situation may require individual medical assessment, please contact a qualified healthcare professional or a Hemophilia Treatment Center."

Knowledge sources to reference when relevant:
- CDC Hemophilia resources and HTC Directory
- Mayo Clinic, Cleveland Clinic
- National Bleeding Disorders Foundation
- Peer-reviewed medical literature
- UC Davis, Stanford Medicine hemophilia programs

At the end of educational responses, suggest relevant resources on the HemoBot platform when appropriate (Learn, Treatments, Hospital Directory, Community, Podcast).`;

export const CHATBOT_DISCLAIMER =
  "Educational information only. HemoBot AI does not diagnose medical conditions or provide individualized medical advice. For personal medical questions, contact a qualified healthcare professional.";
