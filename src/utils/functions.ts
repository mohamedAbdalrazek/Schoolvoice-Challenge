import type { Student } from "./types";

export const sortByPoints = (students: Student[]) => {
    return [...students].sort((a, b) => b.points - a.points);
};
export function getInitials(name: string) {
    return name
        .split(" ")
        .slice(0, 2)
        .map(word => word[0].toUpperCase())
        .join("");
}