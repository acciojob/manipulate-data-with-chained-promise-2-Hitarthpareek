const ele = document.getElementById("output");

async function getNumbers() {
    return [1, 2, 3, 4];
}

const transform1 = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredData = data.filter(item => item % 2 === 0);
            ele.textContent = filteredData.join(",");
            resolve(filteredData);
        }, 1000); // 1 second
    });
};

const transform2 = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const transformedData = data.map(item => item * 2);
            ele.textContent = transformedData.join(",");
            resolve(transformedData);
        }, 2000); // +2 seconds (total 3s)
    });
};

async function start() {
    const nums = await getNumbers();
    const nums1 = await transform1(nums); // after 1s → 2,4
    await transform2(nums1);              // after 3s → 4,8
}

start()
