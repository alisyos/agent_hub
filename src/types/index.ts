export interface AIAgent {
  id: string;
  name: string;
  category: 'general' | 'marketing' | 'content';
  description: string;
  creditCost: number;
  icon: string;
  inputs: AgentInput[];
  outputs: string[];
}

export interface AgentInput {
  name: string;
  type: 'text' | 'file' | 'select' | 'checkbox';
  required: boolean;
  options?: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  type: 'individual' | 'company' | 'admin';
  credits: number;
  company?: {
    name: string;
    businessNumber: string;
    department: string;
    position: string;
  };
}

export interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price: number;
  bonus?: number;
}

export interface PaymentHistory {
  id: string;
  userId: string;
  packageId: string;
  amount: number;
  credits: number;
  date: string;
  method: string;
}

export interface UsageHistory {
  id: string;
  userId: string;
  agentId: string;
  creditsUsed: number;
  date: string;
  success: boolean;
} 