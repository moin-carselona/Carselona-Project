


export const LocalBaseURL = () => {
    // localStorage.setItem("ischecked", JSON.stringify(!localKey))
    // const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "")


    const localKey =JSON.parse(localStorage.getItem("ischecked") || "0") ? JSON.parse(localStorage.getItem("ischecked") || "0") : false
    // console.log("main url ", window.location.origin)
    if (localKey) {
        localStorage.setItem("API", JSON.stringify(true))

    } else {
        if (window.location.origin.includes("3011")) {
            // console.log('window.location.origin', window.location.origin);
            localStorage.setItem("API", JSON.stringify(false))
            const stats = JSON.parse(localStorage.getItem("API") || "0")
            console.log('false', stats);
        }
        else {
            localStorage.setItem("API", JSON.stringify(true))
            // console.log('window.location.origin', window.location.origin);
            const stats = JSON.parse(localStorage.getItem("API") || "0")
            console.log('true', stats);
        }
    }



    // if (window.location.origin.includes("3011")) {
    //     console.log('window.location.origin', window.location.origin);
    //     localStorage.setItem("API", JSON.stringify(false))
    //     const stats = JSON.parse(localStorage.getItem("API") || "")
    //     console.log('false', stats);
    //   }
    //   else {
    //     localStorage.setItem("API", JSON.stringify(true))
    //     console.log('window.location.origin', window.location.origin);
    //     const stats = JSON.parse(localStorage.getItem("API") || "")
    //     console.log('true', stats);
    //   }
}