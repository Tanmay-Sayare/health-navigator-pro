export interface BloodRequest {
  id: string;
  hospital: string;
  bloodType: string;
  unitsNeeded: number;
  unitsCollected: number;
  urgency: 'critical' | 'high' | 'moderate' | 'routine';
  status: 'pending' | 'matching' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
  deadline: string;
  matchedDonors: number;
  confirmedDonors: number;
  contactPerson: string;
  contactPhone: string;
  notes?: string;
}

export const requestsInitialState: BloodRequest[] = [];

export const requestsMockData: BloodRequest[] = [
  {
    id: 'REQ-001',
    hospital: 'SF General Hospital',
    bloodType: 'O-',
    unitsNeeded: 10,
    unitsCollected: 3,
    urgency: 'critical',
    status: 'in-progress',
    createdAt: '2026-01-15T08:30:00Z',
    deadline: '2026-01-16T08:30:00Z',
    matchedDonors: 8,
    confirmedDonors: 4,
    contactPerson: 'Dr. Amanda Foster',
    contactPhone: '+1 (555) 111-2222',
    notes: 'Emergency surgery scheduled. Universal donor blood required.',
  },
  {
    id: 'REQ-002',
    hospital: 'Stanford Medical Center',
    bloodType: 'A+',
    unitsNeeded: 15,
    unitsCollected: 12,
    urgency: 'moderate',
    status: 'in-progress',
    createdAt: '2026-01-14T10:00:00Z',
    deadline: '2026-01-18T10:00:00Z',
    matchedDonors: 20,
    confirmedDonors: 15,
    contactPerson: 'Dr. Robert Chen',
    contactPhone: '+1 (555) 222-3333',
  },
  {
    id: 'REQ-003',
    hospital: 'UCSF Medical Center',
    bloodType: 'B+',
    unitsNeeded: 8,
    unitsCollected: 0,
    urgency: 'high',
    status: 'matching',
    createdAt: '2026-01-16T06:00:00Z',
    deadline: '2026-01-17T18:00:00Z',
    matchedDonors: 5,
    confirmedDonors: 0,
    contactPerson: 'Dr. Sarah Williams',
    contactPhone: '+1 (555) 333-4444',
    notes: 'Platelet transfusion needed for cancer patient.',
  },
  {
    id: 'REQ-004',
    hospital: 'Kaiser Permanente',
    bloodType: 'AB+',
    unitsNeeded: 5,
    unitsCollected: 5,
    urgency: 'routine',
    status: 'completed',
    createdAt: '2026-01-10T14:00:00Z',
    deadline: '2026-01-15T14:00:00Z',
    matchedDonors: 8,
    confirmedDonors: 6,
    contactPerson: 'Dr. Michael Park',
    contactPhone: '+1 (555) 444-5555',
  },
  {
    id: 'REQ-005',
    hospital: 'California Pacific Medical',
    bloodType: 'O+',
    unitsNeeded: 20,
    unitsCollected: 8,
    urgency: 'high',
    status: 'in-progress',
    createdAt: '2026-01-15T12:00:00Z',
    deadline: '2026-01-19T12:00:00Z',
    matchedDonors: 25,
    confirmedDonors: 12,
    contactPerson: 'Dr. Jennifer Lee',
    contactPhone: '+1 (555) 555-6666',
  },
  {
    id: 'REQ-006',
    hospital: 'Zuckerberg SF General',
    bloodType: 'A-',
    unitsNeeded: 6,
    unitsCollected: 2,
    urgency: 'critical',
    status: 'pending',
    createdAt: '2026-01-16T09:00:00Z',
    deadline: '2026-01-17T09:00:00Z',
    matchedDonors: 3,
    confirmedDonors: 2,
    contactPerson: 'Dr. David Kim',
    contactPhone: '+1 (555) 666-7777',
    notes: 'Accident victim - multiple surgeries scheduled.',
  },
];

export const fetchRequests = async (): Promise<BloodRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(requestsMockData), 500);
  });
};

export const fetchRequestById = async (id: string): Promise<BloodRequest | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(requestsMockData.find(r => r.id === id)), 300);
  });
};

export const createRequest = async (data: Omit<BloodRequest, 'id' | 'createdAt'>): Promise<BloodRequest> => {
  return new Promise((resolve) => {
    const newRequest: BloodRequest = {
      ...data,
      id: `REQ-${String(requestsMockData.length + 1).padStart(3, '0')}`,
      createdAt: new Date().toISOString(),
    };
    setTimeout(() => resolve(newRequest), 500);
  });
};

export const updateRequestStatus = async (id: string, status: BloodRequest['status']): Promise<BloodRequest | undefined> => {
  return new Promise((resolve) => {
    const request = requestsMockData.find(r => r.id === id);
    if (request) {
      request.status = status;
      resolve(request);
    }
    resolve(undefined);
  });
};
