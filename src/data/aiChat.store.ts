export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestions?: string[];
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  prompt: string;
}

export const chatInitialState: ChatMessage[] = [];

export const chatMockData: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello! I'm HemaBot, your AI health assistant for blood donation. I can help you check your eligibility, prepare for donations, answer health questions, and provide personalized recommendations. How can I help you today?",
    timestamp: '2026-01-16T10:00:00Z',
    suggestions: ['Check my eligibility', 'Prepare for donation', 'Iron-rich foods'],
  },
  {
    id: '2',
    role: 'user',
    content: 'Am I eligible to donate blood right now?',
    timestamp: '2026-01-16T10:01:00Z',
  },
  {
    id: '3',
    role: 'assistant',
    content: "Based on your profile, you have **12 days** remaining until you're eligible to donate again. Your last donation was on December 15, 2025. The standard waiting period between whole blood donations is 56 days.\n\n**Your Current Status:**\n- ✅ Health Score: 92/100 (Excellent)\n- ✅ Hemoglobin: 14.2 g/dL (Normal range)\n- ⚠️ Iron Level: 85% (Consider iron-rich foods)\n\nWould you like me to help you prepare for your next donation or find nearby drives?",
    timestamp: '2026-01-16T10:01:30Z',
    suggestions: ['Find nearby drives', 'Preparation tips', 'Boost iron levels'],
  },
];

export const quickActionsMockData: QuickAction[] = [
  {
    id: '1',
    label: 'Check Eligibility',
    icon: 'check_circle',
    prompt: 'Am I eligible to donate blood right now?',
  },
  {
    id: '2',
    label: 'Prepare for Donation',
    icon: 'fitness_center',
    prompt: 'How should I prepare for my upcoming blood donation?',
  },
  {
    id: '3',
    label: 'Find Nearby Drives',
    icon: 'location_on',
    prompt: 'Show me blood donation drives near my location.',
  },
  {
    id: '4',
    label: 'Health Tips',
    icon: 'favorite',
    prompt: 'Give me tips to maintain good health for regular blood donation.',
  },
  {
    id: '5',
    label: 'Iron-Rich Foods',
    icon: 'restaurant',
    prompt: 'What are the best iron-rich foods to eat before donating blood?',
  },
  {
    id: '6',
    label: 'Donation History',
    icon: 'history',
    prompt: 'Show me my donation history and impact.',
  },
];

export const aiResponseTemplates = {
  eligibility: {
    eligible: "Great news! You're eligible to donate blood. Your health metrics look excellent.",
    notEligible: "You have {days} days remaining until you're eligible to donate again.",
  },
  preparation: [
    'Stay hydrated by drinking plenty of water 24-48 hours before donation.',
    'Eat iron-rich foods like spinach, red meat, or fortified cereals.',
    'Get a good night\'s sleep before your donation day.',
    'Avoid alcohol and caffeine for at least 24 hours before donating.',
    'Wear comfortable clothing with sleeves that can be rolled up.',
  ],
  aftercare: [
    'Rest for 10-15 minutes after donating.',
    'Keep the bandage on for at least 4 hours.',
    'Avoid strenuous exercise for 24 hours.',
    'Drink extra fluids for the next 48 hours.',
    'Eat iron-rich foods to help replenish your blood.',
  ],
};

export const fetchChatHistory = async (): Promise<ChatMessage[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(chatMockData), 300);
  });
};

export const sendMessage = async (message: string): Promise<ChatMessage> => {
  return new Promise((resolve) => {
    const response: ChatMessage = {
      id: String(Date.now()),
      role: 'assistant',
      content: "I understand you're asking about blood donation. Let me help you with that. Based on your health profile and donation history, I can provide personalized recommendations. Is there anything specific you'd like to know?",
      timestamp: new Date().toISOString(),
      suggestions: ['Tell me more', 'Check eligibility', 'Find drives'],
    };
    setTimeout(() => resolve(response), 1000);
  });
};

export const fetchQuickActions = async (): Promise<QuickAction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(quickActionsMockData), 200);
  });
};
