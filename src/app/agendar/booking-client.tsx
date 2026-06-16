"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Clock3, MessageCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import {
  bookingServices,
  getBookingTimesForDate,
  getNextAvailableBookingDate,
  getTodayInputDate
} from "@/lib/booking-options";
import { formatCurrency } from "@/lib/utils";

function formatDisplayDate(value: string) {
  const [year, month, day] = value.split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
}

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

export function BookingClient({ whatsappNumber }: { whatsappNumber: string }) {
  const [serviceId, setServiceId] = useState(bookingServices[0]?.id ?? "");
  const [date, setDate] = useState(() => getNextAvailableBookingDate());
  const [time, setTime] = useState(() => {
    const initialDate = getNextAvailableBookingDate();
    return getBookingTimesForDate(initialDate)[0]?.value ?? "";
  });

  const selectedService = useMemo(
    () => bookingServices.find((service) => service.id === serviceId),
    [serviceId]
  );
  const availableTimes = useMemo(() => getBookingTimesForDate(date), [date]);
  const selectedTime = useMemo(
    () => availableTimes.find((item) => item.value === time),
    [availableTimes, time]
  );
  const hasAvailableTimes = availableTimes.length > 0;
  const displayDate = formatDisplayDate(date);
  const previewMessage =
    selectedService && selectedTime
      ? `Olá, gostaria de agendar ${selectedService.whatsappText} para o dia ${displayDate}, às ${selectedTime.label}!`
      : "Escolha uma data com horários disponíveis para ver a mensagem pronta.";

  useEffect(() => {
    if (!availableTimes.some((item) => item.value === time)) {
      setTime(availableTimes[0]?.value ?? "");
    }
  }, [availableTimes, time]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const phone = normalizePhone(whatsappNumber);

    if (!selectedService || !date) {
      toast.error("Escolha serviço e dia.");
      return;
    }

    if (!selectedTime) {
      toast.error("Esse dia não tem horário disponível.");
      return;
    }

    if (!phone) {
      toast.error("Número de contato não configurado.");
      return;
    }

    const message = `Olá, gostaria de agendar ${selectedService.whatsappText} para o dia ${formatDisplayDate(date)}, às ${selectedTime.label}!`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="purple-card rounded-2xl p-4 sm:p-6"
    >
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="rounded-xl border border-fuchsia-200/20 bg-violet-950/30 p-4 sm:p-5">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge>
                <Sparkles className="size-3.5" />
                Escolha seu atendimento
              </Badge>
              <h2 className="mt-3 text-2xl font-semibold text-white">Detalhes da reserva</h2>
            </div>
            {selectedService ? (
              <div className="rounded-2xl border border-fuchsia-200/20 bg-fuchsia-300/10 px-4 py-3 text-left text-white sm:min-w-52">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Valores
                </p>
                <div className="mt-2 grid gap-1.5">
                  <PriceLine
                    label="Aplicação"
                    value={formatCurrency(selectedService.applicationPriceCents)}
                  />
                  {selectedService.maintenancePriceCents ? (
                    <PriceLine
                      label="Manutenção"
                      value={formatCurrency(selectedService.maintenancePriceCents)}
                    />
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Serviço">
              <Select value={serviceId} onChange={(event) => setServiceId(event.target.value)}>
                {bookingServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Dia">
              <Input
                type="date"
                value={date}
                min={getTodayInputDate()}
                onChange={(event) => setDate(event.target.value)}
              />
            </Field>
            <Field label="Horário">
              <Select
                value={time}
                disabled={!hasAvailableTimes}
                onChange={(event) => setTime(event.target.value)}
              >
                {hasAvailableTimes ? (
                  availableTimes.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))
                ) : (
                  <option value="">Domingo sem atendimento</option>
                )}
              </Select>
              <p className="text-xs leading-5 text-white/50">
                Segunda a sexta das 8h às 14h. Sábado das 8h às 17h. Pausa às 12h.
              </p>
            </Field>
            <div className="rounded-2xl border border-fuchsia-200/20 bg-violet-950/40 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-fuchsia-100">
                <Clock3 className="size-4" />
                {selectedService?.durationLabel}
              </div>
              <p className="mt-2 text-xs leading-5 text-white/60">{selectedService?.description}</p>
              {!hasAvailableTimes ? (
                <p className="mt-3 rounded-xl border border-fuchsia-200/20 bg-fuchsia-300/10 px-3 py-2 text-xs font-medium text-fuchsia-100">
                  Domingo é reservado para descanso, então não há horários nesse dia.
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-fuchsia-200/20 bg-violet-950/30 p-4 sm:p-5">
          <Label className="text-white/60">Resumo para confirmação</Label>
          <div className="mt-3 rounded-2xl border border-fuchsia-200/20 bg-[#1d0b32]/80 p-4 text-sm leading-6 text-white/80">
            {previewMessage}
          </div>
        </div>

        <Button size="lg" className="h-14" disabled={!selectedService || !selectedTime || !date}>
          <CalendarCheck />
          Agendar no WhatsApp
          <MessageCircle />
        </Button>
      </form>
    </motion.div>
  );
}

function PriceLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold text-fuchsia-100">{value}</span>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label className="text-white/60">{label}</Label>
      {children}
    </div>
  );
}
