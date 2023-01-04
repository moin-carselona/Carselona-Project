export const LocalBaseURL = () => {

    const localKey = JSON.parse(localStorage.getItem("ischecked") || "0")
    if (localKey) {
        localStorage.setItem("API", JSON.stringify(true))
    } else {
        if (window.location.origin.includes("3011")) {
            localStorage.setItem("API", JSON.stringify(false))
            const stats = JSON.parse(localStorage.getItem("API") || "0")
        }
        else {
            localStorage.setItem("API", JSON.stringify(true))
            const stats = JSON.parse(localStorage.getItem("API") || "0")
            console.log('true', stats);
        }
    }

}