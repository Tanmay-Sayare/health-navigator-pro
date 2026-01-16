export interface DonationDrive {
  id: string;
  title: string;
  hospital: string;
  location: string;
  date: string;
  time: string;
  bloodTypesNeeded: string[];
  currentUnits: number;
  goalUnits: number;
  urgency: 'critical' | 'high' | 'moderate' | 'low';
  distance: number;
  image?: string;
  aiRecommended?: boolean;
  description: string;
}

export const drivesInitialState: DonationDrive[] = [];

export const drivesMockData: DonationDrive[] = [
  {
    id: '1',
    title: 'Emergency Blood Drive',
    hospital: 'SF General Hospital',
    location: '1001 Potrero Ave, San Francisco',
    date: '2026-01-20',
    time: '9:00 AM - 5:00 PM',
    bloodTypesNeeded: ['O-', 'O+', 'A-'],
    currentUnits: 45,
    goalUnits: 100,
    urgency: 'critical',
    distance: 2.3,
    aiRecommended: true,
    description: 'Critical shortage of O-negative blood. Your donation could save multiple lives.',
  },
  {
    id: '2',
    title: 'Community Blood Drive',
    hospital: 'Stanford Medical Center',
    location: '300 Pasteur Dr, Stanford',
    date: '2026-01-22',
    time: '10:00 AM - 4:00 PM',
    bloodTypesNeeded: ['A+', 'B+', 'AB+'],
    currentUnits: 67,
    goalUnits: 80,
    urgency: 'moderate',
    distance: 5.1,
    aiRecommended: true,
    description: 'Regular community drive to maintain blood supply levels.',
  },
  {
    id: '3',
    title: 'Pediatric Blood Drive',
    hospital: 'UCSF Benioff Children\'s',
    location: '1975 4th St, San Francisco',
    date: '2026-01-25',
    time: '8:00 AM - 2:00 PM',
    bloodTypesNeeded: ['O+', 'A+', 'B-'],
    currentUnits: 22,
    goalUnits: 50,
    urgency: 'high',
    distance: 3.8,
    description: 'Help children in need. Specialized blood products for pediatric patients.',
  },
  {
    id: '4',
    title: 'Trauma Center Drive',
    hospital: 'Zuckerberg SF General',
    location: '1001 Potrero Ave, San Francisco',
    date: '2026-01-28',
    time: '7:00 AM - 7:00 PM',
    bloodTypesNeeded: ['O-', 'O+'],
    currentUnits: 15,
    goalUnits: 60,
    urgency: 'critical',
    distance: 2.3,
    aiRecommended: true,
    description: 'Trauma center needs urgent resupply. Universal donors especially needed.',
  },
  {
    id: '5',
    title: 'Corporate Partnership Drive',
    hospital: 'Kaiser Permanente',
    location: '2425 Geary Blvd, San Francisco',
    date: '2026-02-01',
    time: '11:00 AM - 6:00 PM',
    bloodTypesNeeded: ['All Types'],
    currentUnits: 89,
    goalUnits: 120,
    urgency: 'low',
    distance: 4.2,
    description: 'Annual partnership drive. All blood types welcome.',
  },
  {
    id: '6',
    title: 'Rare Blood Type Drive',
    hospital: 'California Pacific Medical',
    location: '2333 Buchanan St, San Francisco',
    date: '2026-02-05',
    time: '9:00 AM - 3:00 PM',
    bloodTypesNeeded: ['AB-', 'B-', 'A-'],
    currentUnits: 8,
    goalUnits: 30,
    urgency: 'high',
    distance: 1.9,
    description: 'Special drive for rare blood types. Your unique blood can make a difference.',
  },
];

export const fetchDrives = async (): Promise<DonationDrive[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(drivesMockData), 500);
  });
};

export const fetchDriveById = async (id: string): Promise<DonationDrive | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(drivesMockData.find(d => d.id === id)), 300);
  });
};

export const registerForDrive = async (driveId: string, donorId: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 500);
  });
};
