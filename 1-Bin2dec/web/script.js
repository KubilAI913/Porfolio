function convert() {
    try {
        const binInput = document.getElementById("bin_input").value;

// binary olup olmadığını kontrol ediyoruz
        if (!/^[0-1]+$/.test(binInput) || binInput.length > 8) {
            throw new Error("Enter a valid binary number");
        }
// binary sayıyı deciminal sayıya çevirip yazdırıyoruz
        const deciminalResult = binToDec(binInput);
        document.getElementById("result").innerHTML = `Deciminal eqivalent: ${deciminalResult}`;
        document.getElementById("error").innerHTML = ""; // hata mesajını sıfırlıyoruz
    
    } catch (error) {
        document.getElementById("result").innerHTML = "";
        document.getElementById("error").innerHTML = error.message;
    }
}

function binToDec(binStr) {
    let decValue = 0;
    const binLength = binStr.length;

    for (let i = 0; i < binLength; i++) {
        decValue += parseInt(binStr[i]) * Math.pow(2, binLength - i - 1);
    }
    return decValue;
}