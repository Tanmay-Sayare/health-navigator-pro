export interface HealthMetrics {
  eligibilityDaysRemaining: number;
  eligibilityTotalDays: number;
  healthScore: number;
  hemoglobin: number;
  hemoglobinMin: number;
  hemoglobinMax: number;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  weight: number;
  lastCheckup: string;
  ironLevel: number;
  hydrationLevel: number;
}

export interface DonationHistory {
  id: string;
  date: string;
  location: string;
  type: 'whole blood' | 'platelets' | 'plasma' | 'double red';
  units: number;
  status: 'completed' | 'scheduled' | 'cancelled' | 'missed';
  livesImpacted: number;
}

export interface HealthAlert {
  id: string;
  type: 'urgent' | 'warning' | 'info';
  title: string;
  message: string;
  date: string;
  actionRequired: boolean;
}

export const healthInitialState: HealthMetrics = {
  eligibilityDaysRemaining: 0,
  eligibilityTotalDays: 56,
  healthScore: 0,
  hemoglobin: 0,
  hemoglobinMin: 12.5,
  hemoglobinMax: 17.5,
  bloodPressure: { systolic: 0, diastolic: 0 },
  weight: 0,
  lastCheckup: '',
  ironLevel: 0,
  hydrationLevel: 0,
};

export const healthMockData: HealthMetrics = {
  eligibilityDaysRemaining: 12,
  eligibilityTotalDays: 56,
  healthScore: 92,
  hemoglobin: 14.2,
  hemoglobinMin: 12.5,
  hemoglobinMax: 17.5,
  bloodPressure: { systolic: 118, diastolic: 76 },
  weight: 165,
  lastCheckup: '2026-01-02',
  ironLevel: 85,
  hydrationLevel: 78,
};

export const donationHistoryMockData: DonationHistory[] = [
  {
    id: '1',
    date: '2026-01-28',
    location: 'SF General Hospital',
    type: 'whole blood',
    units: 1,
    status: 'scheduled',
    livesImpacted: 0,
  },
  {
    id: '2',
    date: '2025-12-15',
    location: 'Stanford Blood Center',
    type: 'whole blood',
    units: 1,
    status: 'completed',
    livesImpacted: 3,
  },
  {
    id: '3',
    date: '2025-10-22',
    location: 'UCSF Medical Center',
    type: 'platelets',
    units: 2,
    status: 'completed',
    livesImpacted: 5,
  },
  {
    id: '4',
    date: '2025-08-30',
    location: 'Kaiser Permanente',
    type: 'whole blood',
    units: 1,
    status: 'completed',
    livesImpacted: 3,
  },
  {
    id: '5',
    date: '2025-07-05',
    location: 'Red Cross Mobile Unit',
    type: 'plasma',
    units: 1,
    status: 'completed',
    livesImpacted: 2,
  },
  {
    id: '6',
    date: '2025-05-18',
    location: 'SF General Hospital',
    type: 'double red',
    units: 2,
    status: 'completed',
    livesImpacted: 4,
  },
  {
    id: '7',
    date: '2025-04-02',
    location: 'Community Blood Drive',
    type: 'whole blood',
    units: 1,
    status: 'missed',
    livesImpacted: 0,
  },
];

export const healthAlertsMockData: HealthAlert[] = [
  {
    id: '1',
    type: 'urgent',
    title: 'Critical O- Shortage',
    message: 'Your blood type is urgently needed at SF General Hospital. Emergency blood drive tomorrow.',
    date: '2026-01-16',
    actionRequired: true,
  },
  {
    id: '2',
    type: 'info',
    title: 'Upcoming Appointment',
    message: 'Reminder: You have a donation scheduled at SF General Hospital on Jan 28, 2026.',
    date: '2026-01-15',
    actionRequired: false,
  },
  {
    id: '3',
    type: 'warning',
    title: 'Iron Levels',
    message: 'Your iron levels are slightly below optimal. Consider iron-rich foods before your next donation.',
    date: '2026-01-10',
    actionRequired: false,
  },
];

export const fetchHealthMetrics = async (): Promise<HealthMetrics> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(healthMockData), 400);
  });
};

export const fetchDonationHistory = async (): Promise<DonationHistory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(donationHistoryMockData), 400);
  });
};

export const fetchHealthAlerts = async (): Promise<HealthAlert[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(healthAlertsMockData), 300);
  });
};
