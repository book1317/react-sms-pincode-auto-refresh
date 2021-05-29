export const getNewNumber = async (params) => {
    const { apikey, app, country } = params;
    return new Promise((resolve, reject) => {
        fetch(
            `http://api.smspincode.com/user/api/get_number.php?customer=${apikey}&app=${app}&country=${country}`
        ).then(async (res) => {
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                if (result) {
                    resolve(res);
                }
            }
            reject(res);
        });
    });
};

export const getAllNumber = async (params) => {
    const { apikey } = params;
    return new Promise((resolve, reject) => {
        fetch(`http://api.smspincode.com/user/api/get_history.php?customer=${apikey}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    resolve(result);
                },
                (error) => {
                    console.log(error);
                    reject(error);
                }
            );
    });
};

export const getMessage = async (params, number) => {
    const { apikey, app, country } = params;
    return new Promise((resolve, reject) => {
        fetch(
            `http://api.smspincode.com/user/api/get_sms.php?customer=${apikey}&number=${number}&app=${app}&country=${country}`
        ).then(async (res) => {
            if (res.ok) {
                const result = await res.json();
                if (result) {
                    console.log(result);
                    resolve(result);
                }
            }
            reject(res);
        });
    });
};

export const getMoney = async (params, number) => {
    const { apikey } = params;
    return new Promise((resolve, reject) => {
        fetch(`https://api.smspincode.com/user/api/get_balance.php?customer=${apikey}`).then(async (res) => {
            if (res.ok) {
                const result = await res.json();
                if (result) {
                    resolve(result.balance);
                }
                resolve();
            }
            reject(res);
        });
    });
};
