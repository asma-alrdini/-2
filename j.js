const banks = [
    { samaCode: '55', nameEn: 'Banque Saudi Fransi', nameAr: 'البنك السعودي الفرنسي' },
    { samaCode: '80', nameEn: 'Alrajhi Bank', nameAr: 'بنك الراجحي' },
    { samaCode: '10', nameEn: 'National Commercial Bank', nameAr: 'البنك الأهلي التجاري' },
    { samaCode: '45', nameEn: 'SABB', nameAr: 'ساب' },
    { samaCode: '20', nameEn: 'Riyad Bank', nameAr: 'بنك الرياض' },
    { samaCode: '40', nameEn: 'SAMBA', nameAr: 'سامبا' },
    { samaCode: '05', nameEn: 'AL Inma Bank', nameAr: 'بنك الانماء' },
    { samaCode: '50', nameEn: 'AlAwwal Bank', nameAr: 'البنك الأول' },
    { samaCode: '60', nameEn: 'Bank Aljazerah', nameAr: 'بنك الجزيرة' },
    { samaCode: '65', nameEn: 'Saudi Investment Bank', nameAr: 'البنك السعودي للاستثمار' },
    { samaCode: '15', nameEn: 'BANK ALBELAD', nameAr: 'بنك البلاد' },
    { samaCode: '30', nameEn: 'Arab National Bank', nameAr: 'البنك العربي الوطني' },
    { samaCode: '90', nameEn: 'Gulf International Bank', nameAr: 'بنك الخليج' },
    { samaCode: '95', nameEn: 'EMARITE BANK', nameAr: 'بنك الامارات' },
    { samaCode: '76', nameEn: 'Bank Muscat', nameAr: 'بنك مسقط' },
    { samaCode: '71', nameEn: 'National Bank Of Bahrain', nameAr: 'بنك البحرين الوطني' },
    { samaCode: '75', nameEn: 'National Bank of Kuwait', nameAr: 'بنك الكويت الوطني' },
    { samaCode: '85', nameEn: 'BNP PARIBAS SAUDI ARABIA', nameAr: 'بي ان بي باريبوس' },
];

function CheckIban(iban) {
    if (!iban) return false;

    iban = iban.replace(/\s+/g, '');
    if (iban.length !== 24) return false;
    if (!iban.startsWith("SA")) return false;

    return true;
}

function GetIban() {
    const iban = document.getElementById("iban").value;
    const result = document.getElementById("result");
    const bankNameElement = document.getElementById("bank");
    const samaCodeElement = document.getElementById("bank1");

    if (!CheckIban(iban)) {
        result.textContent = "Invalid IBAN";
        result.className = "text-danger text-center";
        bankNameElement.textContent = '';
        samaCodeElement.textContent = '';
    } else {
        result.textContent = "Valid IBAN";
        result.className = "text-success text-center";

        const samacode = iban.substring(4, 6);
        const bank = banks.find(e => e.samaCode === samacode);

        if (bank) {
            bankNameElement.textContent = bank.nameEn;
            samaCodeElement.textContent = samacode;
        } else {
            bankNameElement.textContent = "Bank not found";
            samaCodeElement.textContent = samacode;
        }
    }
}