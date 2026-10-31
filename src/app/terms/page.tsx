import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BRAND_CONFIG } from '@/config/brand.config';
import { WayforthLogo } from '@/components/brand/WayforthLogo';
import { ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: `Terms & Conditions | Cancellation & Refund Policy — ${BRAND_CONFIG.name}`,
  description:
    'Comprehensive institutional governance, pay-as-you-go milestone policies, cancellation terms, and academic integrity guidelines for Wayforth Advisory.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0C1220] text-[#CBD8E6] font-sans">
      {/* Top Masthead */}
      <header className="border-b border-[#2A3548] bg-[#0C1220] sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <WayforthLogo variant="compact" theme="light" sublineText="" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#CBD8E6] hover:text-[#FFFFFF] transition-colors border border-[#2A3548] px-3.5 py-1.5 bg-[#101A2B] rounded-lg hover:border-[#B8975A]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Main Folio</span>
          </Link>
        </div>
      </header>

      {/* Main Legal Document Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Folio Identifier */}
        <div className="flex items-center justify-between border-b border-[#2A3548] pb-4 mb-10 text-[11px] font-sans font-medium text-[#8A9BB0] tracking-wider">
          <span>DOCUMENT NO. WF-LEG-2026-01</span>
          <span className="text-[#B8975A] font-semibold">LAST REVISED: OCTOBER 2026</span>
        </div>

        <div className="mb-12">
          <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] block mb-2 font-semibold">
            Contractual Clarity & Mutual Accountability
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F0E8] font-normal tracking-tight mb-4">
            Terms of Service & Institutional Governance
          </h1>
          <p className="text-sm sm:text-base text-[#CBD8E6] leading-relaxed max-w-2xl">
            At <strong className="text-[#F5F0E8]">{BRAND_CONFIG.name}</strong> ({BRAND_CONFIG.domain}), we publish our contractual terms, cancellation schedules, and academic disclaimers openly.
            Work begins only upon written confirmation of your customized quotation.
          </p>
        </div>

        {/* Legal Clauses Grid */}
        <div className="space-y-12 text-[13.5px] sm:text-sm text-[#CBD8E6] leading-relaxed">
          
          {/* Section 1: Cancellation & Refund Policy */}
          <section id="cancellation" className="border-t border-[#2A3548] pt-8 space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-bold block">
              Section 01 // Cancellation and Refund Policy
            </span>
            <h2 className="font-serif text-2xl text-[#F5F0E8]">
              1. Project Timeline & Refund Eligibility
            </h2>
            <p>
              A customer may request order cancellation by submitting written communication via email to{' '}
              <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-[#B8975A] underline font-sans font-semibold">
                {BRAND_CONFIG.contactEmail}
              </a>{' '}
              or our confirmed WhatsApp advisory channel. The applicable refund depends strictly on the proportion of the agreed project timeline that has elapsed, the research work completed, and reasonable reserved costs incurred:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#101A2B] border border-[#2A3548] rounded-xl space-y-2">
                <strong className="block text-[#F5F0E8] font-serif text-sm">
                  A. Cancellation Before &gt;50% of the Timeline Has Elapsed:
                </strong>
                <p className="text-xs text-[#8A9BB0]">
                  If the customer cancels before more than half of the agreed project timeline has elapsed, the customer is generally eligible for a <strong className="text-[#CBD8E6]">refund of 50% of the advance deposit received</strong>. The remaining 50% is retained to cover preliminary literature surveys, data extraction, reserved research allocation, and administrative overhead.
                </p>
              </div>

              <div className="p-4 bg-[#101A2B] border border-[#2A3548] rounded-xl space-y-2">
                <strong className="block text-[#F5F0E8] font-serif text-sm">
                  B. Cancellation After &gt;50% of the Timeline Has Elapsed:
                </strong>
                <p className="text-xs text-[#8A9BB0]">
                  If cancellation is requested after more than half of the agreed project timeline has elapsed, the advance payment is <strong className="text-[#CBD8E6]">non-refundable</strong> due to allocated scholar hours and completed manuscript drafting, subject to applicable consumer protection laws.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#8A9BB0] font-sans">
              *Note: Elapsed timeline is calculated between the confirmed order initiation date and the mutually agreed delivery deadline stated in your written quotation.
            </p>
          </section>

          {/* Section 2: Pay-As-You-Go Workflow */}
          <section id="workflow" className="border-t border-[#2A3548] pt-8 space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-bold block">
              Section 02 // Pay-As-You-Go Milestone Safeguard
            </span>
            <h2 className="font-serif text-2xl text-[#F5F0E8]">
              2. Order Process & Payment Schedule
            </h2>
            <p>
              To ensure mutual trust, {BRAND_CONFIG.name} operates on a transparent pay-as-you-go milestone structure:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#CBD8E6]">
              <li>
                <strong className="text-[#F5F0E8]">Step 1 (Brief & Quote):</strong> You share your project guidelines, rubric, and target deadline. We issue a formal written quotation with an itemized breakdown.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Step 2 (50% Initial Milestone Deposit):</strong> Work commences immediately upon receipt of a 50% milestone advance deposit. Pay-as-you-go milestone safeguard.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Step 3 (Watermarked Preview):</strong> Once a representative draft or designated chapter section is prepared, you receive a protected watermarked preview to evaluate research depth, citation rigor, and writing tone.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Step 4 (1 Included Revision):</strong> One comprehensive revision round is included to consolidate feedback and fine-tune your deliverable within the agreed brief.
              </li>
              <li>
                <strong className="text-[#F5F0E8]">Step 5 (Final 50% Settlement & Release):</strong> The remaining 50% milestone balance becomes due after preview acceptance, upon which clean unwatermarked Word (.docx) and PDF files are released.
              </li>
            </ul>
          </section>

          {/* Section 3: Revision Allowance */}
          <section id="revisions" className="border-t border-[#2A3548] pt-8 space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-bold block">
              Section 03 // Revisions & Scope Boundaries
            </span>
            <h2 className="font-serif text-2xl text-[#F5F0E8]">
              3. Revision Policy
            </h2>
            <p>
              <strong className="text-[#F5F0E8]">One comprehensive revision round is included</strong> in the quoted project price. All requested adjustments must strictly align with the original confirmed brief and guidelines.
            </p>
            <p className="text-[#8A9BB0]">
              Requests arising from altered assignment topics, additional word counts, shifted syllabi, or new instructions introduced post-commencement are considered scope expansions and will be quoted separately before work is executed.
            </p>
          </section>

          {/* Section 4: Academic Integrity & Outcomes Disclaimer */}
          <section id="ethics" className="border-t border-[#2A3548] pt-8 space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-bold block">
              Section 04 // Academic Outcomes & Ethical Use
            </span>
            <h2 className="font-serif text-2xl text-[#F5F0E8]">
              4. Ethics, Disclaimers & Permitted Use
            </h2>
            <p>
              <strong className="text-[#F5F0E8]">{BRAND_CONFIG.name} does not guarantee grades, marks, awards, publication, distinctions, or institutional acceptance.</strong> Academic evaluations are the sole prerogative of institutional faculty, examiners, and examination boards.
            </p>
            <p className="text-[#8A9BB0]">
              All deliverables, financial models, literature matrices, and project files provided by {BRAND_CONFIG.name} are designed exclusively for reference, study assistance, synthesis frameworks, and educational guidance. Customers bear full individual responsibility for ensuring that their use of these materials complies with applicable institutional honour codes, academic integrity policies, and disclosure mandates.
            </p>
          </section>

          {/* Section 5: Human-Written Standard */}
          <section id="human-content" className="border-t border-[#2A3548] pt-8 space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-bold block">
              Section 05 // Authorship & Originality
            </span>
            <h2 className="font-serif text-2xl text-[#F5F0E8]">
              5. 100% Human Writing Standard
            </h2>
            <p>
              All deliverables are produced by qualified human subject specialists utilizing scholarly research methodologies and verified peer citations. We expressly disclaim the use of automated AI regurgitation tools that manufacture inaccurate citations or robotic phrasing.
            </p>
            <p className="text-[#8A9BB0]">
              Because commercial AI detection tools operate probabilistically and frequently produce false positives on authentic human writing, we commit to verifiable primary sources, transparent methodologies, and draft version histories rather than probabilistic algorithm claims.
            </p>
          </section>

          {/* Section 6: Delivery Package */}
          <section id="delivery" className="border-t border-[#2A3548] pt-8 space-y-4">
            <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#B8975A] font-bold block">
              Section 06 // Deliverables Package
            </span>
            <h2 className="font-serif text-2xl text-[#F5F0E8]">
              6. Final Delivery Formats
            </h2>
            <p>
              Unless otherwise specified in your written quotation, the finalized delivery package includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#CBD8E6]">
              <li>Final formatted Adobe PDF document</li>
              <li>Editable Microsoft Word (.docx) manuscript</li>
              <li>Raw supporting datasets (.xlsx, .csv) and chart graphics if included in scope</li>
              <li>Accredited bibliographic references formatted to specified style (APA, Harvard, Chicago, IEEE)</li>
            </ul>
          </section>

          {/* Legal Inquiries Box */}
          <div className="p-6 bg-[#101A2B] border border-[#2A3548] space-y-2 mt-8 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-sans uppercase font-bold text-[#F5F0E8]">
              <Mail className="w-4 h-4 text-[#B8975A]" />
              <span>Questions Regarding These Policies?</span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#8A9BB0]">
              Direct all contractual inquiries and quotation clarifications to our primary business desk at{' '}
              <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-[#B8975A] font-semibold underline">
                {BRAND_CONFIG.contactEmail}
              </a>
              . All confirmed quotations include these terms by reference.
            </p>
          </div>

        </div>
      </article>

      {/* Legal Footer */}
      <footer className="border-t border-[#2A3548] bg-[#0C1220] py-8 text-center text-xs font-sans text-[#8A9BB0]">
        <p>© 2026 {BRAND_CONFIG.name} Advisory ({BRAND_CONFIG.domain}). All rights reserved.</p>
      </footer>
    </main>
  );
}
