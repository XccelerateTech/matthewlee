

export default class RunLengthEncoding {

    static encode = (str: string) => {
        let arr = str.split("");
        let temp = [];
        let count = 1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                count++
            } else if (arr[i] !== arr[i + 1]) {
                if (count > 1) {
                    temp.push(`${count}${arr[i]}`)
                } else if (count == 1) {
                    temp.push(`${arr[i]}`)
                }
                count = 1;
            }
        }
        return temp.join("")
    }

    static decode = (str: string) => {
        let arr = str.split("");
        let temp = [];
        let numArr = [];
        for (let i = 0; i < arr.length; i++) {
            //previous one is number and present one is number
            if ((!Number.isNaN(Number(arr[i-1])) && arr[i-1] != " ") && (!Number.isNaN(Number(arr[i])) && arr[i] != " ") ){
                numArr.push(arr[i-1])
            //previous one is number but present one is not number / is space
            } else if((!Number.isNaN(Number(arr[i-1])) && arr[i-1] != " " )&& (Number.isNaN(Number(arr[i])) || arr[i] == " ")){
                numArr.push(arr[i-1])
                let num = Number(numArr.join(""))
                for (let a = 0; a < num; a++) {
                    temp.push(arr[i])
                }
                numArr.length = 0;
                //previous one and present one are not numbers
            } else if ((Number.isNaN(Number(arr[i-1])) || arr[i-1] == " ") && (Number.isNaN(Number(arr[i]))) || arr[i] == " "){
                temp.push(arr[i])
            }
        }
        return temp.join("")
    }
}


