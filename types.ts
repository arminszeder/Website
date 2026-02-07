import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: number;
}

export interface CaseStudy {
  title: string;
  type: string;
  description: string;
  benefit: string;
  tools: string[];
  imagePlaceholderColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  value: string;
  label: string;
  description: string;
}