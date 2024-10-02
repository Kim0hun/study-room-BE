import { SPlannerDto } from './planner.dto';

export class RoomAndMyInfo {
  title: string;
  notice: string;
  password: string;
  isChat: boolean;
  roomManager: string;
  currentMember: string[];
  planner: SPlannerDto[];
  totalTime: number;
}
