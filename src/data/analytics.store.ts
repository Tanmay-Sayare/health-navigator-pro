export interface AnalyticsData {
  totalRequests: number;
  avgTimeToConfirm: number;
  successRate: number;
  activeDonors: number;
  trends: {
    requests: number;
    time: number;
    success: number;
    donors: number;
  };
}

export interface TimeSeriesData {
  date: string;
  value: number;
  category?: string;
}

export interface BloodTypeStats {
  bloodType: string;
  requests: number;
  fulfilled: number;
  avgResponse: number;
}

export interface EngagementFunnel {
  stage: string;
  count: number;
  percentage: number;
}

export const analyticsInitialState: AnalyticsData = {
  totalRequests: 0,
  avgTimeToConfirm: 0,
  successRate: 0,
  activeDonors: 0,
  trends: { requests: 0, time: 0, success: 0, donors: 0 },
};

export const analyticsMockData: AnalyticsData = {
  totalRequests: 1247,
  avgTimeToConfirm: 4.2,
  successRate: 94.5,
  activeDonors: 3891,
  trends: { requests: 12.5, time: -8.3, success: 2.1, donors: 15.7 },
};

export const timeToConfirmTrend: TimeSeriesData[] = [
  { date: 'Jan 1', value: 5.2 },
  { date: 'Jan 5', value: 4.8 },
  { date: 'Jan 10', value: 4.5 },
  { date: 'Jan 15', value: 4.9 },
  { date: 'Jan 20', value: 4.2 },
  { date: 'Jan 25', value: 3.8 },
  { date: 'Jan 30', value: 4.1 },
  { date: 'Feb 5', value: 3.9 },
  { date: 'Feb 10', value: 4.0 },
  { date: 'Feb 15', value: 4.2 },
];

export const bloodTypeStatsMockData: BloodTypeStats[] = [
  { bloodType: 'O+', requests: 342, fulfilled: 325, avgResponse: 3.8 },
  { bloodType: 'O-', requests: 189, fulfilled: 172, avgResponse: 4.5 },
  { bloodType: 'A+', requests: 287, fulfilled: 278, avgResponse: 3.2 },
  { bloodType: 'A-', requests: 98, fulfilled: 89, avgResponse: 5.1 },
  { bloodType: 'B+', requests: 156, fulfilled: 148, avgResponse: 3.9 },
  { bloodType: 'B-', requests: 67, fulfilled: 58, avgResponse: 5.8 },
  { bloodType: 'AB+', requests: 78, fulfilled: 75, avgResponse: 4.2 },
  { bloodType: 'AB-', requests: 30, fulfilled: 26, avgResponse: 6.2 },
];

export const engagementFunnelMockData: EngagementFunnel[] = [
  { stage: 'Notifications Sent', count: 5420, percentage: 100 },
  { stage: 'Opened', count: 4012, percentage: 74 },
  { stage: 'Responded', count: 2845, percentage: 52.5 },
  { stage: 'Confirmed', count: 2156, percentage: 39.8 },
  { stage: 'Donated', count: 1892, percentage: 34.9 },
];

export const requestSuccessHeatmap = [
  { day: 'Mon', hour: '6AM', value: 85 },
  { day: 'Mon', hour: '12PM', value: 92 },
  { day: 'Mon', hour: '6PM', value: 78 },
  { day: 'Tue', hour: '6AM', value: 88 },
  { day: 'Tue', hour: '12PM', value: 95 },
  { day: 'Tue', hour: '6PM', value: 82 },
  { day: 'Wed', hour: '6AM', value: 90 },
  { day: 'Wed', hour: '12PM', value: 94 },
  { day: 'Wed', hour: '6PM', value: 85 },
  { day: 'Thu', hour: '6AM', value: 87 },
  { day: 'Thu', hour: '12PM', value: 91 },
  { day: 'Thu', hour: '6PM', value: 79 },
  { day: 'Fri', hour: '6AM', value: 82 },
  { day: 'Fri', hour: '12PM', value: 88 },
  { day: 'Fri', hour: '6PM', value: 75 },
];

export const upcomingDrives = [
  { date: '2026-01-20', title: 'SF General Drive', expected: 45 },
  { date: '2026-01-22', title: 'Stanford Community', expected: 60 },
  { date: '2026-01-25', title: 'Pediatric Special', expected: 30 },
  { date: '2026-01-28', title: 'Trauma Center', expected: 55 },
  { date: '2026-02-01', title: 'Corporate Partner', expected: 80 },
];

export const fetchAnalytics = async (): Promise<AnalyticsData> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(analyticsMockData), 500);
  });
};

export const fetchTimeSeriesData = async (): Promise<TimeSeriesData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(timeToConfirmTrend), 400);
  });
};

export const fetchBloodTypeStats = async (): Promise<BloodTypeStats[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(bloodTypeStatsMockData), 400);
  });
};
