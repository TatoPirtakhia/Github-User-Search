import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [dark, setDark] = useState(false);
  const changeColorMode = () => {
    setDark(!dark);
  };
  const [user, setUser] = useState({
    login: "TatoPirtakhia",
    id: 123636787,
    node_id: "U_kgDOB16MMw",
    avatar_url: "https://avatars.githubusercontent.com/u/123636787?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/TatoPirtakhia",
    html_url: "https://github.com/TatoPirtakhia",
    followers_url: "https://api.github.com/users/TatoPirtakhia/followers",
    following_url:
      "https://api.github.com/users/TatoPirtakhia/following{/other_user}",
    gists_url: "https://api.github.com/users/TatoPirtakhia/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/TatoPirtakhia/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/TatoPirtakhia/subscriptions",
    organizations_url: "https://api.github.com/users/TatoPirtakhia/orgs",
    repos_url: "https://api.github.com/users/TatoPirtakhia/repos",
    events_url: "https://api.github.com/users/TatoPirtakhia/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/TatoPirtakhia/received_events",
    type: "User",
    site_admin: false,
    name: "tato",
    company: "Georgia",
    blog: "",
    location: "kutaisi",
    email: null,
    hireable: null,
    bio: "hi am tato",
    twitter_username: "tato_pirtakhia",
    public_repos: 24,
    public_gists: 0,
    followers: 0,
    following: 1,
    created_at: "2023-01-26T11:24:15Z",
    updated_at: "2023-04-13T08:58:24Z",
  });
  return (
    <div className={dark ? "dark_body" : "body"}>
      <Header
        dark={dark}
        changeColorMode={changeColorMode}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setUser={setUser}
      />
      <Main inputValu={inputValue} user={user} dark={dark} />
    </div>
  );
}

export default App;
