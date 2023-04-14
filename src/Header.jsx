import users from "./users";
import "./Header.css";
import { useState } from "react";
function Header(props) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(false);
  const [window2,setWindow2] = useState(window.innerWidth)
  let githubuser;
  async function getuser(user) {
    githubuser = await users(user);
    if (!githubuser) {
      setResult(true)
      setTimeout(() => {
        setResult(false)
      }, 3000);
      setValue("");
    } else {
      
      props.setUser(githubuser);
      setValue("");
    }
  }

  const shearchUser = () => {
    props.setInputValue(value);
    if (value !== "") {
      getuser(value);
    }
  };
  const keyPress = (event) => {
    setValue(event.target.value);
  };
  return (
    <header>
      <div className="upperDiv">
        <p className={props.dark ? "dark_Title spaceBold" : "title spaceBold"}>
          devfinder
        </p>
        <div className="switch">
          <div className="mode">
            <p
              className={
                props.dark ? "dark_title spaceBold" : "light_title spaceBold"
              }
            >
              {props.dark ? "LIGHT" : "DARK"}
            </p>
            {props.dark ? (
              <svg
                width="20"
                height="20"
                // className={props.dark?"darkIcons":"k"}
                onClick={props.changeColorMode}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFF" fillRule="nonzero">
                  <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
                </g>
              </svg>
            ) : (
              <svg
                width="20"
                className={props.dark ? "k" : "darkIcons2"}
                onClick={props.changeColorMode}
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
                  fill="#697C9A"
                  fillRule="nonzero"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className={props.dark ? "dark_bottomDiv" : "bottomDiv"}>
        <p className={result?"active spaceBold":"disable"}>No results</p>
        <div className="icons">
          <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
              fill="#0079ff"
            />
          </svg>
          <svg height="19" viewBox="0 0 16 16" width="19" className="Gihub">
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              fill={props.dark ? "white" : ""}
            />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          className={props.dark ? "dark_input spaceSmall" : "input spaceSmall"}
          onChange={keyPress}
          placeholder="Search GitHub username…"
        />
        <button className={result && window2?"redbutton spaceBold":"button spaceBold"} onClick={shearchUser}>
          {result && window2<768?"No results":"Search"}
        </button>
      </div>
    </header>
  );
}

export default Header;
