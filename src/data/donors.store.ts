export interface Donor {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodType: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  location: string;
  lastDonation: string;
  totalDonations: number;
  reliabilityScore: number;
  status: 'eligible' | 'pending' | 'ineligible' | 'active';
  avatar?: string;
  joinedDate: string;
}

export const donorsInitialState: Donor[] = [];

export const donorsMockData: Donor[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah.m@email.com',
    phone: '+1 (555) 123-4567',
    bloodType: 'O-',
    location: 'San Francisco, CA',
    lastDonation: '2025-12-15',
    totalDonations: 12,
    reliabilityScore: 98,
    status: 'eligible',
    joinedDate: '2023-03-15',
  },
  {
    id: '2',
    name: 'James Wilson',
    email: 'j.wilson@email.com',
    phone: '+1 (555) 234-5678',
    bloodType: 'A+',
    location: 'Oakland, CA',
    lastDonation: '2025-11-20',
    totalDonations: 8,
    reliabilityScore: 95,
    status: 'eligible',
    joinedDate: '2023-06-22',
  },
  {
    id: '3',
    name: 'Emily Chen',
    email: 'e.chen@email.com',
    phone: '+1 (555) 345-6789',
    bloodType: 'B+',
    location: 'San Jose, CA',
    lastDonation: '2026-01-02',
    totalDonations: 15,
    reliabilityScore: 99,
    status: 'active',
    joinedDate: '2022-11-08',
  },
  {
    id: '4',
    name: 'Michael Brown',
    email: 'm.brown@email.com',
    phone: '+1 (555) 456-7890',
    bloodType: 'AB+',
    location: 'Palo Alto, CA',
    lastDonation: '2025-10-05',
    totalDonations: 5,
    reliabilityScore: 82,
    status: 'pending',
    joinedDate: '2024-02-14',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    email: 'l.anderson@email.com',
    phone: '+1 (555) 567-8901',
    bloodType: 'O+',
    location: 'Berkeley, CA',
    lastDonation: '2025-09-18',
    totalDonations: 20,
    reliabilityScore: 100,
    status: 'eligible',
    joinedDate: '2021-07-30',
  },
  {
    id: '6',
    name: 'David Kim',
    email: 'd.kim@email.com',
    phone: '+1 (555) 678-9012',
    bloodType: 'A-',
    location: 'Fremont, CA',
    lastDonation: '2025-08-22',
    totalDonations: 3,
    reliabilityScore: 75,
    status: 'ineligible',
    joinedDate: '2024-09-01',
  },
  {
    id: '7',
    name: 'Rachel Green',
    email: 'r.green@email.com',
    phone: '+1 (555) 789-0123',
    bloodType: 'B-',
    location: 'Mountain View, CA',
    lastDonation: '2025-12-28',
    totalDonations: 7,
    reliabilityScore: 91,
    status: 'eligible',
    joinedDate: '2023-12-05',
  },
  {
    id: '8',
    name: 'Thomas Lee',
    email: 't.lee@email.com',
    phone: '+1 (555) 890-1234',
    bloodType: 'AB-',
    location: 'Sunnyvale, CA',
    lastDonation: '2026-01-10',
    totalDonations: 11,
    reliabilityScore: 94,
    status: 'active',
    joinedDate: '2022-08-19',
  },
];

export const fetchDonors = async (): Promise<Donor[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(donorsMockData), 500);
  });
};

export const fetchDonorById = async (id: string): Promise<Donor | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(donorsMockData.find(d => d.id === id)), 300);
  });
};

export const updateDonor = async (id: string, data: Partial<Donor>): Promise<Donor> => {
  return new Promise((resolve) => {
    const donor = donorsMockData.find(d => d.id === id);
    if (donor) {
      Object.assign(donor, data);
      resolve(donor);
    }
  });
};
