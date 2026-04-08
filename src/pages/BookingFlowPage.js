import React, { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  ChevronRight,
  Check,
  Shield,
  Clock,
  Calendar,
  MapPin,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Tag,
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const BookingFlowPage = () => {
  const { providerId } = useParams();
  const [searchParams] = useSearchParams();
  const packageType = searchParams.get('package') || 'standard';
  const { t } = useLanguage();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    notes: '',
    date: '',
    time: '',
    recurring: 'one-time',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'ideal',
    promoCode: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const provider = {
    id: providerId || 1,
    name: 'Priya Sharma',
    avatar: 'PS',
    title: 'Certified Nurse | Post-Surgery Care',
    rating: 4.9,
    reviews: 312,
  };

  const packages = {
    basic: { name: 'Basic Care', price: 28, hours: '4 hours' },
    standard: { name: 'Standard Care', price: 55, hours: '8 hours' },
    premium: { name: 'Premium Care', price: 95, hours: '12 hours' },
  };

  const selectedPackage = packages[packageType] || packages.standard;

  const steps = [
    { number: 1, titleKey: 'book_step1' },
    { number: 2, titleKey: 'book_step2' },
    { number: 3, titleKey: 'book_step3' },
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleConfirmBooking = () => {
    console.log('Booking confirmed:', { provider, package: selectedPackage, formData });
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="pt-20 bg-cream min-h-screen" data-testid="booking-confirmation">
        <div className="section-container py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage/10 flex items-center justify-center">
              <Check size={40} className="text-sage" />
            </div>
            <h1 className="heading-section mb-4">{t('book_confirm_heading')}</h1>
            <p className="text-body mb-8">
              {provider.name} {t('book_confirm_body')}
            </p>
            <div className="card-lotus p-6 mb-8 text-left">
              <h3 className="font-serif text-lg font-medium text-sage-dark mb-4">{t('book_confirm_summary')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-lotus-text-muted">{t('book_service')}</span>
                  <span className="text-sage-dark">{selectedPackage.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lotus-text-muted">{t('book_provider')}</span>
                  <span className="text-sage-dark">{provider.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lotus-text-muted">{t('book_date_time').split(' ')[0]}</span>
                  <span className="text-sage-dark">{formData.date || t('book_confirm_tbc')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lotus-text-muted">{t('book_select_time')}</span>
                  <span className="text-sage-dark">{formData.time || t('book_confirm_tbc')}</span>
                </div>
                <hr className="border-lotus-border my-2" />
                <div className="flex justify-between font-medium">
                  <span className="text-sage-dark">{t('book_total')}</span>
                  <span className="price-highlight">€{selectedPackage.price + 5}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary">
                {t('book_back_home')}
              </Link>
              <Link to="/category/healthcare" className="btn-outline">
                {t('book_browse_providers')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-cream min-h-screen" data-testid="booking-flow-page">
      {/* Breadcrumb */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-lotus-text-muted hover:text-sage transition-colors">
              {t('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <Link
              to={`/service/${providerId}`}
              className="text-lotus-text-muted hover:text-sage transition-colors"
            >
              {provider.name}
            </Link>
            <ChevronRight size={14} className="text-lotus-text-muted" />
            <span className="text-sage-dark font-medium">{t('book_breadcrumb')}</span>
          </nav>
        </div>
      </div>

      {/* Stepper */}
      <div className="bg-warm-white border-b border-lotus-border">
        <div className="section-container py-6">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-medium transition-colors ${
                      currentStep > step.number
                        ? 'stepper-complete'
                        : currentStep === step.number
                        ? 'stepper-active'
                        : 'stepper-inactive'
                    }`}
                    data-testid={`step-indicator-${step.number}`}
                  >
                    {currentStep > step.number ? <Check size={18} /> : step.number}
                  </div>
                  <span
                    className={`text-sm font-medium hidden sm:block ${
                      currentStep >= step.number ? 'text-sage-dark' : 'text-lotus-text-muted'
                    }`}
                  >
                    {t(step.titleKey)}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-24 h-0.5 mx-3 ${
                      currentStep > step.number ? 'stepper-line-active' : 'stepper-line-inactive'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="max-w-3xl mx-auto">
          {/* Step 1: Service Details */}
          {currentStep === 1 && (
            <div className="space-y-6" data-testid="step-1-content">
              <div className="card-lotus p-6 lg:p-8">
                <h2 className="font-serif text-xl font-medium text-sage-dark mb-6">
                  {t('book_confirm_service')}
                </h2>

                {/* Provider Summary */}
                <div className="flex items-center gap-4 p-4 bg-sage-pale/30 rounded-xl mb-6">
                  <div className="w-14 h-14 avatar-circle avatar-sage">{provider.avatar}</div>
                  <div>
                    <p className="font-medium text-sage-dark">{provider.name}</p>
                    <p className="text-sm text-lotus-text-muted">{provider.title}</p>
                  </div>
                </div>

                {/* Selected Package */}
                <div className="p-4 border-2 border-sage rounded-xl mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sage-dark">{selectedPackage.name}</span>
                    <span className="price-highlight text-lg">€{selectedPackage.price}</span>
                  </div>
                  <p className="text-sm text-lotus-text-muted">
                    {selectedPackage.hours} {t('book_of_care_included')}
                  </p>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="text-sm font-medium text-sage-dark block mb-2">
                    {t('book_notes_label')}
                  </label>
                  <textarea
                    className="input-lotus min-h-[120px] resize-none"
                    placeholder={t('book_notes_placeholder')}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    data-testid="special-notes-input"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="btn-primary" onClick={handleNext} data-testid="next-step-btn">
                  {t('book_continue_schedule')}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Schedule */}
          {currentStep === 2 && (
            <div className="space-y-6" data-testid="step-2-content">
              <div className="card-lotus p-6 lg:p-8">
                <h2 className="font-serif text-xl font-medium text-sage-dark mb-6">
                  {t('book_choose_datetime')}
                </h2>

                {/* Date Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-sage-dark block mb-3">
                    <Calendar size={16} className="inline mr-2" /> {t('book_select_date')}
                  </label>
                  <input
                    type="date"
                    className="input-lotus"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    data-testid="date-input"
                  />
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-sage-dark block mb-3">
                    <Clock size={16} className="inline mr-2" /> {t('book_select_time')}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                          formData.time === time
                            ? 'bg-sage text-white'
                            : 'bg-sage-pale/50 text-sage-dark hover:bg-sage-pale'
                        }`}
                        onClick={() => setFormData({ ...formData, time })}
                        data-testid={`time-slot-${time.replace(/[:\s]/g, '-').toLowerCase()}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recurring Options */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-sage-dark block mb-3">
                    {t('book_booking_type')}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'one-time', key: 'book_one_time' },
                      { value: 'weekly', key: 'book_weekly' },
                      { value: 'monthly', key: 'book_monthly' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        className={`p-3 rounded-xl text-sm font-medium border-2 transition-colors ${
                          formData.recurring === option.value
                            ? 'border-sage bg-sage-pale/30 text-sage-dark'
                            : 'border-lotus-border text-lotus-text-mid hover:border-sage/50'
                        }`}
                        onClick={() => setFormData({ ...formData, recurring: option.value })}
                        data-testid={`recurring-${option.value}`}
                      >
                        {t(option.key)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm font-medium text-sage-dark block mb-3">
                    <MapPin size={16} className="inline mr-2" /> {t('book_service_address')}
                  </label>
                  <textarea
                    className="input-lotus mb-3"
                    placeholder={t('book_full_address')}
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    data-testid="address-input"
                  ></textarea>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      className="input-lotus"
                      placeholder={t('book_city')}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      data-testid="city-input"
                    />
                    <input
                      type="text"
                      className="input-lotus"
                      placeholder={t('book_pincode')}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      data-testid="pincode-input"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button className="btn-outline" onClick={handleBack} data-testid="back-btn">
                  {t('book_back')}
                </button>
                <button className="btn-primary" onClick={handleNext} data-testid="next-step-btn">
                  {t('book_continue_payment')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirm & Pay */}
          {currentStep === 3 && (
            <div className="space-y-6" data-testid="step-3-content">
              {/* Order Summary */}
              <div className="card-lotus p-6 lg:p-8">
                <h2 className="font-serif text-xl font-medium text-sage-dark mb-6">{t('book_order_summary')}</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-lotus-text-muted">{t('book_service')}</span>
                    <span className="text-sage-dark font-medium">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-lotus-text-muted">{t('book_provider')}</span>
                    <span className="text-sage-dark">{provider.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-lotus-text-muted">{t('book_date_time')}</span>
                    <span className="text-sage-dark">
                      {formData.date || t('book_not_selected')} at {formData.time || t('book_not_selected')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-lotus-text-muted">{t('book_duration')}</span>
                    <span className="text-sage-dark">{selectedPackage.hours}</span>
                  </div>
                  <hr className="border-lotus-border" />
                  <div className="flex justify-between text-sm">
                    <span className="text-lotus-text-muted">{t('book_service_fee')}</span>
                    <span className="text-sage-dark">€{selectedPackage.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-lotus-text-muted">{t('book_platform_fee')}</span>
                    <span className="text-sage-dark">€5</span>
                  </div>
                  <hr className="border-lotus-border" />
                  <div className="flex justify-between">
                    <span className="font-medium text-sage-dark">{t('book_total')}</span>
                    <span className="price-highlight text-xl">€{selectedPackage.price + 5}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 relative">
                    <Tag
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-lotus-text-muted"
                    />
                    <input
                      type="text"
                      className="input-lotus pl-10"
                      placeholder={t('book_promo_placeholder')}
                      value={formData.promoCode}
                      onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                      data-testid="promo-code-input"
                    />
                  </div>
                  <button
                    className="btn-outline"
                    data-testid="apply-promo-btn"
                    onClick={() => console.log('Apply promo:', formData.promoCode)}
                  >
                    {t('book_apply')}
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="card-lotus p-6 lg:p-8">
                <h2 className="font-serif text-xl font-medium text-sage-dark mb-6">{t('book_payment_method')}</h2>

                <div className="space-y-3">
                  {[
                    { value: 'ideal', label: 'iDEAL', icon: Building2, desc: 'Dutch bank transfer' },
                    { value: 'card', label: 'Credit/Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, Maestro' },
                    { value: 'upi', label: 'UPI', icon: Smartphone, desc: 'Pay using any UPI app' },
                    { value: 'bancontact', label: 'Bancontact', icon: Wallet, desc: 'Belgium & Netherlands' },
                  ].map((method) => (
                    <button
                      key={method.value}
                      className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-colors text-left ${
                        formData.paymentMethod === method.value
                          ? 'border-sage bg-sage-pale/30'
                          : 'border-lotus-border hover:border-sage/50'
                      }`}
                      onClick={() => setFormData({ ...formData, paymentMethod: method.value })}
                      data-testid={`payment-${method.value}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                        <method.icon size={20} className="text-sage" />
                      </div>
                      <div>
                        <p className="font-medium text-sage-dark">{method.label}</p>
                        <p className="text-xs text-lotus-text-muted">{method.desc}</p>
                      </div>
                      <div
                        className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.paymentMethod === method.value
                            ? 'border-sage bg-sage'
                            : 'border-lotus-border'
                        }`}
                      >
                        {formData.paymentMethod === method.value && (
                          <Check size={12} className="text-white" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guarantee Badges */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Shield size={16} className="text-sage" />
                  <span>{t('book_safe_payment')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Check size={16} className="text-sage" />
                  <span>{t('book_verified_provider')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-lotus-text-muted">
                  <Clock size={16} className="text-sage" />
                  <span>{t('book_free_cancel')}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <button className="btn-outline" onClick={handleBack} data-testid="back-btn">
                  {t('book_back')}
                </button>
                <button
                  className="btn-primary"
                  data-testid="confirm-booking-btn"
                  onClick={handleConfirmBooking}
                >
                  {t('book_confirm_btn')} — €{selectedPackage.price + 5}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingFlowPage;
