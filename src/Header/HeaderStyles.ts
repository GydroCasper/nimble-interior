import { CSSProperties } from "react"

export const headerStyles: CSSProperties = {
  height: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

export const navStyles: CSSProperties = {
  display: "flex",
  gap: "2rem",
}

export const navLinkStyles: CSSProperties = {
    WebkitTextSizeAdjust: "100%",
    boxSizing: "border-box",
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: "opacity .2s",
    verticalAlign: "top",
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    textDecoration: "none",
    display: "inline-block",
    position: "relative",
    opacity: 1,
    color: "#141845", // midnight blue
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "15px",
    fontWeight: 300,
    lineHeight: "20px",
}
