import {LessonStatus} from "./enums/lesson-status.enum";

export interface ILesson {
    id: string;
    title: string;
    duration: number;
    order: number;
    type: string;
    status: LessonStatus.Locked | LessonStatus.Unlocked;
    link: string;
    previewImageLink: string;
};
