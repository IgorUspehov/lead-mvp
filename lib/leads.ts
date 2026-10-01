import type { Lead } from "@/lib/types";

export const seedLeads: Lead[] = [
  {
    id: "LF-236",
    name: "Markus Weber",
    phone: "+49 171 220 1844",
    nicheId: "auto",
    status: "new",
    time: "21:41",
  },
  {
    id: "LF-235",
    name: "Aylin Demir",
    phone: "+49 152 667 9031",
    nicheId: "gastro",
    status: "qualified",
    time: "21:28",
  },
  {
    id: "LF-234",
    name: "Helena Vogt",
    phone: "+49 89 441 2280",
    nicheId: "praxis",
    status: "in_progress",
    time: "21:11",
  },
  {
    id: "LF-233",
    name: "Sven Krüger",
    phone: "+49 170 558 4419",
    nicheId: "polymer",
    status: "new",
    time: "20:54",
  },
  {
    id: "LF-232",
    name: "Chiara Rossi",
    phone: "+49 176 902 1184",
    nicheId: "gastro",
    status: "qualified",
    time: "20:37",
  },
];

export const incomingPeople = [
  { name: "Lena Hoffmann", phone: "+49 171 448 2190" },
  { name: "Jonas Meier", phone: "+49 152 903 4412" },
  { name: "Amira El-Sayed", phone: "+49 176 220 7781" },
  { name: "Paul Richter", phone: "+49 170 661 3094" },
  { name: "Sofia Nowak", phone: "+49 151 884 6620" },
  { name: "Henrik Dahl", phone: "+49 172 445 9088" },
  { name: "Mara Klein", phone: "+49 157 332 1106" },
  { name: "Omar Farouk", phone: "+49 179 228 6543" },
];
