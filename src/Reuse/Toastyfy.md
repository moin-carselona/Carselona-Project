     console.log('payload ========', payload)
        if (!SelectedEmail.includes(".com") && !SelectedEmail.includes("@") && !SelectedEmail.includes("gmail")) {
            toast.error("Email should be like : example@gmail.com")
        }
        if (SelectedPhone.length != 10) {
            toast.error("Phone Number is Incorrect")
        }
        if (SelectedSocietyName && SelectedPhone && SelectedEmail && address && SelectedCityID && SelectedAreaID && SelectedClickUpID && SelectedPackageID && latitude && Longitude && SelectedEmail.includes(".com") && SelectedEmail.includes("@") && SelectedEmail.includes("gmail")) {
            // console.log("entered")
       
            if (SelectedPackageID >= 0 && SelectedCityID >= 0 && SelectedClickUpID >= 0 && SelectedAreaID >= 0) {
                console.log("entered")
                const response: any = await AddNewSocietyPostRequest(localKeyCheck, payload)
                if (response?.data?.msg == "Email already register.") {
                    toast.error("Email already register")
                }
                if (response?.data?.data) {
                    toast.success("society Register Successfull")
                    console.log('society post request', response?.data?.data);
                }
            }
            else {
                toast.error("Id is missing")
            }
        }