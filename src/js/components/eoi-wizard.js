// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Enterprise Multi-Step EOI Wizard
// ══════════════════════════════════════════════════════════════════════════

import { showToast } from './modal-system.js';

export function initEOIWizard() {
  const wizardForm = document.getElementById('eoiWizardForm');
  if (!wizardForm) return;

  const stepIndicators = document.querySelectorAll('.step-indicator');
  const stepPanels = document.querySelectorAll('.wizard-step-panel');
  const nextBtns = document.querySelectorAll('[data-wizard-next]');
  const prevBtns = document.querySelectorAll('[data-wizard-prev]');
  const summaryDl = document.getElementById('eoiSummaryList');
  const mailtoBtn = document.getElementById('eoiMailtoAction');
  const copyEoiBtn = document.getElementById('eoiCopyDraftAction');
  const successPanel = document.getElementById('eoiSuccessPanel');
  const editDetailsBtn = document.getElementById('eoiEditDetailsBtn');

  let currentStep = 1;
  const totalSteps = 4;

  const EOI_REF = 'DC-ITP-TN/JV/2026/001';
  const EOI_SUBJECT = 'EOI – JV Development of Digital Infrastructure Campuses in Coimbatore (40 Acres) & Madurai ELCOT (3, 15, 30 Acres)';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function updateStepUI() {
    stepIndicators.forEach((ind) => {
      const stepNum = parseInt(ind.getAttribute('data-step'), 10);
      ind.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        ind.classList.add('active');
        ind.setAttribute('aria-current', 'step');
      } else if (stepNum < currentStep) {
        ind.classList.add('completed');
        ind.removeAttribute('aria-current');
      } else {
        ind.removeAttribute('aria-current');
      }
    });

    stepPanels.forEach((panel) => {
      const panelStep = parseInt(panel.getAttribute('data-step-panel'), 10);
      if (panelStep === currentStep) {
        panel.style.display = 'block';
        const firstInput = panel.querySelector('input, select, textarea');
        if (firstInput && currentStep > 1) firstInput.focus();
      } else {
        panel.style.display = 'none';
      }
    });
  }

  function validateStep(step) {
    let isValid = true;
    const currentPanel = document.querySelector(`.wizard-step-panel[data-step-panel="${step}"]`);
    if (!currentPanel) return true;

    const requiredInputs = currentPanel.querySelectorAll('[required]');
    requiredInputs.forEach((input) => {
      const errorEl = document.getElementById(`${input.id}-err`);
      let msg = '';

      if (input.type === 'checkbox' && !input.checked) {
        msg = 'This confirmation is required.';
      } else if (!input.value.trim()) {
        msg = `${input.getAttribute('data-label') || 'This field'} is required.`;
      } else if (input.type === 'email' && !EMAIL_RE.test(input.value.trim())) {
        msg = 'Please enter a valid work email (e.g. name@company.com).';
      } else if (input.type === 'tel' && input.value.trim()) {
        const digits = input.value.replace(/[^\d]/g, '');
        if (digits.length < 7 || digits.length > 15) {
          msg = 'Please enter a valid phone number (7–15 digits).';
        }
      }

      if (msg) {
        isValid = false;
        input.setAttribute('aria-invalid', 'true');
        if (errorEl) {
          errorEl.textContent = msg;
          errorEl.classList.add('visible');
        }
      } else {
        input.removeAttribute('aria-invalid');
        if (errorEl) {
          errorEl.textContent = '';
          errorEl.classList.remove('visible');
        }
      }
    });

    return isValid;
  }

  // Next Buttons
  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
          currentStep++;
          updateStepUI();
        }
      }
    });
  });

  // Prev Buttons
  prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepUI();
      }
    });
  });

  function getFormData() {
    return {
      company: document.getElementById('eoi_company')?.value.trim() || '',
      contact: document.getElementById('eoi_contact')?.value.trim() || '',
      email: document.getElementById('eoi_email')?.value.trim() || '',
      phone: document.getElementById('eoi_phone')?.value.trim() || '',
      orgType: document.getElementById('eoi_orgtype')?.value || '',
      location: document.getElementById('eoi_location')?.value || '',
      devType: document.getElementById('eoi_devtype')?.value || '',
      equityModel: document.getElementById('eoi_model')?.value || '',
      financialCap: document.getElementById('eoi_financial')?.value || '',
      experience: document.getElementById('eoi_experience')?.value.trim() || '',
      timeline: document.getElementById('eoi_timeline')?.value || '',
      notes: document.getElementById('eoi_notes')?.value.trim() || ''
    };
  }

  function compileDraftText(d) {
    return [
      `EXPRESSION OF INTEREST (EOI) DRAFT`,
      `Reference: ${EOI_REF}`,
      `Subject: ${EOI_SUBJECT}`,
      `--------------------------------------------------`,
      `COMPANY DETAILS:`,
      `Company Name: ${d.company}`,
      `Contact Person: ${d.contact}`,
      `Work Email: ${d.email}`,
      `Phone: ${d.phone || 'N/A'}`,
      `Organization Type: ${d.orgType}`,
      ``,
      `OPPORTUNITY SELECTION:`,
      `Location(s) of Interest: ${d.location}`,
      `Development Type: ${d.devType || 'Not specified'}`,
      `Preferred Partnership Model: ${d.equityModel || 'JV / SPV'}`,
      ``,
      `CAPABILITIES & TIMELINE:`,
      `Investment / Funding Capability: ${d.financialCap || 'Available on request'}`,
      `Target Execution Timeline: ${d.timeline || 'Immediate / 2026'}`,
      `Track Record / References: ${d.experience || 'Detailed in attached dossier'}`,
      ``,
      `ADDITIONAL NOTES:`,
      `${d.notes || 'None provided.'}`,
      `--------------------------------------------------`,
      `Note: We will attach our official corporate profile, proof of financial capability, references, and technical dossier to this submission.`
    ].join('\n');
  }

  function renderSummary(d) {
    if (!summaryDl) return;
    summaryDl.innerHTML = `
      <div class="summary-row"><strong>EOI Reference:</strong> <span>${EOI_REF}</span></div>
      <div class="summary-row"><strong>Company:</strong> <span>${d.company}</span></div>
      <div class="summary-row"><strong>Contact Person:</strong> <span>${d.contact}</span></div>
      <div class="summary-row"><strong>Work Email:</strong> <span>${d.email}</span></div>
      <div class="summary-row"><strong>Organization:</strong> <span>${d.orgType}</span></div>
      <div class="summary-row"><strong>Target Location:</strong> <span>${d.location}</span></div>
      <div class="summary-row"><strong>Collaboration Model:</strong> <span>${d.equityModel || 'JV / SPV'}</span></div>
      <div class="summary-row"><strong>Funding Capability:</strong> <span>${d.financialCap || 'Standard'}</span></div>
      <div class="summary-row"><strong>Timeline:</strong> <span>${d.timeline || '2026–2027'}</span></div>
    `;
  }

  // Form Submit Handler
  wizardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    const data = getFormData();
    renderSummary(data);

    const draftText = compileDraftText(data);
    const mailtoUrl = `mailto:eoi@greennext.in?subject=${encodeURIComponent(EOI_SUBJECT)}&body=${encodeURIComponent(draftText)}`;

    if (mailtoBtn) {
      mailtoBtn.href = mailtoUrl;
    }

    if (copyEoiBtn) {
      copyEoiBtn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(draftText);
          showToast('Complete EOI Package copied to clipboard.');
        } catch (err) {
          showToast('Failed to copy. Please select text manually.', 'error');
        }
      };
    }

    wizardForm.style.display = 'none';
    if (successPanel) {
      successPanel.style.display = 'block';
      successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    showToast('EOI Dossier Draft compiled successfully.');
  });

  if (editDetailsBtn) {
    editDetailsBtn.addEventListener('click', () => {
      if (successPanel) successPanel.style.display = 'none';
      wizardForm.style.display = 'block';
      currentStep = 1;
      updateStepUI();
    });
  }

  // Step Indicators Click
  stepIndicators.forEach((ind) => {
    ind.addEventListener('click', () => {
      const targetStep = parseInt(ind.getAttribute('data-step'), 10);
      if (targetStep < currentStep) {
        currentStep = targetStep;
        updateStepUI();
      } else if (targetStep > currentStep) {
        if (validateStep(currentStep)) {
          currentStep = targetStep;
          updateStepUI();
        }
      }
    });
  });

  updateStepUI();
}
