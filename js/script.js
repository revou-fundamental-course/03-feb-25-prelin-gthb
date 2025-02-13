// Menunggu sampai seluruh konten halaman telah dimuat sebelum menjalankan script
// Ini memastikan elemen-elemen HTML sudah tersedia sebelum JavaScript mengaksesnya
document.addEventListener("DOMContentLoaded", () => {
    // Mengambil elemen input, tombol, dan label yang akan digunakan
    const inputField = document.getElementById("inputTemp");
    const outputField = document.getElementById("outputTemp");
    const convertBtn = document.getElementById("convert");
    const resetBtn = document.getElementById("reset");
    const reverseBtn = document.getElementById("reverse");
    const formulaBox = document.getElementById("formula");
    const leftLabel = document.getElementById("leftLabel");
    const rightLabel = document.getElementById("rightLabel");
    const leftUnit = document.getElementById("leftUnit");
    const rightUnit = document.getElementById("rightUnit");

    let isCelsius = true; // Variabel untuk menentukan apakah konversi dilakukan dari Celsius ke Fahrenheit atau sebaliknya

    function convertTemperature() {
        let inputValue = inputField.value.trim(); // Mengambil nilai input dan menghapus spasi kosong di awal/akhir
        const errorMessage = document.getElementById("error-message");
    
        // Validasi input: jika kosong atau bukan angka, tampilkan pesan error
        if (inputValue === "" || isNaN(inputValue)) {
            errorMessage.textContent = "⚠ Please enter a valid temperature!";
            errorMessage.style.visibility = "visible";
            return;
        } else {
            errorMessage.style.visibility = "hidden";
        }
    
        let temperature = parseFloat(inputValue); // Mengubah input menjadi angka
        let convertedTemp = 0;
        let formula = "";
    
        // Konversi suhu sesuai dengan satuan yang dipilih
        if (isCelsius) {
            convertedTemp = (temperature * 9/5) + 32;
            formula = `${temperature}°C × 9/5 + 32 = ${convertedTemp.toFixed(2)}°F`;
        } else {
            convertedTemp = (temperature - 32) * 5/9;
            formula = `${temperature}°F - 32 × 5/9 = ${convertedTemp.toFixed(2)}°C`;
        }
    
        outputField.value = convertedTemp.toFixed(2); // Menampilkan hasil konversi di output field
        
        // Menampilkan rumus perhitungan pada layar
        formulaBox.innerHTML = formula;
        formulaBox.style.color = "black";
        formulaBox.style.fontStyle = "normal"; 
    }
    
    function resetFields() {
        inputField.value = "";
        outputField.value = "";
        
        // Mengembalikan teks formula ke default
        formulaBox.innerHTML = "Calculation will be shown here";
        formulaBox.style.color = "#ccc";  
        formulaBox.style.fontStyle = "italic"; 
        
        document.getElementById("error-message").style.visibility = "hidden"; // Menyembunyikan pesan error
    }
    
    function reverseConversion() {
        isCelsius = !isCelsius; // Menukar satuan suhu (Celsius ↔ Fahrenheit)
        resetFields(); // Reset input dan output
        
        // Mengubah label dan placeholder sesuai dengan satuan yang dipilih
        if (isCelsius) {
            leftLabel.textContent = "Celsius";
            rightLabel.textContent = "Fahrenheit";
            leftUnit.textContent = "C";
            rightUnit.textContent = "F";
            inputField.placeholder = "Enter temperature value";
        } else {
            leftLabel.textContent = "Fahrenheit";
            rightLabel.textContent = "Celsius";
            leftUnit.textContent = "F";
            rightUnit.textContent = "C";
            inputField.placeholder = "Enter temperature value";
        }
    }

    // Menambahkan event listener ke tombol
    convertBtn.addEventListener("click", convertTemperature); // Saat tombol Convert diklik
    resetBtn.addEventListener("click", resetFields); // Saat tombol Reset diklik
    reverseBtn.addEventListener("click", reverseConversion); // Saat tombol Reverse diklik
});