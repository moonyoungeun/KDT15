let n = [1, 2, 3, 4, 5];

function solution(n) {
    var answer = [];
    for(let i = 0; i < n.length; i++)
        {
            answer[i] = n[n.length - (i + 1)];
        }
    return answer;
}

console.log(solution(n));