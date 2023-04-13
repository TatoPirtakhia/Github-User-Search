
async function users(user){
 try {
    const response = await axios.get("https://api.github.com/users/" + user)
    const getUser = response.data
    return getUser
 } catch (error) {
    console.log(error)
 }
}
export default users