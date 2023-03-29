import {ILesson} from "./ILesson";

export interface ICourseDetails {
    id: string;
    title: string;
    tags: string[];
    launchDate: string;
    status: string;
    description: string;
    duration: number;
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
    lessons: ILesson[];
    containsLockedLessons: boolean;
};





