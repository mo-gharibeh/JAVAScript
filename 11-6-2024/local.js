
function saveForm() {

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const major = document.getElementById('major').value;
    const siblingsNumber = document.getElementById('sNumber').value;
    const siblingsDescription = document.getElementById('sDescription').value;

    const pl = [];
    if (document.getElementById('html').checked) pl.push('HTML');
    if (document.getElementById('css').checked) pl.push('CSS');
    if (document.getElementById('js').checked) pl.push('JS');

    const formData = {
        name,
        age,
        gender,
        birthdate,
        description,
        major,
        pl,
        sNumber,
        sDescription
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);

}