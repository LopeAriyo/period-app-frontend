const baseURL = "http://localhost:3001/";
const signInURL = baseURL + "signin";
const validateURL = baseURL + "validate";
// const profileURL = baseURL + 'profile'

//API Functions

const get = url => {
    return fetch(url, {
        headers: {
            Authorization: localStorage.token
        }
    }).then(response => response.json());
};

const post = (url, configObj) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(configObj)
    }).then(response => response.json());
};

const signIn = (email, password) => {
    return post(signInURL, { email, password });
};

const validate = () => get(validateURL);

// const getProfile = () => get(profileURL)

export default { signIn, validate };

// export default { signIn, signUp, validate, getProfile };
