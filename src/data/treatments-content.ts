export interface TreatmentSection {
  title: string;
  body: string;
}

export const TREATMENTS_PAGE_TITLE = "Treatment Overview";

export const TREATMENT_SECTIONS: TreatmentSection[] = [
  {
    title: "Factor Replacement Therapy",
    body: "Factor replacement therapy for hemophilia involves infusions of clotting factors (Factor VIII for hemophilia A or Factor IX for hemophilia B) to restore normal blood clotting in patients. The primary types of replacement therapy include standard half-life, extended half-life, and ultra-long half-life.",
  },
  {
    title: "On Demand vs. Prophylaxis",
    body: "Prophylactic care involves regular scheduled infusions in or order to prevent spontaneous bleeds. On-demand care is done at the start of a bleeding episode, where infusions are administered immediately to stop blood loss. While prophylaxis is better for overall joint health, on-demand is easier for patients since it involves fewer routine injections.",
  },
  {
    title: "Inhibitors: Immune Tolerance Induction (ITI)",
    body: "Inhibits are specialized antibodies produced by the immune system to neutralize infused clotting factor concentrates, which render standard replacement therapy ineffective over a long period of time. Immune Tolerance Induction (ITI) involves frequent, regular infusions of the clotting factor over months or years, with the goal to \"teach\" the immune system that the factor protein is safe inside the body.",
  },
  {
    title: "Newer Treatment Options",
    body: "New treatments for hemophilia include Hemlibra (emicizumab) and Altuviiio for longer-lasting factor protection, and one-time gene therapies like Roctavian and Hemgenix. Emicizumab, similar to NXT007, is an injection that mimics Factor VIII to prevent bleeding in hemophilia A, while Altuviiio is a factor VIII fusion protein designed for weekly prophylactic dosing. Gene therapies for hemophilia include delivering a working factor VIII/IX gene for adults with hemophilia A/B.",
  },
];
