export interface IAction {
  type: string;
  payload?: any;
}

export interface IDoctor {
  id: number;
  name: string;
  speciality: string;
  clients?: IClient[];
}

export interface IClient {
  firstName: string;
  lastName: string;
  date: string;
  time: string;
}
