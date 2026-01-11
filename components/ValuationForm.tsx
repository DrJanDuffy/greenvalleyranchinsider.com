'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { valuationFormSchema, type ValuationFormSchema as ValuationFormType } from '@/lib/types';
import { toast } from 'sonner';
import { Home, TrendingUp } from 'lucide-react';

export function ValuationForm() {
  const form = useForm<ValuationFormType>({
    resolver: zodResolver(valuationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      renovations: '',
      movingReason: ''
    }
  });

  async function onSubmit(data: ValuationFormType) {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // Map to existing form schema format for API compatibility
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          company: data.address, // Using company field for address
          message: `Address: ${data.address}\n\nEstimated Renovations: ${data.renovations || 'None specified'}\n\nWhy considering moving: ${data.movingReason}`
        })
      });

      if (response.ok) {
        toast.success('Your valuation request has been submitted! We\'ll contact you shortly.');
        form.reset();
      } else {
        toast.error('Submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Form submission error:', error);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-[#C5A059] rounded-lg">
          <Home className="w-5 h-5 text-[#0F172A]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A]">Get Your Custom Insider Valuation</h3>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FieldSet>
          <FieldLegend>Contact Information</FieldLegend>
          <FieldDescription>
            We'll use this to send your personalized valuation report.
          </FieldDescription>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">
                    Full Name <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="john@example.com"
                      autoComplete="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input
                      {...field}
                      id="phone"
                      type="tel"
                      aria-invalid={fieldState.invalid}
                      placeholder="(702) 555-1234"
                      autoComplete="tel"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Property Details</FieldLegend>
          <FieldDescription>
            Help us understand your property to provide an accurate valuation.
          </FieldDescription>
          <FieldGroup>
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="address">
                    Property Address <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="address"
                    aria-invalid={fieldState.invalid}
                    placeholder="123 Main St, Green Valley Ranch, Henderson NV 89052"
                    autoComplete="street-address"
                  />
                  <FieldDescription>
                    Include street address, neighborhood (if applicable), and zip code
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="renovations"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="renovations">
                    Estimated Renovations or Improvements
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="renovations"
                    aria-invalid={fieldState.invalid}
                    placeholder="Kitchen remodel in 2020, new roof in 2019, updated HVAC system..."
                    rows={4}
                    className="resize-none"
                  />
                  <FieldDescription>
                    Tell us about any recent upgrades, renovations, or improvements that add value to your home.
                    {field.value && ` ${field.value.length}/500 characters`}
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Moving Plans</FieldLegend>
          <FieldDescription>
            Understanding your timeline helps us tailor our approach.
          </FieldDescription>
          <FieldGroup>
            <Controller
              name="movingReason"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="movingReason">
                    Why are you considering moving? <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="movingReason"
                    aria-invalid={fieldState.invalid}
                    placeholder="Relocating for work, downsizing, upgrading to a larger home, family changes..."
                    rows={4}
                    className="resize-none"
                  />
                  <FieldDescription>
                    {field.value.length}/500 characters
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="flex-1 sm:flex-none"
          >
            Reset
          </Button>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="flex-1 sm:flex-none bg-[#C5A059] hover:bg-[#B8914F] text-[#0F172A] font-semibold"
          >
            {form.formState.isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                <TrendingUp className="w-4 h-4 mr-2" />
                Get My Valuation
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
