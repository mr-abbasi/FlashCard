export type IFlash = {
  question: string;
  answer: string;
  show: boolean;
  id: number;
  remembered?: 'coorect' | 'incorrect';
}
