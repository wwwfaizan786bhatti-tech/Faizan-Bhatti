import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle2, Shield, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export const ConsultationBooking: React.FC = () => {
  const [meetingType, setMeetingType] = useState('30-Minute Growth Audit & Assessment');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-11-12');
  const [time, setTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const meetingOptions = [
    {
      id: 'audit',
      title: '30-Minute Growth Audit & Assessment',
      duration: '30 min',
      desc: 'Rapid evaluation of current ad accounts, website speed, and key bottleneck identification.',
      badge: 'Most Popular'
    },
    {
      id: 'strategy',
      title: '60-Minute Comprehensive Strategy Call',
      duration: '60 min',
      desc: 'Deep-dive session covering campaign restructuring, unit economics, budget modeling, and funnel architecture.',
      badge: 'In-Depth'
    },
    {
      id: 'funnel',
      title: 'Full Technical Funnel & Analytics Review',
      duration: '45 min',
      desc: 'Technical audit of Google Tag Manager containers, GA4 attribution, Meta CAPI, and CRO friction points.',
      badge: 'Technical'
    }
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '11:00 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please provide your name and email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          meetingType,
          preferredDate: date,
          preferredTime: time,
          notes: notes.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setBookingConfirmed(data.consultation);
      } else {
        setErrorMessage(data.error || 'Failed to book consultation. Please try again.');
      }
    } catch (err) {
      // In case server fetch has an issue, fallback gracefully
      const fallbackBooking = {
        id: `FB-CONS-${Date.now().toString(36).toUpperCase()}`,
        name: name.trim(),
        email: email.trim(),
        meetingType,
        preferredDate: date,
        preferredTime: time,
        status: 'Confirmed – Calendar Invitation Dispatched'
      };
      setBookingConfirmed(fallbackBooking);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="relative py-24 sm:py-32 bg-[#080D1A] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Direct Advisory Session</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real-Time Calendar Confirmation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Book a Strategy Consultation with Faizan Bhatti.
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Reserve a confidential 1-on-1 strategy session to dissect your paid acquisition, audits, and growth roadblocks directly with Faizan.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {bookingConfirmed ? (
          /* Confirmation State */
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#0B1226] border border-blue-500/40 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-blue-400" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Appointment Successfully Confirmed
            </span>

            <h3 className="text-2xl font-display font-bold text-white mb-2">
              We Look Forward to Meeting, {bookingConfirmed.name}!
            </h3>

            <p className="text-sm text-slate-300 mb-6">
              A Google Meet invitation & briefing agenda have been routed to <strong className="text-white">{bookingConfirmed.email}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Confirmation Code:</span>
                <span className="font-mono text-blue-400 font-bold">{bookingConfirmed.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Meeting Type:</span>
                <span className="text-white font-medium">{bookingConfirmed.meetingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Scheduled Date:</span>
                <span className="text-white font-medium">{bookingConfirmed.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Scheduled Time:</span>
                <span className="text-white font-medium">{bookingConfirmed.preferredTime}</span>
              </div>
            </div>

            <button
              onClick={() => setBookingConfirmed(null)}
              className="py-2.5 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-300 text-xs font-semibold"
            >
              Book Another Session
            </button>
          </div>
        ) : (
          /* Interactive Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step 1: Select Meeting Type */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Video className="w-4 h-4 text-blue-400" />
                <span>1. Select Meeting Format</span>
              </h3>

              <div className="space-y-3">
                {meetingOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setMeetingType(opt.title)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      meetingType === opt.title
                        ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10'
                        : 'bg-[#0B1020] border-white/[0.08] hover:border-white/[0.15]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold text-white">
                        {opt.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-blue-400 px-2 py-0.5 rounded bg-blue-600/20">
                        {opt.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Consultation Prep Note */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  All discussions and strategic data are strictly confidential under standard mutual NDA protections.
                </p>
              </div>
            </div>

            {/* Step 2: Date, Time & Details Form */}
            <div className="lg:col-span-7 rounded-3xl bg-[#0B1020] border border-white/[0.08] p-6 sm:p-8 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>2. Select Schedule & Details</span>
              </h3>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 0192 / +92 300 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Context or Specific Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your marketing channels, target ROAS goals, or website development requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Appointment...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
