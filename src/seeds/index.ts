

// const createNewRoles = async () => {
//   return await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into('roles')
//     .values([
//       {
//         title: 'admin',
//       }, {
//         title: 'author',
//       }, {
//         title: 'co-author',
//       }, {
//         title: 'guest'
//       }
//     ])
//     .execute();
// }
// const createNewUsers = async () => {
//   return await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into('users')
//     .values([
//       {
//         name: 'Dima',
//         email: 'dima@mail.ru',
//         password: bcrypt.hashSync('123456', 6),
//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//       },{
//         name: 'Misha',
//         email: 'misha@mail.ru',
//         password: bcrypt.hashSync('123456', 6),
//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//       },
//     ])
//     .execute();
// }
// const createNewPosts = async () => {
//   return await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into('posts')
//     .values([
//       {
//         title: 'Post 1',
//         image: 'http://lorempixel.com/400/200',
//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//       },{
//         title: 'Post 2',
//         image: 'http://lorempixel.com/400/200',
//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//       },{
//         title: 'Post 3',
//         image: 'http://lorempixel.com/400/200',
//         createdAt: Date.now(),
//         updatedAt: Date.now(),
//       },
//     ])
//     .execute();
// }
// const createNewUserRoles = async () => {
//   return await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into('user_roles')
//     .values([
//       {
//         user_id: 1,
//         role_id: 1,
//       },{
//         user_id: 2,
//         role_id: 2,
//       },
//     ])
//     .execute();
// }
// createConnection().then(async (connection) => {
//   // createNewRoles();
//   // createNewUsers();
//   createNewPosts();
//   // createNewUserRoles();
// }).catch(error => console.log(error));
