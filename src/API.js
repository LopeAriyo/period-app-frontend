const baseURL = "http://localhost:3001/";
const signInURL = baseURL + "signin";

//API Functions

const get = url => {
    return fetch(url).then(response => response.json());
};


//WARNING
//! unable to make post request to localhost:3001 due to authenticity token
//! CORS is not enabled in backend

const post = (url, configObj) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            // ,Accept: "application/json"
        },
        body: JSON.stringify(configObj)
    }).then(response => response.json());
};

const signIn = (email, password) => {
    post(signInURL, { email, password });
};

export default { signIn };
