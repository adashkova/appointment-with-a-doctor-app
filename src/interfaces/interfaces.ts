export interface IAction {
  type: string;
  payload?: any;
}

export interface IDoctor {
  id: number;
  avatar: string,
  name: string;
  speciality: string;
  clients?: IClient[];
}

export interface IClient {
  firstName: string;
  lastName: string;
  date: string ;
  time: string;
}
