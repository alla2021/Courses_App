export interface ICourse {
    id: string;
    title: string;
    tags: string[];
    launchDate: string;
    status: "launched" | "archived";
    description: string;
    duration: number;
    lessonsCount: number;
    containsLockedLessons: boolean;
    previewImageLink: string;
    rating: number;
    meta: {
        slug: string;
        skills: string[];
        courseVideoPreview: {
            link: string;
            duration: number;
            previewImageLink: string;
        };
    };
}


// export interface ILesson {
//     id: string;
//     title: string;
//     duration: number;
//     order: number;
//     type: 'video' | 'text';
//     status: 'locked' | 'unlocked';
//     link?: string;
//     previewImageLink: string;
//     meta?: Record<string, any> | null;
// }