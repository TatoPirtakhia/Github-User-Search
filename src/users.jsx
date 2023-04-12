
async function users(user){
 try {
    const response = await axios.get("https://api.github.com/users/" + user,{
        headers: {
            authorization : "token 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"
        }
    })
    const getUser = response.data
    return getUser
 } catch (error) {
    console.log(error)
 }
}
export default users