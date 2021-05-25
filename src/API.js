export const getNewNumber = async (params) => {
    const { apikey, app, country } = params;
    return new Promise((resolve, reject) => {
        fetch(
            `http://api.smspincode.com/user/api/get_number.php?customer=${apikey}&app=${app}&country=${country}`
        ).then(async (res) => {
            console.log(res);
            if (res.ok) {
                console.log('this');
                const result = await res.json();
                console.log(result);
                if (result) {
                    resolve(res);
                }
            }
            console.log('this');
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
                    console.log(result);
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
            console.log(res);
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                resolve(result);
            }
            reject(res);
        });
    });
};