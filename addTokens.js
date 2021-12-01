async function getName(authToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();

    return data.name
};

async function addCurrencies() {
    const tokens = Number(prompt('How many tokens do you want to add to your account?'));
    const myToken = localStorage.token.split('JWT ')[1];

    const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
        method: "PUT",
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            addedTokens: tokens,
            addedXp: 30000,
            name: await getName(myToken)
        })
    });

    if (response.status == 2000) {
        alert(`${tokens} tokens and 3000 XP added to your account!`);

};

addCurrencies();
