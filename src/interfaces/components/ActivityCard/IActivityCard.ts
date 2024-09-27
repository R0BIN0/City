export type IActivityCard = {
  guided: boolean;
  price: number;
  title: string;
  time: {
    day: number;
    night: number;
  };
  background: string;
  animation: {
    rotate: number;
    rotateEnd: number;
    yEnd: number;
  };
};
