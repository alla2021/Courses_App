//https://www.postman.com/aninix/workspace/genesis-front-end-school/overview

const URL='https://api.wisey.app/api/v1/'
const coursesURL="core/preview-courses/";
const TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDExMmQ1Zi1mYzQyLTQ1NGQtODYxMi0yMjdlNzE0ZDYxZDgiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MzQzNDgsImV4cCI6MTY3OTYzNDM0OH0.W27uaI6VYhfXaJ9Wp9n1H4YqkqkqL9Kct5vzKO6s3gs'
const getToken = async () => {
    try {
        const res = await fetch("auth/anonymous?platform=subscriptions");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
export async function getCoursesData() {
    try {
        const response = await fetch(URL+coursesURL, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
export async function getCourseById(id: string | undefined) {
    try {
        const response = await fetch(URL + coursesURL + id, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}