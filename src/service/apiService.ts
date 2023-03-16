const URL=`https://api.wisey.app/api/v1/`;
const URL_TOKEN=`auth/anonymous?platform=subscriptions`;
const coursesURL="core/preview-courses/";

export async function fetchToken() {
    let TOKEN = null;
    try {
        const res = await fetch(
            URL+URL_TOKEN,
        );
        TOKEN = await res.json() as any;
        return TOKEN.token;
    } catch (error) {
        console.error(error);
    }
}

export async function getCoursesData() {
    let TOKEN = await fetchToken();
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
    let TOKEN = await fetchToken();
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