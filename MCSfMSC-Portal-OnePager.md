# MCSfMSC Portal — Design One Pager

> **Inspired by**: AED Portal (aedportal.acesolutions.ms)
> **For**: Mission Critical Services for Microsoft Security Cloud
> **Author**: Sherry Shao | **Date**: February 24, 2026

---

## Vision

A single, content-organized portal where MCSfMSC engineers and stakeholders find the right operational knowledge instantly — organized by **what they need to do**, not where things are stored.

**Reference Model**: The AED Portal uses a tab-based, content-first design — one page, horizontal content domains, each revealing curated resource cards. No deep navigation, no separate pages to get lost in. We adopt the same pattern for MCSfMSC.

---

## Design Approach: Content-Focused, Not Feature-Focused

| Content-Focused (What we do) | Feature-Focused (What we avoid) |
|-------------------------------|----------------------------------|
| "How do I onboard a new customer?" | "We have a card component with hover effects" |
| "What's the severity response matrix?" | "We built 7 pages with CSS animations" |
| "Where are the playbooks for Sentinel?" | "There's a search bar and back-to-top button" |

**Principle**: Every element on the portal exists to answer a specific operational question. If it doesn't answer a question, it doesn't belong.

---

## Content Architecture (Tab-Based, Single Page)

Following the AED Portal model — one home page with **horizontal content tabs**, each tab surfaces curated cards linking to authoritative sources.

```
┌──────────────────────────────────────────────────────────────────────┐
│  Welcome to MCSfMSC Portal, [User]                                  │
│  Your hub for MCS Security Cloud operations                         │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  Chat with MCS Assistant...                              ➤  │    │
│  └──────────────────────────────────────────────────────────────┘    │
├──────────────────────────────────────────────────────────────────────┤
│ ┌─────────┐┌──────────┐┌──────────┐┌──────────┐┌────────┐┌───────┐  │
│ │Customer ││ Incident ││ Service  ││Playbooks ││Training││  KPIs │  │
│ │Onboard  ││ Response ││ Delivery ││& Runbooks││& Certs ││& Data │  │
│ └─────────┘└──────────┘└──────────┘└──────────┘└────────┘└───────┘  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  [Selected Tab Content — Resource Cards]                             │
│                                                                      │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐     │
│  │ Card Title     → │ │ Card Title     → │ │ Card Title     → │     │
│  │ Description      │ │ Description      │ │ Description      │     │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Content Domains & What They Answer

### 1. Customer Onboarding
*"How do I bring a new MCS customer live?"*
- Onboarding Checklist — Step-by-step from contract to steady state
- Customer Environment Setup — Entitlement mapping (Azure vs M365)
- Kickoff Deck Template — Standard customer introduction deck
- Service Improvement Plan — Post-onboarding improvement tracking

### 2. Incident Response
*"A Sev 1 just came in. What do I do?"*
- Severity Classification Matrix — 1 / A / B / C with response SLAs
- MCSfMSC vs Customer Responsibilities — Who does what, when
- Direct Connect Escalation — Self-escalate to Security Engineering
- ICM & Notification Workflow — Auto-trigger, on-call, bridge creation
- RCA Request Process — Customer-initiated, 10 business day SLA

### 3. Service Delivery
*"How do I run the day-to-day engagement?"*
- MCSfMSC 3 Pillars — Technical Engagement / Reliability / Accelerated Resolution
- Engagement Lifecycle — Kickoff → Assessment → Implementation → Optimization → Steady State
- Support Case Portals — Azure (subscription) vs MAC/M365 (tenant)
- MSR & QBR Templates — Monthly and quarterly review decks
- Delivery KPIs — IRT, Secure Score, CSAT targets

### 4. Playbooks & Runbooks
*"How do I handle a Sentinel/Defender/Purview issue?"*
- → SharePoint Playbooks Library (single authoritative source)
- Service-specific runbooks for Sentinel, Defender XDR, Entra, Purview, MDO
- Decks & Presentations library
- Video walkthroughs & recorded trainings

### 5. Training & Certifications
*"I'm new. How do I ramp up?"*
- Week 1-4 Onboarding Plan for new engineers
- Certification Paths — SC-900 → SC-200 → SC-300 → SC-400 → SC-100
- Learning resources & lab environments

### 6. KPIs, Dashboards & Data
*"How are we performing? Where's the data?"*
- MCS Dashboard (Power BI)
- Ops Review materials (weekly)
- Sprint Planning docs
- Scorecards & bowlers

---

## How This Differs From Current State

| Current (Multi-page) | Proposed (AED-style) |
|-----------------------|----------------------|
| 7 separate HTML pages | Single page with content tabs |
| Navigate away to find content | Everything visible from home |
| Feature-organized (page per feature) | Content-organized (tab per workflow) |
| Static cards with placeholder links | Curated cards answering real questions |
| No AI assistant | Embedded MCS chat assistant |
| No personalization | Personalized welcome + role context |

---

## Content Principles

1. **Answer a question** — Every card must answer "How do I...?" or "Where is...?"
2. **Link, don't duplicate** — Point to SharePoint/Teams as the source of truth
3. **Name the owner** — Each content domain has a named owner for accuracy
4. **Keep it current** — Stale content is worse than no content
5. **One click away** — From tab to answer in one click maximum

---

## Content Owners

| Content Domain | Owner | Scope |
|----------------|-------|-------|
| Customer Onboarding | Shalini Hada | Onboarding workflow, SIP, customer docs |
| Incident Response | Ankit Varshney | Severity, escalation, ICM, RCA |
| Service Delivery | Marlene Shaup | Lifecycle, KPIs, templates, guidelines |
| Playbooks & Runbooks | Geordie McGarty | SharePoint library, decks, videos |
| Training & Certs | Geordie McGarty | Engineer onboarding, cert paths |
| KPIs & Dashboards | Subha Sahoo | Power BI, ops review, scorecards |
| AI Assistant | Sherry Shao | MCS Agent / Copilot integration |

---

## Next Steps

1. **Consolidate current 7 pages → single-page tab layout** (AED pattern)
2. **Audit every card**: Does it answer a real question? Remove if not
3. **Replace all placeholder links** with real SharePoint/Teams URLs
4. **Integrate MCS AI Assistant** (chat interface on home page)
5. **Add personalization** — role-based content surfacing
6. **Review with content owners** — validate each domain's cards

---

*This is a content blueprint, not a feature spec. The portal succeeds when engineers stop searching and start finding.*