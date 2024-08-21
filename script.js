function checkKhodam() {
    const name = document.getElementById('name').value;
    const khodam = getKhodam(name);
    document.getElementById('result').innerText = `Nama Khodam Anda: ${khodam}`;
}

function getKhodam(name) {
    const khodams = ['biawak beranak', 'gajah duduk', 'kura kura ninja', 'gendoruwo'];
    const index = name.length % khodams.length;
    return khodams[index];
}
