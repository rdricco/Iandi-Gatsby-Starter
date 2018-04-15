import { injectGlobal } from "styled-components";

module.exports = 
injectGlobal`
*,
*:before,
*:after {
  box-sizing: inherit;
}
html {
  min-height: 100%;
  overflow-y: scroll;
}
body {
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
}
.ais-Hits-list{
  list-style-type: none;
  margin: 0;
  padding: 0;

}
.ais-Hits-item{
  list-style-type: none;
  margin: 0;
  padding: 0;

}
.footer{
position: absolute;
padding: 0;
margin: 0;
right: 0;
bottom: 0;
left: 0;
}
`
;
