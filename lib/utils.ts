import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const calculateTimeRemaining = (targetHour:number) => {
  const currentTime = new Date();
  let targetTime = new Date();

  if (currentTime.getHours() >= targetHour) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  targetTime.setHours(targetHour, 0, 0, 0);

  const timeDiff = Number(targetTime) - Number(currentTime);

  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return `${hours}:${minutes}:${seconds}`;
};
