//your JS code here. If required.
const ele = document.getElementById("output")

async function getNumbers() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    return [1, 2, 3, 4];
}

const transform1 = (data)=>{
	let filteredData = []
	return new Promise((resolve)=>{
		setTimeout(()=>{
		 filteredData = data.filter(item=> item%2===0)
		 resolve(filteredData)
		},1000)
	})
}

const transform2 = (data)=>{
	let filteredData = []
		return new Promise((resolve)=>{
		  setTimeout(()=>{
			filteredData = data.map(item=> item*2)
			resolve(filteredData)
		},2000)
})
}

async function start(){
	const nums = await getNumbers();
	const nums1 = await transform1(nums);
	ele.textContent = nums1.join(", ");
	const nums2 = await transform2(nums1);
	ele.textContent = nums2.join(", ");
}

start()


