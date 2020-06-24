import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  linkToPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "5px",
    border: "2px solid rgba(53, 59, 64, 0.66)",
    boxShadow: "5px 5px 10px gray",
    width: "max-content",
    maxWidth: "350px",
    height: "min-content",
    margin: "10px",
    padding: "15px",
    boxSizing: "border-box",
    alignSelf: "center"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "5px",
    border: "2px solid rgba(53, 59, 64, 0.66)",
    boxShadow: "5px 5px 10px gray",
    width: "max-content",
    maxWidth: "350px",
    height: "min-content",
    margin: "10px",
    padding: "15px",
    boxSizing: "border-box"
  },
  cardText: {
    flexGrow: "1",
    wordWrap: "break-word",
    textAlign: "center"
  },
  num: {
    flexGrow: "1",
    wordWrap: "break-word",
    textAlign: "center"
  },
  fibNum: {
    flexGrow: "1",
    wordWrap: "break-word",
    textAlign: "center"
  },
  date: {
    composes: "$cardText",
    textAlign: "right",
    fontStyle: "oblique",
    color: "rgba(20, 23, 94, 0.8)"
  }
});
