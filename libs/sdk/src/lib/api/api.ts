export enum CowType {
  systemHealth,
  distress,
  systemHeat,
  changeGroup,
  calving,
  herdEntry,
  birth,
  breeding,
  dryOff
}

export class Cow {
  cowId: number;
  healthIndex?: number;
  heatIndexPeak?: string;
  endDate?: number;
  minValueDateTime?: number;
  type: CowType;
  animalId: string;
  eventId?: number;
  deletable?: boolean;
  lactationNumber?: number;
  daysInLactation?: number;
  ageInDays?: number;
  startDateTime?: number;
  reportingDateTime?: number;
  destinationGroup?: number;
  destinationGroupName?: string;
  alertType?: string;
  newGroupId?: number;
  newGroupName?: string;
  duration?: number;
  originalStartDateTime?: number;
  currentGroupId?: number;
  currentGroupName?: string;
  endDateTime?: number;
  daysInPregnancy?: number;
  cowEntryStatus?: string;
  sire?: null;
  breedingNumber?: number;
  isOutOfBreedingWindow?: boolean;
  interval?: number;
  birthDateCalculated?: boolean;
  calvingEase?: null;
  oldLactationNumber?: number;
  newborns?: null;
}

export class CowEntity extends Cow {
  id: number;
}

export class CowsRespond {
  offset: number;
  limit: number;
  total: number;
  result: Cow[];
}

export const CowTypeDictionary = {
  [CowType.dryOff]: 'dryOff',
  [CowType.systemHealth]: 'systemHealth',
  [CowType.distress]: 'distress',
  [CowType.systemHeat]: 'systemHeat',
  [CowType.changeGroup]: 'changeGroup',
  [CowType.calving]: 'calving',
  [CowType.herdEntry]: 'herdEntry',
  [CowType.birth]: 'birth',
  [CowType.breeding]: 'breeding'
};

export const HeaderTitles = {
  '': '',
  cowId: 'cowId',
  healthIndex: 'healthIndex',
  heatIndexPeak: 'heatIndexPeak',
  endDate: 'endDate',
  minValueDateTime: 'minValueDateTime',
  type: 'Type',
  animalId: 'animalId',
  eventId: 'eventId',
  deletable: 'deletable',
  lactationNumber: 'lactationNumber',
  daysInLactation: 'daysInLactation',
  ageInDays: 'ageInDays',
  startDateTime: 'startDateTime',
  reportingDateTime: 'reportingDateTime',
  destinationGroup: 'destinationGroup',
  destinationGroupName: 'destinationGroupName',
  alertType: 'alertType',
  newGroupId: 'newGroupId',
  newGroupName: 'newGroupName',
  duration: 'duration',
  originalStartDateTime: 'originalStartDateTime',
  currentGroupId: 'currentGroupId',
  currentGroupName: 'currentGroupName',
  endDateTime: 'endDateTime',
  daysInPregnancy: 'daysInPregnancy',
  cowEntryStatus: 'cowEntryStatus',
  sire: 'sire',
  breedingNumber: 'breedingNumber',
  isOutOfBreedingWindow: 'isOutOfBreedingWindow',
  interval: 'interval',
  birthDateCalculated: 'birthDateCalculated',
  calvingEase: 'calvingEase',
  oldLactationNumber: 'oldLactationNumber',
  newborns: 'newborns'
};

export const EmptyCowEntity = {
  cowId: null,
  healthIndex: null,
  heatIndexPeak: null,
  endDate: null,
  minValueDateTime: null,
  type: null,
  animalId: null,
  eventId: null,
  deletable: null,
  lactationNumber: null,
  daysInLactation: null,
  ageInDays: null,
  startDateTime: null,
  reportingDateTime: null,
  destinationGroup: null,
  destinationGroupName: null,
  alertType: null,
  newGroupId: null,
  newGroupName: null,
  duration: null,
  originalStartDateTime: null,
  currentGroupId: null,
  currentGroupName: null,
  endDateTime: null,
  daysInPregnancy: null,
  cowEntryStatus: null,
  sire: null,
  breedingNumber: null,
  isOutOfBreedingWindow: null,
  interval: null,
  birthDateCalculated: null,
  calvingEase: null,
  oldLactationNumber: null,
  newborns: null,
};
