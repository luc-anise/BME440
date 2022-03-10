import { Timestamp } from '@angular/fire/firestore';
import { CasePossibility } from './Case';
export interface Attempt {
  id?: string;
  caseID?: string;
  userID?: string;
  startTime?: Timestamp;
  endTime?: Timestamp;
  selectedCasePossibilities?: CasePossibility[];
  score?: number;
  totalPoints?: number;
}
