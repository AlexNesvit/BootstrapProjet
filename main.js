

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Mes variables direct dans ma function

        function validateForm() {
            const username = document.getElementById('username').value;
            const name = document.getElementById('name').value;
            const firstName = document.getElementById('firstName').value;
            const dob = document.getElementById('dob').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const gender = document.querySelector('input[name="gender"]:checked');

            if (!username || !name || !firstName || !dob || !email || !password || !confirmPassword || !gender) {
                alert('Veuillez remplir tous les champs svp.');
                return false;
            }

            if (password !== confirmPassword) {
                alert('Les mots de passe ne correspondent pas.');
                return false;
            }

            if (!emailRegex.test(email)) {
                alert('Adresse e-mail invalable.');
                return false;
            }

            return true;
        }