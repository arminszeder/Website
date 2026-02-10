import React from 'react';
import { Bot, Zap, Code2, Users, Search, Play, Rocket } from 'lucide-react';
import { NavItem, ServiceItem, CaseStudy, ProcessStep, BenefitItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Case Studies', href: '#casestudies' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'AI Consulting & Strategy',
    description: 'We design a custom audit for your business to find the specific bottlenecks where AI can save you time and money.',
    icon: React.createElement(Search, { className: "w-6 h-6" }),
    colSpan: 2,
  },
  {
    title: 'Automated Workflows',
    description: 'We connect your current apps to run automatically to eliminate repetitive tasks.',
    icon: React.createElement(Zap, { className: "w-6 h-6" }),
    colSpan: 1,
  },
  {
    title: 'Custom AI Applications',
    description: 'We build an easy-to-use application tailored specifically to your company\'s unique data and needs.',
    icon: React.createElement(Code2, { className: "w-6 h-6" }),
    colSpan: 1,
  },
  {
    title: 'Intelligent Agents',
    description: '24/7 AI staff that can handle operations like customer support, meeting scheduling, and lead qualification.',
    icon: React.createElement(Bot, { className: "w-6 h-6" }),
    colSpan: 2,
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    value: '40%',
    label: 'Cost Reduction',
    description: 'Average reduction in operational costs by automating repetitive manual data entry and customer service tasks.'
  },
  {
    value: '10x',
    label: 'Faster Execution',
    description: 'Processes that took days now happen in seconds. Accelerate your delivery and responsiveness.'
  },
  {
    value: '24/7',
    label: 'Availability',
    description: 'Your digital workforce never sleeps, gets sick, or takes a holiday. Always on, always scaling.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'A friendly, non-technical call to identify exactly where specific bottlenecks are.'
  },
  {
    number: '02',
    title: 'AI Audit Presentation',
    description: 'We present a detailed personalized audit showing exactly what solutions can work for you.'
  },
  {
    number: '03',
    title: 'Implementation of AI Systems',
    description: 'We build the tools your business actually needs and we assist with your journey with AI.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Customer Support Bot',
    type: 'AI Chatbot',
    description: 'A 24/7 intelligent agent that handles 80% of customer inquiries instantly, escalating only complex issues to human staff.',
    benefit: 'Reduced support tickets by 75%',
    tools: ['Voiceflow', 'ChatGPT'],
    imagePlaceholderColor: 'bg-blue-100',
  },
  {
    title: 'FitTrack Pro',
    type: 'Gym Application',
    description: 'A member-centric mobile app tracking workouts and nutrition, increasing member retention by providing personalized AI coaching.',
    benefit: 'Automated Subscription Management',
    tools: ['Bolt.new', 'Supabase'],
    imagePlaceholderColor: 'bg-emerald-100',
  }
];

export const LOGOS = [
  'Make', 'n8n', 'Voiceflow', 'Supabase', 'Lovable', 'ElevenLabs', 'Bolt', 'ChatGPT', 'Claude', 'Gemini'
];
