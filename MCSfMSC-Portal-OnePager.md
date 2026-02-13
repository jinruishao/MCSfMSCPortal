# MCSfMSC Portal — One Pager

> **Mission Critical Services for Microsoft Security Cloud — Internal Knowledge Hub**
> Owner: Sherry Shao | Status: Live | GitHub: github.com/jinruishao/MCSfMSCPortal

---

## Problem Statement

MCSfMSC team's operational knowledge is scattered across SharePoint folders, Teams channels, emails, and individual decks. New engineers struggle to find the right playbooks. Severity workflows and escalation paths lack a single source of truth. Team members waste time navigating fragmented resources instead of serving customers.

---

## Solution: MCSfMSC Portal

A **lightweight, zero-dependency internal portal** that serves as the single front door to all MCSfMSC operational knowledge — connecting people, processes, and resources in one place.

**Design Principles:**
- **Single pane of glass** — One URL for everything: severity matrix, delivery processes, playbooks, training, and 60+ resource docs
- **Hub, not a copy** — Portal links to authoritative sources (SharePoint, admin portals) rather than duplicating content
- **Zero friction** — Static HTML/CSS/JS, no build tools, no authentication, instant load, works offline
- **Owner-driven** — Each page has a named owner responsible for content accuracy

---

## Portal Architecture

```
                            ┌─────────────────────────┐
                            │       HOME PAGE         │
                            │  7 Quick Access Cards   │
                            │  Team & Leadership (8)  │
                            │  Announcements          │
                            └────────────┬────────────┘
                                         │
                 ┌───────────────────────┬┴┬───────────────────────┐
                 │                       │ │                       │
    ┌────────────▼──────────┐ ┌──────────▼─▼────────┐ ┌───────────▼──────────┐
    │   ISSUE RESOLUTION    │ │     DELIVERY        │ │    ONBOARDING        │
    │                       │ │                     │ │                      │
    │ • Severity Matrix     │ │ • 3 Capability      │ │ • 6-Step Customer    │
    │   (1 / A / B / C)     │ │   Pillars           │ │   Onboarding Flow   │
    │ • MCSfMSC & Customer  │ │ • Support Case      │ │ • Onboarding Docs   │
    │   Responsibilities    │ │   Portals           │ │                      │
    │                       │ │ • Engagement         │ │ Owner: Shalini       │
    │ Owner: Ankit          │ │   Lifecycle          │ └──────────────────────┘
    └───────────────────────┘ │ • KPIs & Templates   │
                              │                     │
                              │ Owner: Marlene       │
                              └─────────────────────┘

    ┌───────────────────────┐ ┌─────────────────────┐ ┌──────────────────────┐
    │  PLAYBOOKS & VIDEOS   │ │     TRAINING        │ │    RESOURCES         │
    │                       │ │                     │ │                      │
    │ → SharePoint Library  │ │ • Week 1-4 Onboard  │ │ • 60+ Documents      │
    │   (Single CTA)        │ │ • Cert Paths        │ │ • 8 Categories       │
    │ • 6 Service Areas     │ │   SC-900 → SC-100   │ │   (Ops, Sprint,      │
    │ • Decks & Videos      │ │ • Learning Links    │ │    Dashboards, AI)   │
    │                       │ │                     │ │                      │
    │ Owner: Geordie        │ │ Owner: Geordie      │ │                      │
    └───────────────────────┘ └─────────────────────┘ └──────────────────────┘
```

---

## Core Capability: MCSfMSC Service Delivery Model

```
  ┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
  │    TECHNICAL      │◄──────►│   RELIABILITY     │◄──────►│   ACCELERATED    │
  │   ENGAGEMENT      │        │                  │        │   RESOLUTION     │
  │                  │        │                  │        │                  │
  │ • Assigned CLE   │        │ • Engineering    │        │ • 15-min Sev 1/A │
  │   who advocates  │        │   awareness &    │        │ • Crisis mgmt    │
  │   for customer   │        │   readiness      │        │ • Self-escalate  │
  │ • Deep product   │        │ • Roadmap        │        │   to Engineering │
  │   knowledge      │        │   insights       │        │ • RCA in 10 days │
  └──────────────────┘        └──────────────────┘        └──────────────────┘
```

---

## Severity Response Model

| Severity | Impact | MCSfMSC Response | Customer Action |
|----------|--------|-----------------|-----------------|
| **1** | Catastrophic | 15 min, CLE engaged, 24×7, Engineering-led crisis | Direct Connect, Senior exec notify, 24×7 |
| **A** | Critical | 15 min, CLE engaged, 24×7, Engineering-led crisis | Direct Connect, Mgmt notify, 24×7 |
| **B** | Moderate | 2 hours | Resources allocated, Change control |
| **C** | Minimum | 4 hours, Business hours only | Resources allocated, 24h response |

---

## Team

| Role | Name | Focus Area |
|------|------|------------|
| **Product Owner** | Marlene Shaup | MCS Delivery |
| Issue Resolution | Ankit Varshney | Severity, Escalation, Notification |
| Training | Geordie McGarty | Playbooks, Decks, Videos, Engineer Training |
| Metrics & Reporting | Subha Sahoo | MCS Dashboard, Power BI |
| Customer Onboarding | Shalini Hada | Onboarding, Service Improvement Plan |
| Strategic Guidance | Miky Munteanu | Leadership |
| AI Initiatives | Sherry Shao | MCS Agent, Copilot Integrations |
| AI Initiatives | Alessandra Liu | AI-driven Security Automation |

---

## What's Next

| Initiative | Description | Status |
|------------|-------------|--------|
| **ICM Auto-Trigger** | Auto IcM Sev 2 for Sev 1/A cases → CLE & PHE teams | Proposed |
| **Unified Comms Strategy** | Standardized incident updates with AI summarization | In Discussion |
| **Direct Connect Alignment** | Clarify process to avoid ICM sprawl | Follow-up Scheduled |
| **MCS Agent / Copilot** | AI-driven automation for security operations | In Progress |
| **Resource Links** | Replace 60+ placeholder links with real SharePoint URLs | Pending |

---

*Generated: February 13, 2026 | Static HTML/CSS/JS — No build tools, no auth, no dependencies*