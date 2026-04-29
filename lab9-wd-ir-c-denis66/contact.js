document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("name").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 4) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return;
		 }

		const phone = document.getElementById("tel").value.trim();
		const phonePattern = /^[0-9+]{10,15}$/;

		if (!phonePattern.test(phone)) {
			alert("The phone number must be... a phone number");
			e.preventDefault();
			return;
		}

         const dobValue = document.getElementById("dob").value;
         const dobDate = new Date(dobValue);
         const today = new Date();

        let calculatedAge = today.getFullYear() - dobDate.getFullYear();
         const monthDiff = today.getMonth() - dobDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        calculatedAge--;
        }

        if (calculatedAge < 18 || calculatedAge > 60) {
        alert("You must be at least 18 years old.");
        e.preventDefault();
        return;
        }

        const age=document.getElementById("age").value.trim();
        if(age < 18 || age > 60){
            alert("You are not of a reasonable age");
			e.preventDefault();
			return;
        }

        const url=document.getElementById("url").value.trim();
        const urlPattern = /^https:\/\/[^\s]+$/;
        if(!urlPattern.test(url)){
            alert("Input a valid url");
            e.preventDefault();
            return;
        }

        const fileInput= document.getElementById("fileUpload");
        const filePath = fileInput.value;
        const allowedExtensions = /(\.pdf|\.docx)$/i;
        if (fileInput.files.length > 0) {
        const fileSize = fileInput.files[0].size / 1024 / 1024;
        if (fileSize > 2) {
            alert("File size exceeds 2 MB. Please upload a smaller file.");
            e.preventDefault();
            return;
        }   

        if(!allowedExtensions.exec(filePath)){
            alert("please input a .pdf or .docx file.")
            e.preventDefault();
            return;
        }
    }
		
});