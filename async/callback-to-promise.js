
// Callback Hell Example
// Callback 지옥 예시 
// 가독성 안좋음, 비즈니스 로직 파악 안좋음, 디버깅 하기도 어려움, 문제 분석 어려움, 유지보수도 안좋음
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'lee' && password === 'qwer') ||
                    (id === 'kim' && password === 'asdf')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    } 

    getRole(user) {
        return new Promise((resolve, reject)=>{
            setTimeout( () => {
                if(user==='lee') {
                    resolve({name:'lee', role:'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

    // Homework Answer 🚀
  async getUserWithRole(user, password) {
    const user = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }

}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const password = prompt('Enter Your Password');

userStorage
.loginUser(id, password)
.then(userStorage.getRole)
.then(user=>alert(`Success, ${userWithRole.name} have a ${userWithRole.role} role`))
.catch(console.log);

// Homework Answer 🚀
userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then(console.log);
