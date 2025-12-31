export interface Student {
    id: string,
    name: {
        ar: string,
        en: string
    },
    grade: string,
    section: string,
    points: number,
    studentImage: string | null
}
export interface School {
    image: string
    name: {
        en: string
        ar: string
    }
}
export type Language = "en" | "ar";

export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}


export interface LanguageProviderProps {
    children: React.ReactNode;
}

export type GetLeaderboardDataQuery = {
    studentsLeaderboard: {
        __typename: "LeaderboardData";
        students: Student[];
        school: School;
    };
};

export type LanguageData = {
    code: "en" | "ar";
    name: string;
    flag: string;
}