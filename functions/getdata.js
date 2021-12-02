/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


 
exports.handler = (event, context) => {
  console.log('Function `todo-read-all` invoked')

  const client = new faunadb.Client({
    secret: 'fnAED5cwgzACBy8RiqWVgYK2B9tplE07pLQdBkQZ'
  }) 
  return client.query(q.Paginate(q.Match(q.Ref('indexes/tester'))))
    .then((response) => {
      const todoRefs = response.data
      console.log('Todo refs', todoRefs)
      console.log(`${todoRefs.length} todos found`)
      // create new query out of todo refs. http://bit.ly/2LG3MLg
      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllTodoDataQuery).then((ret) => {
        console.log(JSON.stringify(ret));
        console.log(ret[0].data.me.name)
        return {
          statusCode: 200,
          body: JSON.stringify(ret[0].data.me.name)
        }
      })
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}