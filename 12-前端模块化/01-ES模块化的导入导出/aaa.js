//1、导出
const name = "小明"
const age = 19

export {
	name,
	age
}

//2、导出参数
export const address = "杭州"

//3、导出函数
export function aaa() {
	console.log("Hello Vue")
}

//4、导出类
export class Person {
	age() {
		console.log("18")
	}
}
