export type BookingService = {
  id: string;
  name: string;
  whatsappText: string;
  description: string;
  applicationPriceCents: number;
  maintenancePriceCents?: number;
  durationLabel: string;
  color: string;
};

export type AdditionalService = {
  id: string;
  name: string;
  priceLabel: string;
  description: string;
};

export type BookingTime = {
  value: string;
  label: string;
};

export const bookingServices: BookingService[] = [
  {
    id: "molde-f1",
    name: "Molde F1",
    whatsappText: "Molde F1",
    description: "Alongamento com estrutura precisa, acabamento elegante e resultado marcante.",
    applicationPriceCents: 13000,
    maintenancePriceCents: 8000,
    durationLabel: "2:30h a 3h",
    color: "#d946ef"
  },
  {
    id: "fibra-de-vidro",
    name: "Fibra de vidro",
    whatsappText: "fibra de vidro",
    description: "Estrutura resistente, delicada e moldada para acompanhar o formato das suas mãos.",
    applicationPriceCents: 14000,
    maintenancePriceCents: 9000,
    durationLabel: "2:45h a 3h",
    color: "#c084fc"
  },
  {
    id: "banho-de-gel",
    name: "Banho de gel",
    whatsappText: "banho de gel",
    description: "Camada de proteção e brilho para unhas naturais mais firmes e bonitas.",
    applicationPriceCents: 7000,
    durationLabel: "2h a 2:30h",
    color: "#a855f7"
  },
  {
    id: "alinhamento",
    name: "Alinhamento",
    whatsappText: "alinhamento",
    description: "Correção e nivelamento para deixar as unhas com aparência uniforme e bem cuidada.",
    applicationPriceCents: 6000,
    durationLabel: "1:30h a 2h",
    color: "#f0abfc"
  },
  {
    id: "esmaltacao-em-gel",
    name: "Esmaltação em gel",
    whatsappText: "esmaltação em gel",
    description: "Cor intensa, brilho espelhado e acabamento delicado para o dia a dia.",
    applicationPriceCents: 6000,
    durationLabel: "1:30h a 2h",
    color: "#e879f9"
  },
  {
    id: "esmaltacao-normal",
    name: "Esmaltação normal",
    whatsappText: "esmaltação normal",
    description: "Esmaltação clássica para quem quer praticidade, beleza e cuidado nas mãos.",
    applicationPriceCents: 3500,
    durationLabel: "1h a 1:30h",
    color: "#8b5cf6"
  }
];

export const additionalServices: AdditionalService[] = [
  {
    id: "reposicao-de-unha",
    name: "Reposição de unha",
    priceLabel: "R$ 5 a unidade",
    description: "Para pequenos reparos pontuais durante ou antes da manutenção."
  },
  {
    id: "remocao-completa",
    name: "Remoção completa",
    priceLabel: "R$ 30",
    description: "Retirada completa com cuidado para preservar a saúde da unha natural."
  }
];

export const weekdayBookingTimes: BookingTime[] = [
  { value: "08:00", label: "8 horas" },
  { value: "09:00", label: "9 horas" },
  { value: "10:00", label: "10 horas" },
  { value: "11:00", label: "11 horas" },
  { value: "13:00", label: "13 horas" },
  { value: "14:00", label: "14 horas" }
];

export const saturdayBookingTimes: BookingTime[] = [
  ...weekdayBookingTimes,
  { value: "15:00", label: "15 horas" },
  { value: "16:00", label: "16 horas" },
  { value: "17:00", label: "17 horas" }
];

export function getBookingTimesForDate(dateValue: string) {
  const weekday = getWeekdayFromInputDate(dateValue);

  if (weekday === null || weekday === 0) {
    return [];
  }

  if (weekday === 6) {
    return saturdayBookingTimes;
  }

  return weekdayBookingTimes;
}

export function getNextAvailableBookingDate(from = new Date()) {
  const date = new Date(from.getFullYear(), from.getMonth(), from.getDate() + 1);

  while (date.getDay() === 0) {
    date.setDate(date.getDate() + 1);
  }

  return formatInputDate(date);
}

export function getTodayInputDate() {
  return formatInputDate(new Date());
}

function getWeekdayFromInputDate(dateValue: string) {
  const [year, month, day] = dateValue.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day).getDay();
}

function formatInputDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
