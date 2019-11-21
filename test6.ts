const getUserInfo = (user: { name: string, age: number }): string => {
    return `name: ${user.name} age: ${user.age}`;
};
console.log(getUserInfo({name: "kaola", age: 18}))