import React from "react"
import "index.scss"
import { createRoot } from "react-dom/client"
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { App } from "App"
// import { router } from "App"

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)