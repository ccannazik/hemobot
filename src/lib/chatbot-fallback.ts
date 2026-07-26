import { articles, knowledgeSources, quickQuestions } from "@/data/knowledge";

const FALLBACK_ANSWERS: Record<string, string> = {
  "what is hemophilia":
    "Hemophilia is a genetic bleeding disorder in which blood does not clot properly due to missing or low levels of clotting factor proteins — most commonly factor VIII (Hemophilia A) or factor IX (Hemophilia B). It is usually inherited and affects mostly males, though women can be carriers and may have symptoms. Only a qualified healthcare professional can diagnose hemophilia through blood tests.",
  "hemophilia a and hemophilia b":
    "Hemophilia A is caused by insufficient factor VIII and is the most common type. Hemophilia B (Christmas disease) involves factor IX deficiency. Both cause similar bleeding problems, but treatments use different replacement products. A hematologist determines the specific type through laboratory testing.",
  "carrier":
    "Being a carrier and having hemophilia are different. Carriers have the gene mutation and may have lower clotting factor levels or bleeding symptoms, but do not necessarily have the full condition. Some women with the gene have symptomatic carrier status. Genetic counseling at a Hemophilia Treatment Center can help clarify individual status.",
  "women":
    "Women can be carriers of hemophilia and may experience bleeding symptoms such as heavy menstrual bleeding or easy bruising. Some women have hemophilia themselves with low clotting factor levels. The CDC provides dedicated resources for women affected by bleeding disorders.",
  "inherited":
    "Hemophilia is typically inherited in an X-linked pattern. The gene is carried on the X chromosome. A father with hemophilia passes the gene to his daughters (who become carriers) but not his sons. Mothers who are carriers have a chance of passing the gene to each child. Genetic counseling can help families understand their specific inheritance pattern.",
  "mild, moderate, and severe":
    "Severity is generally classified by clotting factor level: Mild (5–40% of normal), Moderate (1–5%), and Severe (less than 1%). Severe hemophilia often presents earlier with spontaneous bleeding into joints and muscles. Only your healthcare team can determine your severity level.",
  "diagnosed":
    "Hemophilia is diagnosed through blood tests that measure clotting factor VIII or IX levels and activity. Newborns may be tested if there is a known family history. Diagnosis timing varies — severe cases are often identified in infancy, while mild cases may be found later after surgery or injury. Only a qualified healthcare professional can make a diagnosis.",
  "factor replacement":
    "Factor replacement therapy involves infusing the missing clotting factor (VIII or IX) to help blood clot. It may be used on-demand when bleeding occurs or as prophylaxis on a regular schedule to prevent bleeds. The specific product, dose, and schedule must be determined by your hematologist or HTC care team — I cannot recommend personalized treatment.",
  "inhibitors":
    "Inhibitors are antibodies that develop in some patients and neutralize infused clotting factor, making standard treatment less effective. They occur more commonly in severe Hemophilia A. Patients with inhibitors require specialized treatment plans developed at a Hemophilia Treatment Center.",
  "prophylaxis":
    "Prophylaxis (preventive treatment) involves regular scheduled infusions of clotting factor to maintain factor levels and prevent bleeds before they occur. On-demand treatment is used when bleeding happens. The choice between approaches is a medical decision made with your hematologist based on individual factors.",
  "bleed":
    "General signs that may be associated with bleeding include unusual bruising, prolonged bleeding from cuts, blood in urine or stool, and swelling or pain in joints. Joint bleeding may cause warmth, swelling, and limited range of motion. I cannot assess whether you or someone else is having a bleed — please contact your healthcare team or, in an emergency, call 911.",
  "emergency":
    "In a medical emergency including severe or uncontrolled bleeding, call 911 immediately. When speaking with emergency staff, share the bleeding disorder diagnosis, current medications/factor products, and any letter from your hematologist. For non-emergency questions, contact your Hemophilia Treatment Center.",
  "travel":
    "When traveling, many families carry extra factor, supplies, and documentation from their HTC. Identify nearby HTCs at your destination using the CDC directory. Discuss travel plans with your hematologist before departure, especially for international travel. The CDC has travel safety resources for people with hemophilia.",
  "support":
    "Support communities include the National Bleeding Disorders Foundation (bleeding.org), local HTC social workers, and peer support groups. HemoBot's community also connects patients, parents, and caregivers. These resources provide emotional support but do not replace medical care.",
  "clinical trials":
    "Clinical trials for hemophilia can be found through ClinicalTrials.gov and the National Bleeding Disorders Foundation. Your Hemophilia Treatment Center can also inform you about trials you may be eligible for. Participation decisions should always be made with your healthcare team.",
};

function findBestFallback(question: string): string | null {
  const q = question.toLowerCase();

  for (const [keyword, answer] of Object.entries(FALLBACK_ANSWERS)) {
    if (q.includes(keyword)) return answer;
  }

  // Match against quick questions and linked articles
  const matchedQuestion = quickQuestions.find(
    (qq) => qq.text.toLowerCase() === q || q.includes(qq.text.toLowerCase().slice(0, 30))
  );

  if (matchedQuestion) {
    const article = articles.find((a) => {
      const words = matchedQuestion.text.toLowerCase().split(/\s+/).filter((w) => w.length > 4);
      return words.some((w) => a.title.toLowerCase().includes(w) || a.summary.toLowerCase().includes(w));
    });
    if (article) {
      const source = knowledgeSources.find((s) => s.id === article.sourceId);
      return `${article.content}\n\nSource: ${source?.organization || article.sourceId}`;
    }
  }

  // Keyword match against articles
  for (const article of articles) {
    const titleWords = article.title.toLowerCase().split(/\s+/);
    if (titleWords.some((w) => w.length > 4 && q.includes(w))) {
      const source = knowledgeSources.find((s) => s.id === article.sourceId);
      return `${article.content}\n\nSource: ${source?.organization || article.sourceId}`;
    }
  }

  return null;
}

export function getLocalFallbackResponse(message: string): string {
  const answer = findBestFallback(message);

  if (answer) {
    return `${answer}\n\n---\n*This response was generated from HemoBot's educational knowledge base. For the most current information, consult your healthcare team or visit our [Learn](/learn) section.*`;
  }

  return `Thank you for your question about hemophilia. I'm currently operating in offline mode using our educational knowledge base.

Here are some resources that may help:
- Browse our [Learn section](/learn) for articles on hemophilia basics, treatment, and living well
- Use [Find Care](/find-care) to locate Hemophilia Treatment Centers near Palo Alto
- Visit the [CDC Hemophilia resources](https://www.cdc.gov/hemophilia/index.html) for official information

For personal medical questions, please contact a qualified healthcare professional or Hemophilia Treatment Center. In an emergency, call 911.`;
}

export function getFallbackSources(message: string) {
  const q = message.toLowerCase();
  const matched = knowledgeSources.filter((s) => {
    const words = s.title.toLowerCase().split(/\s+/);
    return words.some((w) => w.length > 4 && q.includes(w));
  });

  if (matched.length > 0) {
    return matched.slice(0, 3).map((s) => ({ title: s.title, url: s.url }));
  }

  return [
    { title: "CDC — Hemophilia", url: "https://www.cdc.gov/hemophilia/index.html" },
    { title: "National Bleeding Disorders Foundation", url: "https://www.bleeding.org/" },
  ];
}
