function calculateAge() {
    const currentDate = new Date(document.getElementById("currentDate").value);
    const birthDate = new Date(document.getElementById("birthDate").value);

    // Ensure valid dates are entered
    if (isNaN(currentDate) || isNaN(birthDate)) {
        document.getElementById("result").innerHTML = "Please enter valid dates.";
        return;
    }

    // Get the year, month, and day components
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-11
    const currentDay = currentDate.getDate();
    
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay = birthDate.getDate();

    // Calculate year difference
    let year = currentYear - birthYear;

    // Adjust year if the birth month/day hasn't happened yet
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        year--;
    }

    // Calculate month difference
    let months;
    if (currentDay < birthDay) {
        months = (currentMonth - birthMonth - 1 + 12) % 12;
    } else {
        months = (currentMonth - birthMonth + 12) % 12;
    }

    // Calculate day difference
    let days;
    if (currentDay >= birthDay) {
        days = currentDay - birthDay;
    } else {
        // Handle crossing month boundaries
        let previousMonth = new Date(currentYear, currentMonth - 1, 0); // Last day of the previous month
        days = previousMonth.getDate() - birthDay + currentDay;
    }

    // Display result
    document.getElementById("result").innerHTML = `Age: ${year} years, ${months} months, and ${days} days.`;
}

function resetForm() {
    // Clear input fields
    document.getElementById("currentDate").value = "";
    document.getElementById("birthDate").value = "";
    
    // Clear the result display
    document.getElementById("result").innerHTML = "";
}
